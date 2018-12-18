import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import imagesLoaded from 'imagesloaded'

import Layout from '../src/components/layout'
import Hero from '../src/components/hero'
import About from '../src/components/about'
import Services from '../src/components/services'
import Products from '../src/components/products'
import ProductModal from '../src/components/product-modal'
import Organic from '../src/components/organic'
import Certificate from '../src/components/certificate'
import LocationSection from '../src/components/location'
import Contact from '../src/components/contact'

import es from '../src/data/data-es'
import en from '../src/data/data-en'
import ru from '../src/data/data-ru'
import pt from '../src/data/data-pt'

const data = { en, es, pt, ru }

class Index extends React.Component {
	state = {
		productModal: false,
		product: null,
		certificateModal: false,
		sections: [],
		sectionToScroll: ''
	}

	static getInitialProps = async ({ query }) => {
		const { lang = 'en' } = query
		const content = data[lang]

		return { lang, content }
	}

	componentDidMount() {
		const sections = Array.from(document.querySelectorAll('section.scroll'))

		this.waitForImages()
		this.setState({ sections })

		//console.log('INIT PROPS: ', this.props)
	}

	componentDidUpdate() {
		const { sections, sectionToScroll } = this.state

		sections.map(
			section =>
				section.id == sectionToScroll &&
				section.scrollIntoView({ block: 'start', behavior: 'smooth' })
		)
	}

	handleScroll = section => this.setState({ sectionToScroll: section })

	handleModal = (e, product = null) => {
		const modalTarget = e.currentTarget.classList.contains('product')
			? 'productModal'
			: 'certificateModal'
		const openModal = !this.state[modalTarget]

		e.preventDefault()
		this.setState({ [modalTarget]: openModal, product })
	}

	waitForImages = () => {
		const imgs = document.querySelectorAll('img')
		for (let img of imgs) {
			imagesLoaded(img, obj => (obj.images[0].img.style.opacity = 1))
		}
	}

	render() {
		const { lang, content } = this.props
		const {
			menu,
			main: { home, about, services, products, organic, location, contact }
		} = content

		const langs = Object.values(data).map(l => l.lang)

		return (
			<Layout
				menu={menu}
				currentLang={lang}
				langs={langs}
				sections={this.state.sections}
				menuClick={this.handleScroll}
			>
				<ProductModal
					open={this.state.productModal}
					content={this.state.product}
					closeModal={this.handleModal}
				/>
				<Hero
					content={home}
					scrollClick={this.handleScroll}
					about={about.title}
				/>
				<About content={about} />
				<Services content={services} />
				<Products content={products} openModal={this.handleModal} />
				<Organic content={organic} openModal={this.handleModal} />
				<LocationSection content={location} />
				<Contact content={contact} />
				<Certificate
					title={organic.modal}
					open={this.state.certificateModal}
					closeModal={this.handleModal}
				/>
			</Layout>
		)
	}
}

export default withRouter(Index)
