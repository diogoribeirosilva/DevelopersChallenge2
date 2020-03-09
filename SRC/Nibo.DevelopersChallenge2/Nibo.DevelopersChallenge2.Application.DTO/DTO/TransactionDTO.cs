using System;
using System.Collections.Generic;
using System.Text;

namespace Nibo.DevelopersChallenge2.Application.DTO.DTO
{
   public  class TransactionDTO : IEquatable<TransactionDTO>
    {
        public string Type { get; set; }

        public DateTime DatePosted { get; set; }

        public decimal TransactionAmount { get; set; }

        public string Memo { get; set; }

        public bool Equals(TransactionDTO other)
        {
            return this.Type == other.Type &&
                this.DatePosted == other.DatePosted &&
                this.TransactionAmount == other.TransactionAmount &&
                this.Memo == other.Memo;
        }
    }
}
