import locationImg from '../../static/solplay_ubicacion.jpg'

const LocationSection = ({
	content: {
		title,
		content: { intro, text },
		map,
	},
}) => (
	<section className="location">
		<h1 className="main-title">{title}</h1>
		<img src={locationImg} alt="" className="location-image" />
		<div className="location-content">
			<p
				className="location-intro"
				dangerouslySetInnerHTML={{ __html: intro }}
			/>
			<p className="location-txt" dangerouslySetInnerHTML={{ __html: text }} />
			<a
				href="https://goo.gl/maps/WrcgbGnL3V92"
				target="_blank"
				rel="noopener"
				className="button"
			>
				{map}
			</a>
		</div>
	</section>
)

export default LocationSection
