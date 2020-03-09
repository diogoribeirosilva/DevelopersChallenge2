using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using Nibo.DevelopersChallenge2.CrossCutting.Adapter.Map;
using Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Repositories;
using Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Services;
using Nibo.DevelopersChallenge2.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Nibo.DevelopersChallenge2.Services.Services
{
    public class TransactionService : ITransactionService
    {
        ITransactionRepository _transactionRepository;

        public TransactionService(ITransactionRepository repository)
        {
            _transactionRepository = repository;
        }

        public void Add(IEnumerable<TransactionDTO> transactions)
        {
            _transactionRepository.Add(transactions.Select(TransactionMapper.ToTransaction));
        }

        public IEnumerable<TransactionDTO> GetAllTransactions()
        {
            return _transactionRepository.Get().Select(TransactionMapper.ToTransactionDTO);
        }

        public IEnumerable<TransactionDTO> GetFilteredTransactions(Func<TransactionOfx, bool> filter)
        {
            return _transactionRepository.Get(filter).Select(TransactionMapper.ToTransactionDTO);
        }
    }
}
