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
using PaymentAPI.Models;

namespace PaymentAPI.Controllers
{
    public class PaymentsController : ApiController
    {
        private FlightContext db = new FlightContext();

        // GET: api/Payments
        public HttpResponseMessage GetPayments()
        {
            try
            {
                var entity = db.Payments.Select(x => new {x.Payment_Id, x.Ticket_id, x.Ticket.Flight_Id, x.Ticket.flight.Aircraft.Aircraft_Name, x.Ticket.flight.Origin, x.Ticket.flight.Destination, x.Ticket.userAccounts.User_Email, x.Card_Type, x.Card_No,x.Ticket.No_Of_Seats, x.Total_Prize, x.Payment_Status }).ToList();
                if (entity == null)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, "No Records");
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.OK, entity);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }

        }

        // GET: api/Payments/5
        [ResponseType(typeof(Payment))]
        public IHttpActionResult GetPayment(int id)
        {
            Payment payment = db.Payments.Find(id);
            if (payment == null)
            {
                return NotFound();
            }

            return Ok(payment);
        }

        // PUT: api/Payments/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPayment(int id, Payment payment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != payment.Payment_Id)
            {
                return BadRequest();
            }

            db.Entry(payment).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Payments
        [ResponseType(typeof(Payment))]
        public HttpResponseMessage PostPayment(Payment payment)
        {
            try 
            {
                if (!ModelState.IsValid)
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest);
                }

                db.Payments.Add(payment);
                db.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK, new { Status = "Success" });
            }
            catch(Exception)
            {
                throw;
            }
            
        }

        // DELETE: api/Payments/5
        [ResponseType(typeof(Payment))]
        public IHttpActionResult DeletePayment(int id)
        {
            Payment payment = db.Payments.Find(id);
            if (payment == null)
            {
                return NotFound();
            }

            db.Payments.Remove(payment);
            db.SaveChanges();

            return Ok(payment);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PaymentExists(int id)
        {
            return db.Payments.Count(e => e.Payment_Id == id) > 0;
        }
    }
}