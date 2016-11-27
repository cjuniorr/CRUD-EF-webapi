using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteMVC.Models;

namespace TesteMVC.Contexts
{
    public class ProdutoContext : DbContext
    {
        public ProdutoContext(DbContextOptions<ProdutoContext> options)
           : base(options) { }
        public ProdutoContext() { }
        public DbSet<Produto> Produtos { get; set; }
    }
}
