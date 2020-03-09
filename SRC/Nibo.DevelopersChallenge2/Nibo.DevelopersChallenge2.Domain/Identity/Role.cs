using System.Collections.Generic;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNetCore.Identity;

namespace Nibo.DevelopersChallenge2.Domain.Models.Identity
{
    public class Role: IdentityRole<int>
    {
         public List<UserRole> UserRoles { get; set; }
    }
}