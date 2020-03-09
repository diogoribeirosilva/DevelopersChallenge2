using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using Nibo.DevelopersChallenge2.CrossCutting.Adapter.Interfaces;
using Nibo.DevelopersChallenge2.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Nibo.DevelopersChallenge2.CrossCutting.Adapter.Map
{
    public class PlayersMapper : IPlayersMapper
    {
        List<PlayersDTO> playersDTOs = new List<PlayersDTO>();


        public List<PlayersDTO> MapperListPlayers(IEnumerable<Players> players)
        {
            foreach (var item in players)
            {
                PlayersDTO playersDTO = new PlayersDTO
                {
                    Id = item.Id,
                    Name = item.Name,
                    BirthDate = item.BirthDate,
                    FavoriteGame = item.FavoriteGame,
                    Email = item.Email
                };
                playersDTOs.Add(playersDTO);
            }

            return  playersDTOs;
        }
        public Players MapperToEntity(PlayersDTO playersDTO)
        {
            Players Players = new Players
            {
                Id = playersDTO.Id,
                Name = playersDTO.Name,
                BirthDate = playersDTO.BirthDate,
                FavoriteGame = playersDTO.FavoriteGame,
                Email = playersDTO.Email
            };

            return Players;
        }

        public PlayersDTO MapperToDTO(Players players)
        {
            PlayersDTO playersDTO = new PlayersDTO
            {
                Id = players.Id,
                Name = players.Name,
                BirthDate = players.BirthDate,
                FavoriteGame = players.FavoriteGame,
                Email = players.Email
            };

            return  playersDTO;
        }

 
    }
}
