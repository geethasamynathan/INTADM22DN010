using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace UserAPI.Models
{
    public class UserAccounts
    {
        [Key]
        public int User_id { get; set; }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public string gender { get; set; }
        public int age { get; set; }
        public string User_Email { get; set; }
        public long Phone_No { get; set; }
        public string Password { get; set; }
    }
}