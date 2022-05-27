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
using CancelTicketAPI.Models;

namespace CancelTicketAPI.Controllers
{
    public class CancelTicketsController : ApiController
    {
        private FlightContext db = new FlightContext();

        // GET: api/CancelTickets
        public HttpResponseMessage GetCancelTickets()
        {
            var entity= db.CancelTickets.Select(x=>new {x.Cancel_Id,x.Ticket_id,x.Ticket.flight.Aircraft.Aircraft_Name,x.Ticket.flight.Origin,x.Ticket.flight.Destination,x.Ticket.userAccounts.User_Email,x.Return_Amount }).ToList();
            return Request.CreateResponse(HttpStatusCode.OK, entity);
        }

        // GET: api/CancelTickets/5
        [ResponseType(typeof(CancelTicket))]
        public IHttpActionResult GetCancelTicket(int id)
        {
            CancelTicket cancelTicket = db.CancelTickets.Find(id);
            if (cancelTicket == null)
            {
                return NotFound();
            }

            return Ok(cancelTicket);
        }

        // PUT: api/CancelTickets/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCancelTicket(int id, CancelTicket cancelTicket)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cancelTicket.Cancel_Id)
            {
                return BadRequest();
            }

            db.Entry(cancelTicket).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CancelTicketExists(id))
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

        // POST: api/CancelTickets
        [ResponseType(typeof(CancelTicket))]
        public IHttpActionResult PostCancelTicket(CancelTicket cancelTicket)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CancelTickets.Add(cancelTicket);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = cancelTicket.Cancel_Id }, cancelTicket);
        }

        // DELETE: api/CancelTickets/5
        [ResponseType(typeof(CancelTicket))]
        public IHttpActionResult DeleteCancelTicket(int id)
        {
            CancelTicket cancelTicket = db.CancelTickets.Find(id);
            if (cancelTicket == null)
            {
                return NotFound();
            }

            db.CancelTickets.Remove(cancelTicket);
            db.SaveChanges();

            return Ok(cancelTicket);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CancelTicketExists(int id)
        {
            return db.CancelTickets.Count(e => e.Cancel_Id == id) > 0;
        }
    }
}