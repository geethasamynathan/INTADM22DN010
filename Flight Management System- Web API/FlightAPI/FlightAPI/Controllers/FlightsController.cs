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
using FlightAPI.Models;

namespace FlightAPI.Controllers
{
    public class FlightsController : ApiController
    {
        private FlightContext db = new FlightContext();

        // GET: api/Flights
        [HttpGet]
        public HttpResponseMessage GetAircraft()
        {
            try
            {
                var entity = db.flights.Select(x=>new { x.Aircraft.Aircraft_Name,x.Flight_Id,x.Origin,x.Destination,x.Departure_Date,x.Departure_Time,x.Arrival_Time,x.Available_Seats,x.price,x.Flight_Status}).ToList();
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

        // GET: api/Flights/5
        [ResponseType(typeof(Flight))]
        public IHttpActionResult GetFlight(int id)
        {
            Flight flight = db.flights.Find(id);
            if (flight == null)
            {
                return NotFound();
            }

            return Ok(flight);
        }

        // PUT: api/Admins/5
        [ResponseType(typeof(void))]
        public HttpResponseMessage PutAdmin(int id, Flight flight)
        {
            try
            {
                var entity = db.flights.FirstOrDefault(s => s.Flight_Id == id);
                if (entity == null)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, $"Flight with Id {id} not found to update");
                }
                else
                {
                    entity.Origin = flight.Origin;
                    entity.Destination = flight.Destination;
                    entity.Departure_Date = flight.Departure_Date;
                    entity.Departure_Time = flight.Departure_Time;
                    entity.Arrival_Time = flight.Arrival_Time;
                    entity.Available_Seats = flight.Available_Seats;
                    entity.price = flight.price;
                    entity.Aircraft_id = flight.Aircraft_id;
                    db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK,new {Status="Success" });
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        // POST: api/Flights
        [HttpPost]
        public HttpResponseMessage AddorUpdate(Flight flight)
        {
            try
            {
                if (flight.Flight_Id == 0)
                {
                    db.flights.Add(flight);
                    db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, new { Status = "Success", message = "Flight Added successfully" });
                }
                else
                {
                    var obj = db.flights.Where(x => x.Flight_Id == flight.Flight_Id).ToList().FirstOrDefault();
                    if (obj.Flight_Id > 0)
                    {
                        obj.Departure_Date = flight.Departure_Date;
                        obj.Departure_Time = flight.Departure_Time;
                        obj.Arrival_Time = flight.Arrival_Time;
                        obj.Flight_Status = flight.Flight_Status;
                        db.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK, new { Status = "Updated", message = "Flight Updated successfully" });
                    }
                    return Request.CreateResponse(HttpStatusCode.OK);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        // DELETE: api/Flights/5

        public IHttpActionResult DeleteFlight(int id)
        {
            Flight flight = db.flights.Find(id);
            if (flight == null)
            {
                return NotFound();
            }

            db.flights.Remove(flight);
            db.SaveChanges();
            return Ok(new { Status= "Delete" });
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FlightExists(int id)
        {
            return db.flights.Count(e => e.Flight_Id == id) > 0;
        }
    }
}