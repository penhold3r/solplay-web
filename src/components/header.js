import Link from 'next/link'
import slugify from 'slugify'

import Social from './social'
import logo from '../../static/solplay-header-logo.svg'

class Header extends React.Component {
   state = { headerWhite: false, activeLink: 0, menuOpen: false }

   handleScroll = () => {
      const dom = document.scrollingElement
      const headerWhite = Boolean(dom.scrollTop > 250)
      //this.setState({ headerWhite });
   }

   handleMenu = () => {
      const menuOpen = !this.state.menuOpen
      this.setState({ menuOpen })
   }

   handleClick = (e, key, section) => {
      e.preventDefault()
      this.setState({ activeLink: key })
      this.props.menuClick(section)
      this.handleMenu()
   }

   render() {
      const { menu, langs } = this.props
      const headerClass = this.state.headerWhite ? ' white' : ''
      const moblieClass = this.state.menuOpen
         ? 'mobile-menu open'
         : 'mobile-menu'
      const navClass = this.state.menuOpen ? 'main-nav nav-open' : 'main-nav'

      return (
         <header className={`main-header${headerClass}`}>
            <div className="header-container">
               <div className="extra-nav">
                  <div className="lang-links">
                     {langs.map((lang, key) => (
                        <Link key={key} as={`/${lang}`} href={`/lang=${lang}`}>
                           <a className="lang-link">{lang}</a>
                        </Link>
                     ))}
                  </div>
                  <Social className="header-social" />
               </div>
               <h1 className="logo">
                  <Link href="/" prefetch>
                     <a>
                        <img src={logo} alt="Solplay" />
                     </a>
                  </Link>
               </h1>
               <nav className={navClass}>
                  <ul className="menu">
                     {menu.map((item, key) => (
                        <li className="nav-link" key={key}>
                           <a
                              className={
                                 this.state.activeLink == key ? 'active' : ''
                              }
                              href={slugify(item, { lower: true })}
                              onClick={e =>
                                 this.handleClick(
                                    e,
                                    key,
                                    slugify(item, { lower: true })
                                 )
                              }
                           >
                              {item}
                           </a>
                        </li>
                     ))}
                  </ul>
               </nav>
               <div className={moblieClass} onClick={this.handleMenu}>
                  <div className="menu-bar" />
                  <div className="menu-bar" />
                  <div className="menu-bar" />
               </div>
            </div>
         </header>
      )
   }
}

export default Header
