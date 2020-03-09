using AutoMapper;
using Nibo.DevelopersChallenge2.Application.DTO.DTO;
using Nibo.DevelopersChallenge2.Domain.Models;
using Nibo.DevelopersChallenge2.Domain.Models.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nibo.DevelopersChallenge2.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {

            CreateMap<Players, PlayersDTO>().ReverseMap();

            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<User, UserLoginDto>().ReverseMap();
            //  CreateMap<Endereco, EnderecoDTO>().ReverseMap();
        }
    }
}
