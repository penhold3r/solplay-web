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
                  Variety: 'Red and Purple',
                  Region: 'Valle de Uco, North and East Zone of Mendoza.',
                  Harvest: 'October, November and December',
                  Packaging:
                     'In boxes of 10 kilos, 30 libras, polypropylene bags of 20 kilos and 10 kilos, can be palletized or in bulk.<br/>It is sold in sizes, 3 (30 / 35mm) 4 (36 / 45mm) 5 (46 / 55mm) 6 (56 / 65mm) 7 (66 / 75mm).'
               }
            },
            {
               name: 'White Garlic',
               image: ajoBlanco,
               specs: {
                  Variety: 'White',
                  Region: 'Valle de Uco, North and East Zone of Mendoza.',
                  Harvest: 'October, November y December',
                  Packaging:
                     'In boxes of 10 kilos, 30 libras, polypropylene bags of 20 kilos and 10 kilos, can be palletized or in bulk.<br/>It is sold in sizes, 3 (30 / 35mm) 4 (36 / 45mm) 5 (46 / 55mm) 6 (56 / 65mm) 7 (66 / 75mm).'
               }
            },
            {
               name: 'Plumbs',
               image: ciruelas,
               specs: {
                  Variety: 'D’agen',
                  Region: 'East and south of Mendoza.',
                  Harvest: 'February and March.',
                  Packaging:
                     'In boxes of 10 kilos, white polypropylene bags 25 kilos with natural American drying type, sizes 30/40, 40/50, 50/60, 60/70, 70/80, 80/90, 90/100, 100 / 110, 110/120.'
               }
            },
            {
               name: 'Nuts',
               image: nueces,
               specs: {
                  Variety: 'Chandler, Ser, Hartley, Howard and Vina',
                  Region: 'Valle de Uco, Tupungato.',
                  Harvest: 'March and April',
                  Packaging:
                     'Natural nuts in white polypropylene bags of 25 kilos, sizes 3/32, 32/34, 34/36 and 36+.<br/>Peeled nuts in boxes of 10 kilos vacuum packed in 2 units of 5 kilos each, extra light quality, light, golden.'
               }
            },
            {
               name: 'Zapallo Butternut',
               image: zapalloButter,
               specs: {
                  Variety: 'Butternut',
                  Region: 'North zone of Mendoza.',
                  Harvest: 'January, February and March',
                  Packaging:
                     'In boxes and wooden bins, in sizes S, M, L and XL.'
               }
            },
            {
               name: 'Zapallo Muscat di Provenza',
               image: zapalloMusc,
               specs: {
                  Variety: 'Muscat di Provenza',
                  Region: 'North zone of Mendoza.',
                  Harvest: 'January, February and March',
                  Packaging:
                     'In wooden bins with ranges of kilos from 5 kilos per unit to 15 kilos per unit.'
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
      },
      contact: {
         title: 'Contact',
         fields: {
            name: 'Name',
            email: 'Email',
            msg: 'Message',
            send: 'Submit'
         },
         output: {
            successMsg: 'Menssage Sent!',
            errorMsg: 'Something went wrong, try again later. :('
         }
      }
   }
}
