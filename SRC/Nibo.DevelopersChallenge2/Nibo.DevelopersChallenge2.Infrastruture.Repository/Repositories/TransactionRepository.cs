using System;
using Microsoft.EntityFrameworkCore;
using Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Repositories;
using Nibo.DevelopersChallenge2.Domain.Models;
using Nibo.DevelopersChallenge2.Infrastruture.Data;

namespace Nibo.DevelopersChallenge2.Infrastruture.Repository.Repositories
{
    public class TransactionRepository : BaseRepository<TransactionOfx>, ITransactionRepository
    {
        private readonly SqlContext _context;
        public TransactionRepository(SqlContext Context)
            : base(Context)
        {
            _context = Context;
        }
    }
}
