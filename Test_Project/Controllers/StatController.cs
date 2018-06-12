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
    public class StatController : ApiController
    {        
        public StatisticViewModel Get( int pageIndex)
        {
            List<Item> items = new List<Item>();
            List<Statistic> stat = new List<Statistic>();
            StatisticViewModel statistic = new StatisticViewModel();
           
            using (ItemContext db = new ItemContext())
            {
                items = db.Items.ToList();
                var g = items.GroupBy(i => i.Type).Distinct();

                foreach (var k in g)
                {
                    stat.Add(new Statistic
                    {
                        Type = k.Key,
                        Count = k.Count()
                    });
                }

                statistic.Count = stat.Count();
                statistic.items = stat.Skip(3 * (pageIndex - 1)).Take(3).ToList();          
            }
            if(statistic !=null) return statistic;
            return null;
        }
    }
}
