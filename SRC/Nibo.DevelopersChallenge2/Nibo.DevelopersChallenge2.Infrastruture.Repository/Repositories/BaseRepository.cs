using Microsoft.EntityFrameworkCore;
using Nibo.DevelopersChallenge2.Domain.Core.Interfaces;
using Nibo.DevelopersChallenge2.Infrastruture.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Nibo.DevelopersChallenge2.Infrastruture.Repository.Repositories
{
    public class BaseRepository<TEntity> : IDisposable, IBaseRepository<TEntity> where TEntity : class
    {
        private readonly SqlContext _context;
        private DbSet<TEntity> _entities;

        public bool AutoSaveChanges { get; set; }
        public BaseRepository(SqlContext Context)
        {

            _context = Context;
        }
        public void Add(TEntity obj)
        {
            try
            {
                _context.Set<TEntity>().Add(obj);
                _context.SaveChanges();

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public virtual async Task<TEntity> GetById(int id)
        {
            return await _context.Set<TEntity>().FindAsync(id);
        }

        public virtual async Task<List<TEntity>> GetAll()
        {
            return await _context.Set<TEntity>().ToListAsync();
        }

        public virtual void Update(TEntity obj)
        {

            try
            {
                _context.Entry(obj).State = EntityState.Modified;
                _context.SaveChanges();

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public virtual void Remove(TEntity obj)
        {
            try
            {
                _context.Set<TEntity>().Remove(obj);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public virtual void Dispose()
        {
            _context.Dispose();
        }

        public virtual IQueryable<TEntity> Get()
        {
            return Get(Where: null, Include: null);
        }

        public virtual IQueryable<TEntity> Get(Func<TEntity, bool> where)
        {
            return Get(Where: where);
        }

        public virtual IQueryable<TEntity> Get(params Expression<Func<TEntity, object>>[] include)
        {
            return Get(Where: null, Include: include);
        }

        public virtual IQueryable<TEntity> Get(Func<TEntity, bool> Where, params Expression<Func<TEntity, object>>[] Include)
        {
            IQueryable<TEntity> result = _entities;

            if (Where != null)
                result = result.Where(Where).AsQueryable();

            if (Include != null && Include.Any())
            {
                foreach (var include in Include)
                    result = result.Include(include);
            }

            return result;
        }

        public void Add(IEnumerable<TEntity> entities)
        {
            if (entities == null) throw new ArgumentNullException(nameof(entities));
            _entities.AddRange(entities);

            if (AutoSaveChanges) this.SaveChanges();
        }
        public virtual void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
