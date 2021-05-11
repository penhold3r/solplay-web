import { withRouter } from 'next/router'
import Head from 'next/head'

import Header from './header'
import Footer from './footer'

import '../styles/index.scss'

const Layout = ({ menu, currentLang, langs, children, menuClick }) => (
	<React.Fragment>
		<Head>
			<title>Solplay</title>
			<meta property="developer" content="penHolder Designerd" />
			<meta type="theme-color" content="#00A7E1" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta http-equiv="X-UA-Compatible" content="ie=edge" />

			<meta name="title" content="Solplay" />
			<meta
				name="description"
				content="Solplay SA es una empresa Argentina, dedicada a la exportación de productos agroalimentarios de calidad."
			/>
			<meta name="referrer" content="origin" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://solplayargentina.com/" />
			<meta property="og:title" content="Solplay" />
			<meta
				property="og:description"
				content="Solplay SA es una empresa Argentina, dedicada a la exportación de productos agroalimentarios de calidad."
			/>
			<meta property="og:image" content="../../static/opengraph.png" />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://solplayargentina.com/" />
			<meta property="twitter:title" content="Solplay" />
			<meta
				property="twitter:description"
				content="Solplay SA es una empresa Argentina, dedicada a la exportación de productos agroalimentarios de calidad."
			/>
			<meta property="twitter:image" content="../../static/opengraph.png" />

			<link rel="profile" href="https://gmpg.org/xfn/11" />
			<link
				rel="shortcut icon"
				type="image/x-icon"
				href="../../static/favicon.ico"
			/>
			<link
				rel="icon"
				type="image/png"
				href="../../static/favicon.png"
				sizes="32x32 192x192"
			/>
		</Head>
		<Header
			menu={menu}
			currentLang={currentLang}
			langs={langs}
			menuClick={menuClick}
		/>
		<main>{children}</main>
		<Footer />
	</React.Fragment>
)

export default withRouter(Layout)
