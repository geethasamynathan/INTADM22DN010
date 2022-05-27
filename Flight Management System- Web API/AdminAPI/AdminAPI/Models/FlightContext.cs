using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace AdminAPI.Models
{
    public class FlightContext:DbContext
    {
        public FlightContext() : base("flight") { }
        public DbSet<Admin> Admins { get; set; }
    }
}