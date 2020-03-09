using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using Nibo.DevelopersChallenge2.Application.Interfaces;
using Nibo.DevelopersChallenge2.CrossCutting.Adapter.Interfaces;
using Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Nibo.DevelopersChallenge2.Application.Services
{
    public class PlayersApplicationService : IPlayersApplicationService
    {
        private readonly IPlayersService _playersService;
        private readonly IPlayersMapper _playersMapper;

        public PlayersApplicationService(IPlayersService playersService, IPlayersMapper mapperPlayers)
        {
            _playersService = playersService;
            _playersMapper = mapperPlayers;
        }
        public void Add(PlayersDTO obj)
        {
            var objPlayers = _playersMapper.MapperToEntity(obj);
            _playersService.Add(objPlayers);
        }

        public void Dispose()
        {
            _playersService.Dispose();
        }

        public async Task<List<PlayersDTO>> GetAll()
        {
            var objPlayers = await _playersService.GetAll();

            var players =  _playersMapper.MapperListPlayers(objPlayers);

            return players;
        }

        public async Task<PlayersDTO> GetById(int id)
        {
            var objPlayers = await _playersService.GetById(id);
            PlayersDTO players = _playersMapper.MapperToDTO(objPlayers);
           
            return players;
        }

        public void Remove(PlayersDTO obj)
        {
            var objPlayer = _playersMapper.MapperToEntity(obj);
            _playersService.Remove(objPlayer);

        }

        public void Update(PlayersDTO obj)
        {
            var objPlayers = _playersMapper.MapperToEntity(obj);
            _playersService.Update(objPlayers);
        }
    }
}
