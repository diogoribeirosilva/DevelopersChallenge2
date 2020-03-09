using System;
using System.Collections.Generic;
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
    public class PlayersController : ControllerBase
    {
        private readonly IPlayersApplicationService _playersApplicationService;

        public PlayersController(IPlayersApplicationService playersApplicationService)
        {
            _playersApplicationService = playersApplicationService;
        }
        // GET api/values
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> Get()
        {
            try
            {
                var results = await _playersApplicationService.GetAll();

                return Ok(results);
            }
            catch (Exception ex)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Database Failed: {ex.Message}");
            }

        }

        // GET api/values/5
        [HttpGet("{id}")]
        [AllowAnonymous]
        public ActionResult<string> Get(int id)
        {
            try
            {
                if (id == 0)
                    return NotFound();

                var result = _playersApplicationService.GetById(id);

                return Ok(result);
            }
            catch (Exception ex)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Database Failed: {ex.Message}");
            }
        }

        // POST api/values
        [HttpPost]
        [AllowAnonymous]
        public ActionResult Post([FromBody] PlayersDTO playersDTO)
        {
            try
            {
                if (playersDTO == null)
                    return NotFound();

                _playersApplicationService.Add(playersDTO);

                return Ok("Registered successfully");
            }
            catch (Exception ex)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, $" {ex.Message}");
            }


        }

        // PUT api/values/5
        [HttpPut("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult> Put(int id, PlayersDTO playersDTO)
        {
            try
            {
                if (playersDTO == null)
                    return NotFound();

                 playersDTO = await _playersApplicationService.GetById(id);
                if (playersDTO != null)
                {
                    _playersApplicationService.Update(playersDTO);
                    return Ok("Registered successfully");
                }
                else
                {
                    return NotFound();
                }

            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $" {ex.Message}");
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                if (id == 0)
                    return NotFound();

                var playersDTO = await _playersApplicationService.GetById(id);
                if (playersDTO != null)
                {
                      _playersApplicationService.Remove(playersDTO);
                    return Ok("Successfully removed");
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }
    }
}
