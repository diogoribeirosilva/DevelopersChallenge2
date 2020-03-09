using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Nibo.DevelopersChallenge2.Application.Interfaces
{
    public interface IPlayersApplicationService
    {
        void Add(PlayersDTO obj);

        Task<PlayersDTO> GetById(int id);

        Task<List<PlayersDTO>> GetAll();

        void Update(PlayersDTO obj);

        void Remove(PlayersDTO obj);

        void Dispose();

    }
}
