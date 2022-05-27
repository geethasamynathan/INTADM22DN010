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
using BookingAPI.Models;

namespace BookingAPI.Controllers
{
    public class TicketsController : ApiController
    {
        private FlightContext db = new FlightContext();

        // GET: api/Tickets
        public HttpResponseMessage GetTickets()
        {
            var entity = db.Tickets.ToList();
            return Request.CreateResponse(HttpStatusCode.OK,entity);
        }

        public HttpResponseMessage GetTotalPrize(int id)
        {
            try
            {
                var totalprice = db.Tickets.Where(x => x.Ticket_id == id).Select(x =>x.No_Of_Seats * x.flight.price ).FirstOrDefault();
                if(totalprice>0)
                {
                    return Request.CreateResponse(HttpStatusCode.OK,totalprice );
                }
                else
                    return Request.CreateResponse(HttpStatusCode.BadRequest);   
            }
            catch(Exception)
            {
                throw;
            }
        }
        //public IHttpActionResult GetTicket(int id)
        //{
        //    Ticket ticket = db.Tickets.Find(id);
        //    if (ticket == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(ticket);
        //}




        // POST: api/Tickets
        [ResponseType(typeof(Ticket))]
        public HttpResponseMessage PostTicket(Ticket ticket)
        {
            try
            {
                var checkseats = db.Flights.Where(x => x.Available_Seats >= ticket.No_Of_Seats && ticket.No_Of_Seats>0).FirstOrDefault();
                if (checkseats!=null)
                {
                    var ticketdata=db.Tickets.Add(ticket);
                    db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, new { Status = "Success",Ticket_detail=ticketdata });
                }
                return Request.CreateResponse(HttpStatusCode.OK);
                
            }
            catch(Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, new { Status = "Invalid Number of seats",ex });
            }
        }
              

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TicketExists(int id)
        {
            return db.Tickets.Count(e => e.Ticket_id == id) > 0;
        }
    }
}