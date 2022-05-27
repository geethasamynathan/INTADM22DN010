using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace CancelTicketAPI.Models
{
    public class CancelTicket
    {
        [Key]
        public int Cancel_Id { get; set; }
        public int Ticket_id { get; set; }
        public virtual Ticket Ticket { get; set; }
        public double Return_Amount { get; set; }
    }
}