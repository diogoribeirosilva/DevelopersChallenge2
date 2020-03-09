using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Nibo.DevelopersChallenge2.Application.Interfaces
{
    public interface IOFXApplicationService
    {

        IEnumerable<TransactionDTO> ImportFiles(params string[] filesContent);
        IEnumerable<TransactionDTO> ImportFiles(Stream fileStream);
    }
}
