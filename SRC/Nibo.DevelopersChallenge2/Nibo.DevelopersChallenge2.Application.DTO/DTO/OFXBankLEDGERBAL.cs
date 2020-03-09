using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Nibo.DevelopersChallenge2.Application.DTO.DTO
{
    public class OFXBankLEDGERBAL
    {
        [XmlElement("BALAMT")]
        public virtual decimal BalanceAmount { get; set; }

        [XmlElement("DTASOF")]
        public virtual string Date { get; set; }
    }
}
