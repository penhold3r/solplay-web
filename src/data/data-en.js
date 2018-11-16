import control from '../../static/solplay-control_y_embalaje.svg'
import eficiencia from '../../static/solplay-eficiencia.svg'
import seguimiento from '../../static/solplay-seguimiento.svg'
import entrega from '../../static/solplay-entrega.svg'

import ajoColorado from '../../static/productos/ajo-colorado.jpg'
import ajoBlanco from '../../static/productos/ajo-blanco.jpg'
import ciruelas from '../../static/productos/ciruelas-secas.jpg'
import nueces from '../../static/productos/nueces-chandler-.jpg'
import zapalloButter from '../../static/productos/zapallo-butternut.jpg'
import zapalloMusc from '../../static/productos/zapallo-muscat.jpg'

export default {
   lang: 'en',
   menu: ['Home', 'About Us', 'Products', 'Contact'],
   main: {
      home: {
         name: 'Home',
         content:
            '<h2>The <strong>best</strong> of us<br/> for <strong>everyone</strong></h2><p>We are motivated by the passion of what we like to do, get our products to customers from abroad.</p>'
      },
      about: {
         title: 'About Us',
         content:
            '<strong>Solplay SA</strong> is an Argentinian company, dedicated to the export of quality agri-food products. We are in the international market for more than 2 decades, with vast experience in the products that we process and export to our clients.',
         countries: {
            intro: 'We reached different countries such as:',
            list:
               'United States, European Union´s countries, Taiwan, Haiti, Brazil, Chile and Bolivia.'
         }
      },
      services: {
         title: 'Services',
         icons: [
            { text: 'Control and packaging', icon: control },
            { text: 'Time efficiency', icon: eficiencia },
            { text: 'Shipment follow up', icon: seguimiento },
            { text: 'Guaranteed delivery', icon: entrega }
         ]
      },
      products: {
         title: 'Products',
         products: [
            {
               name: 'Red Garlic',
               image: ajoColorado,
               specs: {
                  Variedad: 'Morado y Colorado',
                  Region:
                     'Valle de Uco, zona norte y este de la provincia de Mendoza.',
                  Cosecha: 'Ocubre, Noviembre y Diciembre',
                  Formato:
                     'En cajas de 10 kilos, 30 libras, bolsas de polipropileno de 20 kilos y de 10 kilos, puede ser palletizado o a granel.<br/>Se comercializa en los calibres, 3 (30/35mm) 4 (36/45mm) 5 (46/55mm) 6 (56/65mm) 7 (66/75mm).'
               }
            },
            {
               name: 'Ajo Blanco',
               image: ajoBlanco,
               specs: {
                  Variedad: 'Blanco',
                  Region:
                     'Valle de Uco, zona norte y este de la provincia de Mendoza.',
                  Cosecha: 'Ocubre, Noviembre y Diciembre',
                  Formato:
                     'En cajas de 10 kilos, 30 libras, bolsas de polipropileno de 20 kilos y de 10 kilos, puede ser palletizado o a granel.<br/>Se comercializa en los calibres, 3 (30/35mm) 4 (36/45mm) 5 (46/55mm) 6 (56/65mm) 7 (66/75mm).'
               }
            },
            {
               name: 'Ciruela',
               image: ciruelas,
               specs: {
                  Variedad: 'D’agen',
                  Region: 'Este y Sur de la provincia de Mendoza.',
                  Cosecha: 'Febrero y Marzo',
                  Formato:
                     'En cajas de carton de 10 kilos, bolsas de polipropileno blancas en 25 kilos tipo secado Americano natural, calibres 30/40, 40/50, 50/60, 60/70, 70/80, 80/90, 90/100, 100/110, 110/120.'
               }
            },
            {
               name: 'Nuez',
               image: nueces,
               specs: {
                  Variedad: 'Chandler, Ser, Hartley, Howard y Vina',
                  Region: 'Valle de Uco, Tupungato.',
                  Cosecha: 'Marzo y Abril',
                  Formato:
                     'Enteras tipo natural en bolsas de polipropileno blanca de 25 kilos, calibres 3/32, 32/34, 34/36 y 36+.<br/>Peladas en cajas de carton de 10 kilos envasadas al vacio en 2 unidades de 5 kilos cada una, calidad extra light, light, dorada.'
               }
            },
            {
               name: 'Zapallo Butternut',
               image: zapalloButter,
               specs: {
                  Variedad: 'Butternut',
                  Region: 'Zona norte de la provincia de Mendoza.',
                  Cosecha: 'Enero, Febrero y Marzo',
                  Formato:
                     'En cajas de carton y en bines de madera, en calibres S, M, L y XL.'
               }
            },
            {
               name: 'Zapallo Muscat di Provenza',
               image: zapalloMusc,
               specs: {
                  Variedad: 'Muscat di Provenza',
                  Region: 'Zona norte de la provincia de Mendoza.',
                  Cosecha: 'Enero, Febrero y Marzo',
                  Formato:
                     'En bines de madera con rangos de kilos que van desde los 5 kilos por unidad hasta los 15 kilos por unidad.'
               }
            }
         ]
      },
      organic: {
         title: 'Orgánic',
         content: {
            title: 'Products',
            text:
               'We seek to offer a natural and healthy alimentation so we work with organic products such as garlic and dried plums among others.'
         }
      },
      location: {
         title: 'Location',
         content: {
            intro:
               'We are located in the province of Mendoza, Argentine Republic.',
            text:
               '<strong>San Rafael</strong> is in the southern part of <strong>Mendoza</strong> near our Argentine Patagonia, this area is optimal to produce organic and conventional products due to its climate and the health of its water and soil.</br><strong>Guaymallén</strong> is located to the north of the province with productions of garlic´s scoop and fruits.'
         }
      }
   }
}
