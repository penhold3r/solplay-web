import Slider from './slider';

const Hero = ({ content }) => (
   <section id="inicio" className="hero scroll">
      <Slider />
      <div className="hero-content">
         <div className="hero-text" dangerouslySetInnerHTML={{ __html: content.content }} />
         <a href="#" className="button">descubrinos</a>
      </div>
   </section>
);

export default Hero;