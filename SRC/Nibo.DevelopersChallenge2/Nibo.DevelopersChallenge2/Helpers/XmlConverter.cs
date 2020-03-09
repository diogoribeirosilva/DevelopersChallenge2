
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Nibo.DevelopersChallenge2.Helpers
{
    public static class XmlConverter
    {
        public static string Convert(string filePath)
        {
            string xmlResultingText = "";
            string line;
            TextReader reader = new StreamReader(filePath);

            while ((line = reader.ReadLine()) != null)
            {
                line = line.Trim();
                string closeTag = "";

                if (!line.StartsWith("<")) continue;
                if (line == "/n") continue;

                string openTag = line.Substring(1, line.IndexOf(">") - 1);
                int startTagCount = line.Count(i => i == '<');
                if (startTagCount > 1)
                {
                    int length = line.Length;
                    int lastOpenTagSimbol = line.LastIndexOf("<");
                    closeTag = line.Substring(lastOpenTagSimbol + 1, length - lastOpenTagSimbol - 2);
                    if (closeTag.StartsWith("/")) closeTag = closeTag.Substring(1);
                    if (closeTag != openTag)
                    {
                        line = line.Insert(lastOpenTagSimbol, "</" + openTag + ">");
                    }
                }
                else if (!line.EndsWith(">"))
                {
                    line += $"</{openTag}>";
                }

                xmlResultingText += "\n" + line;
            }
            return xmlResultingText;
        }

    }

}
