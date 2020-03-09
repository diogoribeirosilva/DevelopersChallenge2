using System;
using System.Collections.Generic;
using System.Text;

namespace Nibo.DevelopersChallenge2.Application.DTO.DTO
{
    public class PlayersDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string FavoriteGame { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
