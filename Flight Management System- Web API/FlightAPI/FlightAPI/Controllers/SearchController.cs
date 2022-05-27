using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FlightAPI.Models;

namespace FlightAPI.Controllers
{
    [RoutePrefix("api/Flight")]
    public class SearchController : ApiController
    {
        private FlightContext db = new FlightContext();
        [Route("Search")]
        public IHttpActionResult SearchFlight(Flight search)
        {
            try
            {
                var log = db.flights.Select(x => new { x.Aircraft.Aircraft_Name, x.Flight_Id, x.Origin, x.Destination, x.Departure_Date, x.Departure_Time, x.Arrival_Time, x.Available_Seats, x.price, x.Flight_Status }).Where(x => x.Origin == search.Origin && x.Destination == search.Destination && x.Departure_Date==search.Departure_Date).ToList().FirstOrDefault();

                if (log == null)
                {
                    return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });
                }
                else

                    return Ok(new { status = 200, isSuccess = true, message = "Search flight successfully", SearchDetails = log });
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        [Route("updateavailableSeats")]
        [HttpPost]
        public HttpResponseMessage AddorUpdate(Flight flight)
        {
            try
            {


                if (flight.Flight_Id > 0)
                {
                    var obj = db.flights.Where(x => x.Flight_Id == flight.Flight_Id).ToList().FirstOrDefault();
                    if (obj.Flight_Id > 0)
                    {
                        obj.Available_Seats = flight.Available_Seats;
                        db.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK, new { Status = "Updated", message = "Flight Updated successfully" });
                    }
                }
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
