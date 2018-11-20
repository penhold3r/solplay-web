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
   lang: 'es',
   menu: ['Inicio', 'Quienes Somos', 'Productos', 'Contacto'],
   main: {
      home: {
         name: 'Inicio',
         content:
            '<h2>Lo <strong>mejor</strong> de nosotros<br/> para <strong>todo el mundo</strong></h2><p>Motivados por la pasión de lo que nos gusta hacer, llegar con nuestros productos a clientes alrededor del mundo.</p>'
      },
      about: {
         title: 'Quienes Somos',
         content:
            '<strong>Solplay SA</strong> es una empresa Argentina, dedicada a la exportación de productos agroalimentarios de calidad. Estamos en el mercado internacional hace más de 2 décadas, tenemos experiencia en los productos que procesamos y exportamos a nuestros clientes.',
         countries: {
            intro: 'Contamos con clientes en distintos Países tales como:',
            list: 'EEUU, Unión Europea, Taiwán, Haití, Brasil, Chile, Bolivia'
         }
      },
      services: {
         title: 'Servicios',
         icons: [
            { text: 'Control y embalaje', icon: control },
            { text: 'Eficiencia de Tiempos', icon: eficiencia },
            { text: 'Seguimiento de Envío', icon: seguimiento },
            { text: 'Entrega asegurada', icon: entrega }
         ]
      },
      products: {
         title: 'Productos',
         products: [
            {
               name: 'Ajo Colorado',
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
         title: 'Orgánicos',
         content: {
            title: 'Productos',
            text:
               'Buscamos ofrecer una alimentación natural y saludablepor lo que trabajamos con productos orgánicos como ajos y ciruelas deshidratadas entre otros.'
         }
      },
      location: {
         title: 'Ubicación',
         content: {
            intro:
               'Estamos situados en la provincia de Mendoza, República Argentina.',
            text:
               '<strong>San Rafael</strong> está situada en la parte sur de <strong>Mendoza</strong> cerca de nuestra <strong>Patagonia Argentina,</strong> esta zona es óptima para la producción de productos orgánicos y convencionales debidos a su clima y a la sanidad de su agua y suelos.<br/><strong>Guaymallén</strong> se encuentra al norte de la provincia con producciones de primicia de ajos y frutas.'
         }
      },
      contact: {
         title: 'Contacto',
         fields: {
            name: 'Nombre',
            email: 'Email',
            msg: 'Mensaje',
            send: 'Enviar'
         },
         output: {
            successMsg: 'Mensaje enviado!',
            errorMsg: 'Hubo un error, intente más tarde. :('
         }
      }
   }
}
