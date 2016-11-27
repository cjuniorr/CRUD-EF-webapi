using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteMVC.Models;

namespace TesteMVC.Repository
{
    public interface IProdutoRepository
    {
        void Add(Produto item);
        IEnumerable<Produto> GetAll();
        Produto Find(string key);
        void Remove(string Id);
        void Update(Produto item);
    }
}
