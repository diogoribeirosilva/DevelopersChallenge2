using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using Nibo.DevelopersChallenge2.Application.Interfaces;
using Nibo.DevelopersChallenge2.CrossCutting.Adapter.Map;
using Nibo.DevelopersChallenge2.CrossCutting.IOC;
using Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Services;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Nibo.DevelopersChallenge2.Application.Services
{
    public class OFXApplicationService : IOFXApplicationService
    {
        IOFXService _ofxMerger;

        public OFXApplicationService(IOFXService ofxMerger)
        {
            _ofxMerger = ofxMerger;
        }

        public IEnumerable<TransactionDTO> ImportFiles(params string[] filesContent)
        {
            IEnumerable<OFXDocument> ofxDocuments = OFXDocumentParser.Load(filesContent);
            _ofxMerger.AddTransactionsAndMerge(ofxDocuments.ToArray());
            return _ofxMerger.Transactions.Select(TransactionMapper.ToTransactionDTO).AsEnumerable();
        }

        public IEnumerable<TransactionDTO> ImportFiles(Stream fileStream)
        {
            IEnumerable<OFXDocument> ofxDocuments = OFXDocumentParser.Load(fileStream);
            _ofxMerger.AddTransactionsAndMerge(ofxDocuments.ToArray());
            return _ofxMerger.Transactions.Select(TransactionMapper.ToTransactionDTO).AsEnumerable();
        }
    }

}
