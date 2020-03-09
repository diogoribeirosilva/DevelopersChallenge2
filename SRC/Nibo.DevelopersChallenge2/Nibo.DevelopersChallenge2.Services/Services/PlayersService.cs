using Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Repositories;
using Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Services;
using Nibo.DevelopersChallenge2.Domain.Models;

namespace Nibo.DevelopersChallenge2.Services.Services
{
    public class PlayersService : BaseService<Players>, IPlayersService
    {
        public readonly IPlayersRepository _playersRepository;
        public PlayersService(IPlayersRepository playersRepository)
             : base(playersRepository)
        {
            _playersRepository = playersRepository;
        }
    }
}
