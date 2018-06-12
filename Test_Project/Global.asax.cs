using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Test_Project.Context;

namespace Test_Project
{
    public class WebApiApplication : System.Web.HttpApplication
    {

        protected void Application_Start()
        {

            using (var db = new ItemContext())
            {
                db.Database.Migrate();
            }

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        private void InitializeComponent()
        {
            throw new NotImplementedException();
        }
    }
}
