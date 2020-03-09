using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Nibo.DevelopersChallenge2.Application.DTO.DTO
{
    public class OFXBankSTATUS
    {
        [XmlElement("CODE")]
        public virtual byte Code { get; set; }

        [XmlElement("SEVERITY")]
        public virtual string Severity { get; set; }
    }
}
