using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Nibo.DevelopersChallenge2.Application.DTO.DTO
{
    public class OFXBankSGSRSV1
    {
        [XmlElement("STMTTRNRS")]
        public virtual OFXBankSTMTTRNRS STMTSTRNRS { get; set; }
    }
}
