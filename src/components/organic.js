import organicImg from '../../static/solplay_leaf.jpg'

const Organic = ({ content: { title, content, modal }, openModal }) => (
	<section className="organic">
		<h1 className="main-title">{title}</h1>
		<div className="organic-content">
			<div className="organic-content-wrapper">
				<img className="organic-image" src={organicImg} alt="" />
				<div className="organic-content-txt">
					<div>
						<h2 dangerouslySetInnerHTML={{ __html: content.title }} />
						<p dangerouslySetInnerHTML={{ __html: content.text }} />
					</div>
					<a
						href="certificaciones"
						className="button"
						onClick={openModal}
						dangerouslySetInnerHTML={{ __html: modal }}
					/>
				</div>
			</div>
		</div>
	</section>
)

export default Organic
