using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using Nibo.DevelopersChallenge2.Application.Interfaces;

namespace Nibo.DevelopersChallenge2.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private readonly IOFXApplicationService _ofxApplicationService;

        public UploadController(IOFXApplicationService ofxApplicationService)
        {
            _ofxApplicationService = ofxApplicationService;
        }

        // POST api/values
        [HttpPost, DisableRequestSizeLimit]
        [AllowAnonymous]
        public IActionResult Post()
        {
            try
            {
                IEnumerable<TransactionDTO> mergedTransactions = null;
                foreach (var file in Request.Form.Files)
                {
                    Stream fileStream = file.OpenReadStream();
                    mergedTransactions = _ofxApplicationService.ImportFiles(fileStream);
                }

                return Created(nameof(Post), mergedTransactions.OrderBy(t => t.DatePosted));
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}