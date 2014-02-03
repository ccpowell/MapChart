using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MapChart.Controllers
{
    public class StateShapesController : ApiController
    {
        private static List<Models.Polygon> States { get; set; }
        static StateShapesController()
        {
            States = new List<Models.Polygon>();
            var poly = new Models.Polygon()
            {
                id = 1,
                name = "1",
                coordinates = new Models.Location[] 
                { 
                    new Models.Location() { latitude = 40, longitude = -105 },
                    new Models.Location() { latitude = 39, longitude = -105 },
                    new Models.Location() { latitude = 39, longitude = -104 },
                    new Models.Location() { latitude = 40, longitude = -104 },
                    new Models.Location() { latitude = 40, longitude = -105 }
                }
            };
            States.Add(poly);
            var addit = new Models.Polygon()
            {
                id = States.Count(),
                name = States.Count().ToString(),
                coordinates = poly.coordinates.Select(l => new Models.Location() { latitude = l.latitude - 1, longitude = l.longitude - 1 }).ToArray()
            };
            States.Add(addit);
            addit = new Models.Polygon()
            {
                id = States.Count(),
                name = States.Count().ToString(),
                coordinates = poly.coordinates.Select(l => new Models.Location() { latitude = l.latitude, longitude = l.longitude - 1 }).ToArray()
            };
            States.Add(addit);
            addit = new Models.Polygon()
            {
                id = States.Count(),
                name = States.Count().ToString(),
                coordinates = poly.coordinates.Select(l => new Models.Location() { latitude = l.latitude - 1, longitude = l.longitude }).ToArray()
            };
            States.Add(addit);
        }

        // GET api/stateshapes
        public IEnumerable<Models.Polygon> Get()
        {
            return States;
        }

#if needed
        // GET api/stateshapes/5
        // TODO: 404?
        public Models.Polygon Get(int id)
        {
            return States.Find(s => s.id == id);
        }

        // POST api/stateshapes
        public void Post([FromBody]Models.Polygon value)
        {
            value.id = States.Count();
            States.Add(value);
        }

        // PUT api/stateshapes/5
        public void Put(int id, [FromBody]Models.Polygon value)
        {
            var state = States.Find(s => s.id == id);
            state.name = value.name;
            state.coordinates = value.coordinates;
        }

        // DELETE api/stateshapes/5
        public void Delete(int id)
        {
            States.RemoveAll(s => s.id == id);
        }
#endif
    }
}
