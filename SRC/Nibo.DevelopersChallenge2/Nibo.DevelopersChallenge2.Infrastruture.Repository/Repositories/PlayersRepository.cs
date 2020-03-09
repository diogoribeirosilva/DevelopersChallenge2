using Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Repositories;
using Nibo.DevelopersChallenge2.Domain.Models;
using Nibo.DevelopersChallenge2.Infrastruture.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Nibo.DevelopersChallenge2.Infrastruture.Repository.Repositories
{
    public class PlayersRepository: BaseRepository<Players>, IPlayersRepository
    {
        private readonly SqlContext _context;
        public PlayersRepository(SqlContext Context)
            : base(Context)
        {
            _context = Context;
        }
    }
}
