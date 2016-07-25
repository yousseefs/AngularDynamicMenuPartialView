using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularDynamicMenu.Controllers
{
    public class ConsultaConteinerController : Controller
    {
        // GET: Conteiner
        public ActionResult Index()
        { 
            return PartialView("~/Views/TFC/Kernel/Conteiner/ConsultaConteiner.cshtml");
        }

        public PartialViewResult abrirModal(string prParametro)
        {
            ViewBag.parametro = prParametro;

            return PartialView("~/Views/TFC/Kernel/Conteiner/ConsultaConteinerModal.cshtml");
        }
    }
}
