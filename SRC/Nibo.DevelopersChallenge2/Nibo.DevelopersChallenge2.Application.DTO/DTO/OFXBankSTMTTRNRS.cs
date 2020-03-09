using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Nibo.DevelopersChallenge2.Application.DTO.DTO
{
    public class OFXBankSTMTTRNRS
    {
        [XmlElement("TRNUID")]
        public virtual ushort TrnUid { get; set; }

        [XmlElement("STATUS")]
        public virtual OFXBankSTATUS Status { get; set; }

        [XmlElement("STMTRS")]
        public virtual OFXBankSTMTRS StmTrs { get; set; }
    }
}
