using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using Nibo.DevelopersChallenge2.Application.Interfaces;
using Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Nibo.DevelopersChallenge2.Application.Services
{
    public class TransactionApplicationSerive : ITransactionsApplicationService
    {
        ITransactionService _transactionService;

        public TransactionApplicationSerive(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        public void Add(IEnumerable<TransactionDTO> transactions)
        {
            _transactionService.Add(transactions);
        }

        public IEnumerable<TransactionDTO> Get()
        {
            return _transactionService.GetAllTransactions();
        }

        public TransactionDTO GetById(int id)
        {
            return _transactionService.GetFilteredTransactions(x => x.Id == id).First();
        }
    }
}
