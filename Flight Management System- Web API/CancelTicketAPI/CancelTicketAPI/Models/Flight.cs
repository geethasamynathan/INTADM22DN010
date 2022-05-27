using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace CancelTicketAPI.Models
{
    
    public class Flight
    {
        [Key]
        public int Flight_Id { get; set; }
        public string Origin { get; set; }
        public string Destination { get; set; }
        public string Departure_Date { get; set; }
        public string Departure_Time { get; set; }
        public string Arrival_Time { get; set; }
        public int Available_Seats { get; set; }
        public double price { get; set; }
        public int Aircraft_id { get; set; }
        public string Flight_Status { get; set; }
        public virtual Aircraft Aircraft { get; set; }

    }
}