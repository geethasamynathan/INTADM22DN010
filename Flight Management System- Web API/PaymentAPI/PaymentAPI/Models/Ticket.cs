using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace PaymentAPI.Models
{
    public class Ticket
    {
        [Key]
        public int Ticket_id { get; set; }
        public int Flight_Id { get; set; }
        public virtual Flight flight { get; set; }
        public int User_id { get; set; }
        public virtual UserAccounts userAccounts { get; set; }
        public int No_Of_Seats { get; set; }
    }
}