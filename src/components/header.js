import Link from 'next/link';
import slugify from 'slugify';

import logo from '../../static/solplay-header-logo.svg';

class Header extends React.Component {

   state = { headerWhite: false }

   constructor(props) {
      super(props);
      this.handleScroll = this.handleScroll.bind(this);
   }

   componentDidMount() {
      this.handleScroll();
      window.addEventListener('scroll', this.handleScroll);
   }

   handleScroll() {
      const dom = document.scrollingElement;
      const headerWhite = Boolean(dom.scrollTop > 250);
      this.setState({ headerWhite });
   }

   render() {


      const headerClass = this.state.headerWhite ? ' white' : '';

      return (
         <header className={`main-header${headerClass}`}>
            <div className="header-container">
               <h1 className="logo">
                  <Link href="/" prefetch>
                     <a><img src={logo} alt="Solplay" /></a>
                  </Link>
               </h1>
            </div>
         </header>
      );
   }
}

export default Header;