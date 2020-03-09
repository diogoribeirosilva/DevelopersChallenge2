using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Nibo.DevelopersChallenge2.Application.Interfaces;
using Nibo.DevelopersChallenge2.Application.Services;
using Nibo.DevelopersChallenge2.CrossCutting.Adapter.Interfaces;
using Nibo.DevelopersChallenge2.CrossCutting.Adapter.Map;
using Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Repositories;
using Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Services;
using Nibo.DevelopersChallenge2.Domain.Models.Identity;
using Nibo.DevelopersChallenge2.Infrastruture.Data;
using Nibo.DevelopersChallenge2.Infrastruture.Repository.Repositories;
using Nibo.DevelopersChallenge2.Services.Services;
using System;
using System.Text;


namespace Nibo.DevelopersChallenge2
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<SqlContext>(
             x => x.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"))
         );
            IdentityBuilder builder = services.AddIdentityCore<User>(options => {
                options.Password.RequireDigit = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 6;
            });


            builder = new IdentityBuilder(builder.UserType, typeof(Role), builder.Services);
            builder.AddEntityFrameworkStores<SqlContext>();
            builder.AddRoleValidator<RoleValidator<Role>>();
            builder.AddRoleManager<RoleManager<Role>>();
            builder.AddSignInManager<SignInManager<User>>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII
                                .GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });
            services.AddMvc(options =>
            {
                var policy = new AuthorizationPolicyBuilder()
                .RequireAuthenticatedUser()
                .Build();
                options.Filters.Add(new AuthorizeFilter(policy));
            })
            .SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
            //.AddJsonOptions(opt => opt.SerializerSettings.ReferenceLoopHandling =
            //Newtonsoft.Json.ReferenceLoopHandling.Ignore);

            services.AddMemoryCache();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "Developers Chellenge 2",
                    Description = "API Developers Chellenge 2",
                    Contact = new OpenApiContact
                    {
                        Name = "Diogo Ribeiro da Silva",
                        Email = "diogoribeirosilva@gmail.com",
                        Url = new Uri("https://www.linkedin.com/in/diogo-ribeiro-da-silva-b43a863b/"),
                    },
                });
            });

            services.AddScoped<IPlayersRepository, PlayersRepository>();
            services.AddScoped<IPlayersApplicationService, PlayersApplicationService>();
            services.AddScoped<IPlayersService, PlayersService>();
            services.AddScoped<IPlayersMapper, PlayersMapper>();
            services.AddScoped<IOFXApplicationService, OFXApplicationService>();
            services.AddScoped<ITransactionsApplicationService, TransactionApplicationSerive>();
            services.AddScoped<ITransactionService, TransactionService>();
            services.AddScoped<ITransactionRepository, TransactionRepository>();
            services.AddScoped<IOFXService, OFXService>();

            services.AddAutoMapper();
            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseStaticFiles();

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Api Developers Chellenge 2");
                c.RoutePrefix = string.Empty;
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }
            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
