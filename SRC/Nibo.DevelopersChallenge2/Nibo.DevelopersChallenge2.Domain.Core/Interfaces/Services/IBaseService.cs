using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Services
{
    public interface IBaseService<TEntity> where TEntity : class
    {
        void Add(TEntity obj);
        Task<TEntity> GetById(int id);
        Task<List<TEntity>> GetAll();
        void Update(TEntity obj);
        void Remove(TEntity obj);
        void Dispose();

    }
}
