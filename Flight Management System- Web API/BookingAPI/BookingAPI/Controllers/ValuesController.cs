using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BookingAPI.Models;

namespace BookingAPI.Controllers
{
    
    public class ValuesController : ApiController
    {
        private FlightContext db = new FlightContext();
        // GET api/values
        [HttpGet]
        public HttpResponseMessage Get(int id)
        {
            try
            {
                var ticketdetails = db.Tickets.Where(x => x.User_id == id).Select(x => new { x.Ticket_id, x.flight.Origin, x.flight.Destination, x.flight.Departure_Date, x.flight.Departure_Time, x.No_Of_Seats,x.flight.Flight_Status }).ToList().FirstOrDefault();
                //var totalprice = db.Tickets.Where(x => x.Ticket_id == id).Select(x => x.No_Of_Seats * x.flight.price).FirstOrDefault();
                if (ticketdetails!=null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK,new { Status="Success",ticketdetails } );
                }
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            catch(Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
