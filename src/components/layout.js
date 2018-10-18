import { withRouter } from 'next/router'
import Head from 'next/head'

import Header from './header'
import Footer from './footer'

import '../styles/index.scss'

const Layout = ({ menu, children, menuClick }) => {
   return (
      <React.Fragment>
         <Head>
            <title>Solplay</title>
            <meta property="developer" content="penHolder Designerd" />
            <meta type="theme-color" content="#00A7E1" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <meta
               property="og:image"
               content="../../static/bookmark-image.png"
            />
            <meta name="referrer" content="origin" />
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
         <Header menu={menu} menuClick={menuClick} />
         <main>{children}</main>
         <Footer />
      </React.Fragment>
   )
}

export default withRouter(Layout)
