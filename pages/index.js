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

import data from '../src/data/data'

class Index extends React.Component {
   state = {
      productModal: false,
      product: null,
      certificateModal: false,
      sections: [],
      sectionToScroll: ''
   }

   componentDidMount() {
      const sections = Array.from(document.querySelectorAll('section.scroll'))

      this.setState({ sections })
      this.waitForImages()
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
      const {
         menu,
         main: { home, about, services, products, organic, location }
      } = data

      return (
         <Layout
            menu={menu}
            sections={this.state.sections}
            menuClick={this.handleScroll}
         >
            <ProductModal
               open={this.state.productModal}
               content={this.state.product}
               closeModal={this.handleModal}
            />
            <Hero content={home} />
            <About content={about} />
            <Services content={services} />
            <Products content={products} openModal={this.handleModal} />
            <Organic content={organic} openModal={this.handleModal} />
            <LocationSection content={location} />
            <Contact />
            <Certificate
               open={this.state.certificateModal}
               closeModal={this.handleModal}
            />
         </Layout>
      )
   }
}

export default Index
