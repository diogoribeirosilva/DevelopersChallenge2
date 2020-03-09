using Nibo.DevelopersChallenge2.Domain.Core.Interfaces;
using Nibo.DevelopersChallenge2.Domain.Core.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Nibo.DevelopersChallenge2.Services.Services
{
    public class BaseService<TEntity> : IDisposable, IBaseService<TEntity> where TEntity : class
    {
        private readonly IBaseRepository<TEntity> _repository;
        public bool AutoSaveChanges { get; set; }
        public BaseService(IBaseRepository<TEntity> Repository)
        {
            _repository = Repository;
        }
        public virtual void Add(TEntity obj)
        {
            _repository.Add(obj);
        }


        public virtual async Task<TEntity> GetById(int id)
        {
            return await _repository.GetById(id);
        }
        public virtual async Task<List<TEntity>> GetAll()
        {
            return await _repository.GetAll();
        }
 

        public virtual void Update(TEntity obj)
        {
            _repository.Update(obj);
        }
        public virtual void Remove(TEntity obj)
        {
            _repository.Remove(obj);
        }

        public virtual void Dispose()
        {
            _repository.Dispose();
        }
    }
}
