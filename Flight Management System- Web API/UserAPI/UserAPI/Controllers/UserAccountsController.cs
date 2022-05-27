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
using UserAPI.Models;

namespace UserAPI.Controllers
{
    [RoutePrefix("api/User")]
    public class UserAccountsController : ApiController
    {
        private FlightContext db = new FlightContext();

        // GET: api/UserAccounts
        [Route("GetAll")]
        public IQueryable<UserAccounts> Getusers()
        {
            return db.users;
        }

        //// GET: api/UserAccounts/5
        //[ResponseType(typeof(UserAccounts))]
        //public IHttpActionResult GetUserAccounts(int id)
        //{
        //    UserAccounts userAccounts = db.users.Find(id);
        //    if (userAccounts == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(userAccounts);
        //}

        // PUT: api/Admins/5
        //[ResponseType(typeof(void))]
        //public HttpResponseMessage PutAdmin(int id, UserAccounts user)
        //{
        //    try
        //    {
        //        var entity = db.users.FirstOrDefault(s => s.User_id == id);
        //        if (entity == null)
        //        {
        //            return Request.CreateResponse(HttpStatusCode.NotFound, $"User with Id {id} not found to update");
        //        }
        //        else
        //        {
        //            entity.Fname = user.Fname;
        //            entity.Lname = user.Lname;
        //            entity.gender = user.gender;
        //            entity.age = user.age;
        //            entity.User_Email = user.User_Email;
        //            entity.Phone_No = user.Phone_No;
        //            entity.Password = user.Password;
        //            db.SaveChanges();
        //            return Request.CreateResponse(HttpStatusCode.OK, entity);
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
        //    }
        //}

        // POST: api/UserAccounts
        [Route("Login")]
        public IHttpActionResult UaerLogin(UserAccounts login)
        {
            try {
                var log = db.users.Select(x => new {x.User_id, x.User_Email, x.Password }).Where(x => x.User_Email == login.User_Email && x.Password == login.Password).FirstOrDefault();

                if (log == null)
                {
                    return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });
                }
                else

                    return Ok(new { status = 200, isSuccess = true, message = "User Login successfully", UserDetails = log });
            }
            catch(Exception)
            {
                return BadRequest();
            }
        }
        [Route("SignUp")]
        public IHttpActionResult UserSignup(UserAccounts signup)
        {
            try
            {
                
                if (signup.User_id==0)
                {
                    var log = db.users.Add(signup);
                    db.SaveChanges();
                    return Ok(new { Status = "Success", Message = "SignUp SuccessFully" });
                }
                                  
            }
            catch (Exception)
            {
                throw;
            }
            return BadRequest();
        }

        // DELETE: api/UserAccounts/5
        //[ResponseType(typeof(UserAccounts))]
        //public IHttpActionResult DeleteUserAccounts(int id)
        //{
        //    UserAccounts userAccounts = db.users.Find(id);
        //    if (userAccounts == null)
        //    {
        //        return NotFound();
        //    }

        //    db.users.Remove(userAccounts);
        //    db.SaveChanges();

        //    return Ok(userAccounts);
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserAccountsExists(int id)
        {
            return db.users.Count(e => e.User_id == id) > 0;
        }
    }
}