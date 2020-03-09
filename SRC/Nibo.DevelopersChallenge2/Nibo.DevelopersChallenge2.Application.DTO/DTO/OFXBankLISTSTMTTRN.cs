using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Nibo.DevelopersChallenge2.Application.DTO.DTO
{
    public class OFXBankLISTSTMTTRN
    {
        [XmlElement("TRNTYPE")]
        public virtual string TransactionType { get; set; }

        [XmlElement("DTPOSTED")]
        public virtual string DatePosted { get; set; }

        [XmlElement("TRNAMT")]
        public virtual decimal TransactionAmount { get; set; }

        [XmlElement("MEMO")]
        public virtual string Memo { get; set; }
    }
}
