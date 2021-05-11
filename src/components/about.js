import slugify from 'slugify'
import aboutImg from '../../static/solplay_about.jpg'

const About = ({ content: { title, content, countries } }) => (
	<section id={slugify(title, { lower: true })} className="about scroll">
		<h1 className="main-title">{title}</h1>
		<div className="about-content">
			<img className="about-bg-img" src={aboutImg} alt="" />
			<div className="about-content-txt">
				<p dangerouslySetInnerHTML={{ __html: content }} />
				<div className="countries">
					<p>{`${countries.intro} ${countries.list}`}</p>
				</div>
			</div>
		</div>
	</section>
)

export default About
