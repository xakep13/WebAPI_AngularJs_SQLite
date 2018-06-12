using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Web;
using Test_Project.Models;

namespace Test_Project.Context
{
    public class ItemContext :DbContext
    {
        public DbSet<Item> Items { get; set; }

        public ItemContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=Item.db");
        }
    }
}