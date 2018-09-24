import footerLogo from '../../static/solplay-white-logo.svg';

const Footer = () => {

   return (
      <footer className="footer">
         <div className="inner-footer">
            <img src={footerLogo} alt="" className="footer-logo" />
            <p>&copy; 2018</p>
         </div>
      </footer>
   );
}

export default Footer;