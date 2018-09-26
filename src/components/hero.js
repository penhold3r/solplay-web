import Slider from './slider';
import img01 from '../../static/solplay_banner-001.jpg';
import img02 from '../../static/solplay_banner-002.jpg';
import img03 from '../../static/solplay_banner-003.jpg';


const Hero = ({ content }) => (
   <section id="inicio" className="hero scroll">

      <div className="slider-container">
         <Slider pagination={true} paginationStyle={{ background: '#FFF' }}>
            <img src={img01} alt="" />
            <img src={img02} alt="" />
            <img src={img03} alt="" />
         </Slider>
      </div>

      <div className="hero-content">
         <div className="hero-text" dangerouslySetInnerHTML={{ __html: content.content }} />
         <a href="#" className="button">descubrinos</a>
      </div>

   </section>
);

export default Hero;