import control from "../../static/solplay-control_y_embalaje.svg";
import eficiencia from "../../static/solplay-eficiencia.svg";
import seguimiento from "../../static/solplay-seguimiento.svg";
import entrega from "../../static/solplay-entrega.svg";

import ajos from "../../static/productos/ajos.jpg";
import ciruelas from "../../static/productos/ciruelas-secas.jpg";
import nueces from "../../static/productos/nueces-chandler-.jpg";
import zapalloButter from "../../static/productos/zapallo-butternut.jpg";
import zapalloMusc from "../../static/productos/zapallo-muscat.jpg";

export default {
  menu: ["Inicio", "Nosotros", "Productos", "Contacto"],
  main: {
    home: {
      name: "Inicio",
      content:
        "<h2>Lo <strong>mejor</strong> de nosotros<br/> para <strong>todo el mundo</strong></h2><p>Motivados por la pasión de lo que nos gusta hacer, que es llegar con nuestros productos a nuestros clientes en el exterior.</p>"
    },
    about: {
      title: "Quienes Somos",
      content:
        "<strong>Solplay SA</strong> es una empresa Argentina, dedicada a la exportación de productos agroalimentarios de calidad. Estamos en el mercado internacional hace más de 2 décadas, tenemos experiencia en los productos que procesamos y exportamos a nuestros clientes.",
      countries: {
        intro: "Contamos con clientes en distintos Países tales como:",
        list: "EEUU, Unión Europea, Taiwán, Haití, Brasil, Chile, Bolivia"
      },
      icons: [
        { text: "Control y embalaje", icon: control },
        { text: "Eficiencia de Tiempos", icon: eficiencia },
        { text: "Seguimiento de Envío", icon: seguimiento },
        { text: "Entrega asegurada", icon: entrega }
      ]
    },
    products: {
      title: "Productos",
      products: [
        { name: "Ajos", image: ajos },
        { name: "Ciruelas", image: ciruelas },
        { name: "Nueces", image: nueces },
        { name: "Zapallo", image: zapalloButter },
        { name: "Zapallo", image: zapalloMusc }
      ]
    },
    organic: {
      title: "Orgánicos",
      content:
        "<h2>Productos Orgánicos</h2><p>Trabajamos desde hace 1 año con productos orgánicos como ajo y ciruelas deshidratadas, pero pensamos seguir aumentando volúmenes y productos de esta naturaleza, apostando cada vez más al consumo de alimentos saludables.</p>"
    },
    location: {
      title: "Ubicación",
      content: {
        intro:
          "Estamos situados en la provincia de mendoza, república argentina, poseemos planta de empaque en la localidad de guaymallén y san rafael que son departamentos de dicha provincia.",
        text:
          "<strong>San Rafael</strong> está situada en la parte sur de <strong>Mendoza</strong> cerca de nuestra <strong>Patagonia Argentina,</strong> esta zona es óptima para la producción de productos orgánicos y convencionales debidos a su clima y a la sanidad de su agua y suelos.<br/><strong>Guaymallén</strong> se encuentra al norte de la provincia con producciones de primicia de ajos y frutas."
      }
    }
  }
};
