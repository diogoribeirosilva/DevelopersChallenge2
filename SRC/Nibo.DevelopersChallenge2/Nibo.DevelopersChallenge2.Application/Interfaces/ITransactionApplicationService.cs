using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Nibo.DevelopersChallenge2.Application.Interfaces
{
    public interface ITransactionsApplicationService
    {
        IEnumerable<TransactionDTO> Get();
        TransactionDTO GetById(int id);
        void Add(IEnumerable<TransactionDTO> transactions);
    }
}
