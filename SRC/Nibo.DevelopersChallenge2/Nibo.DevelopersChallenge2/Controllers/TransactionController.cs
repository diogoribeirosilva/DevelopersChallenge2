using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using Nibo.DevelopersChallenge2.Application.Interfaces;

namespace Nibo.DevelopersChallenge2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TransactionController : ControllerBase
    {
        ITransactionsApplicationService _transactionApplicationService;
        public TransactionController(ITransactionsApplicationService transactionApplicationService)
        {
            _transactionApplicationService = transactionApplicationService;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_transactionApplicationService.Get().OrderBy(x => x.DatePosted));
            }
            catch (Exception)
            {
                throw;
            }

        }

        // GET api/values/5
        [HttpGet("{id}")]
        [AllowAnonymous]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(_transactionApplicationService.GetById(id));
            }
            catch (Exception)
            {
                return NotFound(id);
            }

        }

        [HttpPost]
        public IActionResult Post([FromBody] TransactionDTO[] transactions)
        {
            try
            {
                _transactionApplicationService.Add(transactions);
                return Created(nameof(Post), null);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost, Route("CheckNewTransactions")]
        public IActionResult CheckNewTransactions([FromBody] TransactionDTO[] transactions)
        {
            try
            {
                IEnumerable<TransactionDTO> dbTransactions = _transactionApplicationService.Get();
                IEnumerable<TransactionDTO> newTransactions = transactions.Where(t => !dbTransactions.Contains(t));
                return Ok(newTransactions);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}