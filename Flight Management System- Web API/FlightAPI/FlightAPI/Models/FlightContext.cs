using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
namespace FlightAPI.Models
{
    public class FlightContext:DbContext
    {
        public FlightContext() : base("flight") { }
        public DbSet<Flight> flights { get; set; }

        //public System.Data.Entity.DbSet<FlightAPI.Models.Flight> Flights { get; set; }

        //public System.Data.Entity.DbSet<FlightAPI.Models.Aircraft> Aircraft { get; set; }
        public DbSet<Aircraft> Aircraft { get; set; }
    }
}