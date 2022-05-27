using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AdminAPI.Models
{ 
    public partial class Admin
    {
        [Key]
        public int admin_id { get; set; }
        public string fname { get; set; }
        public string lname { get; set; }
        public string gender { get; set; }
        public int age { get; set; }
        public string Admin_Email { get; set; }
        public int Phone_No { get; set; }
        public string Password { get; set; }
    }
}
