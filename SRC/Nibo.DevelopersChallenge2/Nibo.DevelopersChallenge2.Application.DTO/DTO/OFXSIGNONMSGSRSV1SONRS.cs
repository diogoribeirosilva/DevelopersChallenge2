using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Nibo.DevelopersChallenge2.Application.DTO.DTO
{
    public class OFXSIGNONMSGSRSV1SONRS
    {
        [XmlElement("STATUS")]
        public virtual OFXSIGNONMSGSRSV1SONRSSTATUS Status { get; set; }

        [XmlElement("DTSERVER")]
        public virtual string DateServer { get; set; }

        [XmlElement("LANGUAGE")]
        public virtual string Language { get; set; }

    }
}
