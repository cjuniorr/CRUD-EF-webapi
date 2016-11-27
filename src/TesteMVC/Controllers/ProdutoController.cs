using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteMVC.Models;
using TesteMVC.Repository;

namespace TesteMVC.Controllers
{
    [Route("api/[controller]")]
    public class ProdutoController : Controller
    {
        public IProdutoRepository ProdutoRepo { get; set; }

        public ProdutoController(IProdutoRepository _repo)
        {
            ProdutoRepo = _repo;
        }

        [HttpGet]
        public IEnumerable<Produto> GetAll()
        {
            
            return ProdutoRepo.GetAll();
        }

        [HttpGet("{id}", Name = "GetProduto")]
        public IActionResult GetById(string id)
        {
            var item = ProdutoRepo.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Produto item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            ProdutoRepo.Add(item);
            return CreatedAtRoute("GetProduto", new { Controller = "Produto", id = item.Nome }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, [FromBody] Produto item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            var contactObj = ProdutoRepo.Find(id);
            if (contactObj == null)
            {
                return NotFound();
            }
            ProdutoRepo.Update(item);
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            ProdutoRepo.Remove(id);
        }
    }
}
