import slugify from 'slugify'

import Slider from './slider'
import img01 from '../../static/banner/solplay_banner-01.jpg'
import img02 from '../../static/banner/solplay_banner-02.jpg'
import img03 from '../../static/banner/solplay_banner-03.jpg'
import img04 from '../../static/banner/solplay_banner-04.jpg'
import img05 from '../../static/banner/solplay_banner-05.jpg'
import img06 from '../../static/banner/solplay_banner-06.jpg'

const Hero = ({ content, scrollClick, about }) => (
	<section
		id="inicio"
		className="hero scroll"
		onClick={() => scrollClick(slugify(about, { lower: true }))}
	>
		<div className="slider-container">
			<Slider
				pagination={true}
				paginationStyle={{
					background: '#E89D0B',
					border: '1px solid #FFF',
					height: '9px',
					width: '9px'
				}}
			>
				<img src={img01} alt="" />
				<img src={img02} alt="" />
				<img src={img03} alt="" />
				<img src={img04} alt="" />
				<img src={img05} alt="" />
				<img src={img06} alt="" />
			</Slider>
		</div>

		<div className="hero-content">
			<div
				className="hero-text"
				dangerouslySetInnerHTML={{ __html: content.content }}
			/>
			<a
				href="#"
				className="button"
				dangerouslySetInnerHTML={{ __html: content.cta }}
			/>
		</div>
	</section>
)

export default Hero
