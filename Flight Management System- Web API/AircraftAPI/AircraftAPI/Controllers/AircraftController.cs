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
using AircraftAPI.Models;

namespace AircraftAPI.Controllers
{

    public class AircraftController : ApiController
    {
        private FlightContext db = new FlightContext();

        // GET: api/Aircraft
        public HttpResponseMessage GetAircraft()
        {
            try
            {
                var entity = db.Aircraft.ToList();
                if(entity==null)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, "No Records");
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.OK, entity);
                }
            }
            catch(Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }

        }

        // GET: api/Aircraft/5

        public HttpResponseMessage GetAircraft(int id)
        {
            try
            {
                var entity = db.Aircraft.Where(x=>x.Aircraft_id==id).FirstOrDefault();
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

        // PUT: api/Admins/5
       
        public HttpResponseMessage PutAdmin(int id, Aircraft aircraft)
        {
            try
            {
                var entity = db.Aircraft.FirstOrDefault(s => s.Aircraft_id == id);
                if (entity == null)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, $"Aircraft with Id {id} not found to update");
                }
                else
                {
                    entity.Aircraft_Name = aircraft.Aircraft_Name;
                    entity.Total_Seats = aircraft.Total_Seats;                    
                    db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, entity);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        // POST: api/Aircraft
        public HttpResponseMessage AddorUpdate(Aircraft Aircrafts)
        {
            try
            {
                if (Aircrafts.Aircraft_id == 0)
                {
                    var airdata=db.Aircraft.Add(Aircrafts);
                    db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, new { Status = "Success", message = "Aircraft Added successfully",Aircraftdata= airdata });
                }
                else
                {
                    var obj = db.Aircraft.Where(x => x.Aircraft_id == Aircrafts.Aircraft_id).ToList().FirstOrDefault();
                    if (obj.Aircraft_id > 0)
                    {

                        obj.Aircraft_Name = Aircrafts.Aircraft_Name;
                        obj.Total_Seats = Aircrafts.Total_Seats;
                        db.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK, new { Status = "Updated", message = "Aircraft Updated successfully" });
                    }
                    return Request.CreateResponse(HttpStatusCode.OK);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }


        // DELETE: api/Aircraft/5
        [ResponseType(typeof(Aircraft))]
        public HttpResponseMessage DeleteAircraft(int id)
        {
            try
            {
                var aircraft = db.Aircraft.Find(id);
                if (aircraft == null)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }
                else
                {
                    db.Aircraft.Remove(aircraft);
                    db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, new{ Status = "Delete", message = "Aircraft Deleted successfully" });
                }
            }
            catch(Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest,ex);
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

        private bool AircraftExists(int id)
        {
            return db.Aircraft.Count(e => e.Aircraft_id == id) > 0;
        }
    }
}