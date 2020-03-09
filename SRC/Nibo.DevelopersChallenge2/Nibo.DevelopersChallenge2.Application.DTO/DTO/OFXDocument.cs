using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Nibo.DevelopersChallenge2.Application.DTO.DTO
{
    [XmlRoot("OFX")]
    public class OFXDocument
    {
        [XmlElement("SIGNONMSGSRSV1")]
        public virtual OFXSIGNONMSGSRSV1 SIGNON { get; set; }

        [XmlElement("BANKMSGSRSV1")]
        public virtual OFXBankSGSRSV1 Bank { get; set; }
    }
}
