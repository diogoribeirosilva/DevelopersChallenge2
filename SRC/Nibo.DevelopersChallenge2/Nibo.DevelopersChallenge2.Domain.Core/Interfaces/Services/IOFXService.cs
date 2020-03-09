using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using Nibo.DevelopersChallenge2.Domain.Models;
using System.Collections.Generic;


namespace Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Services
{
    public interface IOFXService
    {
        IList<TransactionOfx> Transactions { get; }
        void AddTransactionsAndMerge(params OFXDocument[] ofxDocuments);
    }

}
