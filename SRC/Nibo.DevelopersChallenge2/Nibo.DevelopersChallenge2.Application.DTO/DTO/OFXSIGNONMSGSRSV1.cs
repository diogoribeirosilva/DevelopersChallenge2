using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Nibo.DevelopersChallenge2.Application.DTO.DTO
{
    public class OFXSIGNONMSGSRSV1
    {
        [XmlElement("SONRS")]
        public virtual OFXSIGNONMSGSRSV1SONRS SONRS { get; set; }
    }
}
