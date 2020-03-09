using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using Nibo.DevelopersChallenge2.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Nibo.DevelopersChallenge2.CrossCutting.Adapter.Interfaces
{
    public interface IPlayersMapper
    {
        #region Mappers

        Players MapperToEntity(PlayersDTO playersDTO);

        List<PlayersDTO> MapperListPlayers(IEnumerable<Players> players);

        PlayersDTO MapperToDTO(Players players);

        #endregion
    }
}
