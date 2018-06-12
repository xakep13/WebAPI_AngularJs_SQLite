using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Test_Project.Context;
using Test_Project.Models;

namespace Test_Project.Controllers
{
    public class ItemController : ApiController
    {
        public object Get(int index)
        {
            ItemViewModel viewModel = new ItemViewModel();
            using (ItemContext db = new ItemContext())
            {
               viewModel.Items = db.Items.Skip(4 * (index-1)).Take(4).ToList();
               viewModel.Count = db.Items.Count();
            }
            return viewModel;
        }
       
        // POST: api/Item
        public int Post(Item item)
        {
            if (ModelState.IsValid)
            {
                using (ItemContext db = new ItemContext())
                {
                    db.Items.Add(item);
                    db.SaveChanges();
                }
                return 1;
            }
            return 0;
        }

        // PUT: api/Item/5
        public int Put(Item item)
        {
            if (ModelState.IsValid)
            {
                using (ItemContext db = new ItemContext())
                {
                    db.Entry(item).State = EntityState.Modified;
                    try
                    {
                        db.SaveChanges();
                        return 1;
                    }
                    catch (Exception)
                    {
                        return 0;
                        throw;
                    }
                }
            }
            return 0;
        }

        // DELETE: api/Item/5
        public int Delete(int id)
        {
            using (ItemContext db = new ItemContext())
            {
                Item item = db.Items.Find(id);

                if (item != null)
                {
                    try
                    {
                        db.Items.Remove(item);
                        db.SaveChanges();
                        return 1;
                    }
                    catch (Exception)
                    {
                        return 0;
                        throw;
                    }
                }
                return 0;
            }
        }
    }
}
