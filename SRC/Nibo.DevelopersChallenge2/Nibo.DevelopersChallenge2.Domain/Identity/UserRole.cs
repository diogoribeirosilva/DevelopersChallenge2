using Microsoft.AspNetCore.Identity;

namespace Nibo.DevelopersChallenge2.Domain.Models.Identity
{
   public class UserRole : IdentityUserRole<int>
    {
        public User User { get; set; }
        public Role Role { get; set; }
    }
}