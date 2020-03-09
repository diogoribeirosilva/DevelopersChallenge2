using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Nibo.DevelopersChallenge2.Application.DTO.DTO
{
    public class OFXBankSTMTRS
    {
        [XmlElement("CURDEF")]
        public virtual string CurDef { get; set; }

        [XmlElement("BANKACCTFROM")]
        public virtual OFXBankBANKACCTFROM AcctFrom { get; set; }

        [XmlElement("BANKTRANLIST")]
        public virtual OFXBankTRANLIST TranList { get; set; }

        [XmlElement("LEDGERBAL")]
        public virtual OFXBankLEDGERBAL LedgerBalance { get; set; }
    }
}
