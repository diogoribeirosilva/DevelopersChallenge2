using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using Nibo.DevelopersChallenge2.CrossCutting.Adapter.Map;
using Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Services;
using Nibo.DevelopersChallenge2.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Nibo.DevelopersChallenge2.Services.Services
{
    public class OFXService : IOFXService
    {
        public IList<TransactionOfx> Transactions { get; private set; } = new List<TransactionOfx>();

        public void AddTransactionsAndMerge(params OFXDocument[] ofxDocuments)
        {
            foreach (OFXDocument document in ofxDocuments)
            {
                IEnumerable<TransactionOfx> transactions = ExtractTransactions(document);
                IEnumerable<TransactionOfx> newTransactions = transactions.Where(t => !Transactions.Contains(t));
                (Transactions as List<TransactionOfx>).AddRange(newTransactions);
            }
        }

        private IEnumerable<TransactionOfx> ExtractTransactions(OFXDocument ofxDocument)
        {
            return ofxDocument.Bank.STMTSTRNRS.StmTrs.TranList.Transactions.Select(TransactionMapper.ToTransaction);
        }
    }
}
