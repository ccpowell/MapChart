using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MapChart.Models
{
    /// <summary>
    /// A simple polygon shape.
    /// </summary>
    public class Polygon
    {
        public int id { get; set; }
        public string name { get; set; }
        public Location[] coordinates { get; set; }
    }
}