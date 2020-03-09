using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Nibo.DevelopersChallenge2.Application.DTO.DTO
{
    public class OFXBankBANKACCTFROM
    {
        [XmlElement("BANKID")]
        public virtual ushort BankId { get; set; }

        [XmlElement("ACCTID")]
        public virtual ulong AccountId { get; set; }

        [XmlElement("ACCTTYPE")]
        public virtual string AccountType { get; set; }
    }
}
