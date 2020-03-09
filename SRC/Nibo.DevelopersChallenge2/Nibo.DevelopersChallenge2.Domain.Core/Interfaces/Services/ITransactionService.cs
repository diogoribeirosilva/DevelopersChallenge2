using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using Nibo.DevelopersChallenge2.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;


namespace Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Services
{
    public interface ITransactionService
    {
        IEnumerable<TransactionDTO> GetAllTransactions();
        IEnumerable<TransactionDTO> GetFilteredTransactions(Func<TransactionOfx, bool> filter);
        void Add(IEnumerable<TransactionDTO> transactions);
    }
}
