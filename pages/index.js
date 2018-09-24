import Layout from '../src/components/layout';
import Hero from '../src/components/hero';
import About from '../src/components/about';
import Products from '../src/components/products';
import Organic from '../src/components/organic';
import Certificate from '../src/components/certificate';
import LocationSection from '../src/components/location';
import Contact from '../src/components/contact';

import data from '../src/data/data';

class Index extends React.Component {

   state = {
      modal: false,
      sections: [],
      sectionToScroll: ''
   }

   componentDidMount() {
      const sections = Array.from(document.querySelectorAll('section.scroll'));
      this.setState({ sections });
   }

   componentDidUpdate() {
      const { sections, sectionToScroll } = this.state;
      sections.map(section => section.id == sectionToScroll
         && section.scrollIntoView({ block: 'start', behavior: 'smooth' })
      );
   }

   handleScroll = section => this.setState({ sectionToScroll: section });

   handleModal = e => {
      const openModal = !this.state.modal;
      e.preventDefault();
      this.setState({ modal: openModal });
   }

   render() {

      const { menu, main: { home, about, products, organic, location } } = data;

      return (
         <Layout menu={menu} sections={this.state.sections} menuClick={this.handleScroll}>
            <Hero content={home} />
            <About content={about} />
            <Products content={products} />
            <Organic content={organic} openModal={this.handleModal} />
            <LocationSection content={location} />
            <Contact />
            <Certificate open={this.state.modal} closeModal={this.handleModal} />
         </Layout>
      )
   }
}

export default Index;
