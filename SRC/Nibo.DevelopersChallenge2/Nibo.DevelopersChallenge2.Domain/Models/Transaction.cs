using Nibo.DevelopersChallenge2.Domain.Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace Nibo.DevelopersChallenge2.Domain.Models
{
    public class TransactionOfx : IEquatable<TransactionOfx>
    {
        public int Id { get; set; }

        public TransactionType Type { get; set; }

        public DateTime DatePosted { get; set; }

        public decimal TransactionAmount { get; set; }

        public string Memo { get; set; }

        public override bool Equals(object obj)
        {
            if (!(obj is TransactionOfx)) return false;
            TransactionOfx other = (TransactionOfx)obj;
            return this.DatePosted == other.DatePosted &&
                this.Memo == other.Memo &&
                this.TransactionAmount == other.TransactionAmount &&
                this.Type == other.Type;
        }

        public bool Equals(TransactionOfx other)
        {
            return other != null &&
                   Type == other.Type &&
                   DatePosted == other.DatePosted &&
                   TransactionAmount == other.TransactionAmount &&
                   Memo == other.Memo;
        }

        public override int GetHashCode()
        {
            var hashCode = 1253119681;
            hashCode = hashCode * -1521134295 + Type.GetHashCode();
            hashCode = hashCode * -1521134295 + DatePosted.GetHashCode();
            hashCode = hashCode * -1521134295 + TransactionAmount.GetHashCode();
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(Memo);
            return hashCode;
        }
    }
}
