import footerLogo from '../../static/solplay-white-logo.svg'

const Footer = () => (
	<footer className="footer">
		<div className="inner-footer">
			<img src={footerLogo} alt="" className="footer-logo" />
			<p>&copy; {new Date().getFullYear()}</p>
		</div>
	</footer>
)

export default Footer
