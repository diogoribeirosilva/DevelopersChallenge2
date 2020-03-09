﻿using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using Nibo.DevelopersChallenge2.Domain.Enum;
using Nibo.DevelopersChallenge2.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Nibo.DevelopersChallenge2.CrossCutting.Adapter.Map
{
    public static class TransactionMapper
    {
        public static TransactionOfx ToTransaction(this OFXBankLISTSTMTTRN transactionDTO)
        {
            return new TransactionOfx
            {
                Memo = transactionDTO.Memo,
                TransactionAmount = transactionDTO.TransactionAmount,
                Type = transactionDTO.TransactionType.ToUpper().Trim() == "CREDIT" ? TransactionType.CREDIT : TransactionType.DEBIT,
                DatePosted = ConvertOFXDateToDateTime(transactionDTO.DatePosted)
            };
        }

        public static TransactionDTO ToTransactionDTO(this TransactionOfx transaction)
        {
            return new TransactionDTO
            {
                Memo = transaction.Memo,
                DatePosted = transaction.DatePosted,
                TransactionAmount = transaction.TransactionAmount,
                Type = transaction.Type.ToString()
            };
        }

        public static TransactionOfx ToTransaction(this TransactionDTO transactionDTO)
        {
            return new TransactionOfx
            {
                Memo = transactionDTO.Memo,
                DatePosted = transactionDTO.DatePosted,
                TransactionAmount = transactionDTO.TransactionAmount,
                Type = transactionDTO.Type.ToUpper().Trim() == "CREDIT" ? TransactionType.CREDIT : TransactionType.DEBIT,
            };
        }

        private static DateTime ConvertOFXDateToDateTime(string ofxDate)
        {
            int year = Convert.ToInt16(ofxDate.Substring(0, 4));
            int month = Convert.ToInt16(ofxDate.Substring(4, 2));
            int day = Convert.ToInt16(ofxDate.Substring(6, 2));
            int hours = Convert.ToInt16(ofxDate.Substring(8, 2));
            int minutes = Convert.ToInt16(ofxDate.Substring(10, 2));
            int seconds = Convert.ToInt16(ofxDate.Substring(12, 2));

            return new DateTime(year, month, day, hours, minutes, seconds);
        }
    }
}
