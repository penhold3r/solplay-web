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
	lang: {
		slug: 'pt',
		name: 'Português'
	},
	menu: ['Home', 'Quem somos', 'Produtos', 'Contato'],
	main: {
		home: {
			name: 'Inicio',
			content:
				'<h2>O <strong>melhor</strong> de nós<br/> para <strong>todos</strong></h2><p>Somos motivados pela paixão do que gostamos de fazer, levar nossos produtos aos clientes do exterior.</p>',
			cta: 'Sobre nós'
		},
		about: {
			title: 'Sobre nós',
			content:
				'A <strong>Solplay SA</strong> é uma empresa argentina dedicada à exportação de produtos agroalimentares de qualidade. Estamos no mercado internacional há mais de 2 décadas, com vasta experiência nos produtos que processamos e exportamos para nossos clientes.',
			countries: {
				intro: 'Chegamos a diferentes países como:',
				list:
					'Estados Unidos, países da União Europeia, Taiwan, Haiti, Brasil, Chile e Bolívia.'
			}
		},
		services: {
			title: 'Serviços',
			icons: [
				{ text: 'Controle e Embalagem', icon: control },
				{ text: 'Eficiência de Tempo', icon: eficiencia },
				{ text: 'Rastreamento De Entrega', icon: seguimiento },
				{ text: 'Entrega Garantida', icon: entrega }
			]
		},
		products: {
			title: 'Produtos',
			products: [
				{
					name: 'Alho Vermelho',
					image: ajoColorado,
					specs: {
						Variedade: 'Vermelho e Roxo',
						Região: 'Valle De Uco, Zona Norte e Leste de Mendoza.',
						Colheita: 'Outubro, Novembro e Dezembro',
						Embalagem:
							'Em Caixas De 10 Quilos, 30 Libras, Sacos De Polipropileno De 20 Quilos E 10 Quilos, Podem Ser Paletizados Ou A Granel.<br/>É Vendido Em Tamanhos De 3 (30 / 35mm) 4 (36 / 45mm) 5 (46 / 55mm) 6 (56 / 65mm) 7 (66 / 75mm).'
					}
				},
				{
					name: 'Ajo Branco',
					image: ajoBlanco,
					specs: {
						Variedade: 'Branco',
						Região: 'Valle De Uco, Zona Norte e Leste de Mendoza.',
						Colheita: 'Outubro, Novembro e Dezembro',
						Embalagem:
							'Em Caixas De 10 Quilos, 30 Libras, Sacos De Polipropileno De 20 Quilos E 10 Quilos, Podem Ser Paletizados Ou A Granel.<br/>É Vendido Em Tamanhos De 3 (30 / 35mm) 4 (36 / 45mm) 5 (46 / 55mm) 6 (56 / 65mm) 7 (66 / 75mm).'
					}
				},
				{
					name: 'Ameixas',
					image: ciruelas,
					specs: {
						Variedade: 'D’agen',
						Região: 'Leste e sul de Mendoza.',
						Colheita: 'Fevereiro e Março',
						Embalagem:
							'Em caixas de 10 quilos, sacos de polipropileno branco 25 quilos com tipo de secagem natural americano, tamanhos 30/40, 40/50, 50/60, 60/70, 70/80, 80/90, 90/100, 100/110, 110/120.'
					}
				},
				{
					name: 'Nozes',
					image: nueces,
					specs: {
						Variedade: 'Chandler, Ser, Hartley, Howard e Vina',
						Região: 'Valle de Uco, Tupungato.',
						Colheita: 'Março e Abril',
						Embalagem:
							'Nozes naturais em sacos de polipropileno branco de 25 quilos, tamanhos 3/32, 32/34, 34/36 e 36+.<br/>Nozes descascadas em caixas de 10 quilos embaladas a vácuo em 2 unidades de 5 quilos, qualidade extra light, light, golden.'
					}
				},
				{
					name: 'Abóbora Butternut',
					image: zapalloButter,
					specs: {
						Variedade: 'Butternut',
						Região: 'Zona norte de la provincia de Mendoza.',
						Colheita: 'Janeiro, Fevereiro e Março',
						Embalagem:
							'Em caixas e caixas de madeira, nos tamanhos S, M, L e XL.'
					}
				},
				{
					name: 'Abóbora Muscat di Provenza',
					image: zapalloMusc,
					specs: {
						Variedade: 'Muscat di Provenza',
						Região: 'Zona norte de la provincia de Mendoza.',
						Colheita: 'Enero, Febrero y Marzo',
						Embalagem:
							'Em caixas de madeira com intervalos de 5 quilos a 15 quilos por unidade.'
					}
				}
			]
		},
		organic: {
			title: 'Orgânico',
			content: {
				title: 'Produtos',
				text:
					'Procuramos oferecer uma alimentação natural e saudável, por isso trabalhamos com produtos orgânicos, como alho e ameixas secas, entre outros.'
			},
			modal: 'Certificações'
		},
		location: {
			title: 'Localização',
			content: {
				intro:
					'Estamos Localizados Na Província De Mendoza, República Argentina.',
				text:
					'<strong>San Rafael</strong> está situada en la parte sur de <strong>Mendoza</strong>fica na parte sul de Mendoza, perto da nossa <strong>Patagônia Argentina,</strong> esta área é ideal para produzir produtos orgânicos e convencionais, devido ao seu clima e à saúde de sua água e solo.<br/><strong>Guaymallén</strong>está localizado ao norte da província, com produções de colher de alho e frutas.'
			},
			map: 'Ver no mapa'
		},
		contact: {
			title: 'Contato',
			fields: {
				name: 'Nome',
				email: 'Email',
				msg: 'Mensagem',
				send: 'Enviar'
			},
			output: {
				successMsg: 'Mensagem enviada!',
				errorMsg: 'Houve um erro, tente mais tarde.'
			}
		}
	}
}
