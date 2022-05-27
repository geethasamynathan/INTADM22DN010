using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace AircraftAPI.Models
{
    public class FlightContext:DbContext
    {
        public FlightContext() : base("flight") { }
        public DbSet<Aircraft> Aircraft { get; set; }
    }
}