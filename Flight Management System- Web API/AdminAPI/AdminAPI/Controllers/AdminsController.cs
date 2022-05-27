using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AdminAPI.Models;

namespace AdminAPI.Controllers
{
    [RoutePrefix("api/Admin")]
    public class AdminsController : ApiController
    {
        private FlightContext db = new FlightContext();

        [Route("Login")]
        [HttpPost]
        public IHttpActionResult employeeLogin(Admin login)
        {
            var log = db.Admins.Select(x => new { x.Admin_Email, x.Password }).Where(x => x.Admin_Email == login.Admin_Email && x.Password == login.Password).FirstOrDefault();

            if (log == null)
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });
            }
            else

                return Ok(new { status = 200, isSuccess = true, message = "Admin Login successfully", UserDetails =log });
        }
    }
}