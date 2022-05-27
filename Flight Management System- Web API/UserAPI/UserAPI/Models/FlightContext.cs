using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace UserAPI.Models
{
    public class FlightContext:DbContext
    {
        public FlightContext() : base("name=flight") { }
        public DbSet<UserAccounts> users { get; set; }
    }
}