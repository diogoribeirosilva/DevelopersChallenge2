using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Nibo.DevelopersChallenge2.Domain.Core.Interfaces
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        void Add(TEntity obj);
        void Add(IEnumerable<TEntity> obj);
        IQueryable<TEntity> Get();
        IQueryable<TEntity> Get(Func<TEntity, bool> Where);
        IQueryable<TEntity> Get(params Expression<Func<TEntity, object>>[] Include);
        Task<TEntity> GetById(int id);
        Task<List<TEntity>> GetAll();
        void Update(TEntity obj);
        void Remove(TEntity obj);
        void Dispose();
    }
}
