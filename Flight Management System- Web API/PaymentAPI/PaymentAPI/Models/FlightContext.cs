﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace PaymentAPI.Models
{
    public class FlightContext:DbContext
    {
        public FlightContext() : base("flight") { }
        public DbSet<Aircraft> Aircrafts { get; set; }
        public DbSet<Flight> Flights { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<UserAccounts> UserAccounts { get; set; }
    }
}