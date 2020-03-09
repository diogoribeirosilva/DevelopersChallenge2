using System;
using System.Collections.Generic;
using System.Text;

namespace Nibo.DevelopersChallenge2.Domain.Models
{
    public class Players
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string FavoriteGame { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
