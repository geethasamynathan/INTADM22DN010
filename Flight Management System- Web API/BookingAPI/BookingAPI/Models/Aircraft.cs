using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace BookingAPI.Models
{
    public class Aircraft
    {
        [Key]
        public int Aircraft_id { get; set; }
        public string Aircraft_Name { get; set; }
        public int Total_Seats { get; set; }
        
    }
}