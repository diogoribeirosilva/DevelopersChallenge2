using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Nibo.DevelopersChallenge2.Application.DTO.DTO
{
    public class OFXBankTRANLIST
    {
        [XmlElement("DTSTART")]
        public virtual string DateStart { get; set; }

        [XmlElement("DTEND")]
        public virtual string DateEnd { get; set; }

        [XmlElement("STMTTRN")]
        public virtual OFXBankLISTSTMTTRN[] Transactions { get; set; }
    }
}
