using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteMVC.Contexts;
using TesteMVC.Models;

namespace TesteMVC.Repository
{
    
    public class ProdutoRepository : IProdutoRepository
    {
        static List<Produto> ProdutoList = new List<Produto>();

        ProdutoContext _context;
        public ProdutoRepository(ProdutoContext context)
        {
            _context = context;
        }

        public void Add(Produto item)
        {
            //item.FirstName = "Fulano";
            //item.LastName = "Sicranos";
            //item.Email = "bla bla";
            //ContactsList.Add(item);
            _context.Produtos.Add(item);
            _context.SaveChanges();
        }

        public Produto Find(string key)
        {
            
            return ProdutoList
                .Where(e => e.Nome.Equals(key))
                .SingleOrDefault();
        }

        public IEnumerable<Produto> GetAll()
        {
            return _context.Produtos.ToList();
            //return ContactsList;
        }

        public void Remove(string Id)
        {
            var itemToRemove = ProdutoList.SingleOrDefault(r => r.Nome == Id);
            if (itemToRemove != null)
                ProdutoList.Remove(itemToRemove);
        }

        public void Update(Produto item)
        {
            var itemToUpdate = ProdutoList.SingleOrDefault(r => r.Id == item.Id);
            if (itemToUpdate != null)
            {
                itemToUpdate.Nome = item.Nome;
                itemToUpdate.Descricao = item.Descricao;
                itemToUpdate.Fornecedora = item.Fornecedora;
                itemToUpdate.Preco = item.Preco;
            }
        }
    }
}
