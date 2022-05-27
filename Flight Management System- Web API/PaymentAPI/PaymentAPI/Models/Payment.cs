using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace PaymentAPI.Models
{
    public class Payment
    {
        [Key]
        public int Payment_Id { get; set; }
        public int Ticket_id { get; set; }
        public string Card_Type { get; set; }
        public int Card_No { get; set; }
        public double Total_Prize { get; set; }
        public string Payment_Status { get; set; }
        public virtual Ticket Ticket { get; set; }

    }
}