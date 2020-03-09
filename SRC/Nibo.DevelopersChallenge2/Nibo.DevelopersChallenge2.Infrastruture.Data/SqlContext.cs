using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Nibo.DevelopersChallenge2.Domain.Models;
using Nibo.DevelopersChallenge2.Domain.Models.Identity;

namespace Nibo.DevelopersChallenge2.Infrastruture.Data
{
    public class SqlContext : IdentityDbContext<User, Role, int,
                                                    IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>,
                                                    IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public SqlContext(DbContextOptions<SqlContext> options) : base(options)
        {

        }

        public DbSet<Players> Players { get; set; }
        public DbSet<TransactionOfx> Transaction { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<UserRole>(userRole =>
            {
                userRole.HasKey(ur => new { ur.UserId, ur.RoleId });

                userRole.HasOne(ur => ur.Role)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();

                userRole.HasOne(ur => ur.User)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired();
            }
            );
        }
    }
}
