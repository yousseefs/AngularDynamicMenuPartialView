using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularDynamicMenu.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult GetSiteMenu()
        {
            using (DatabaseEntities dc = new DatabaseEntities())
            {
                var menu = dc.Menus.ToList();
                return new JsonResult { Data = menu, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            }
        }
    }
}