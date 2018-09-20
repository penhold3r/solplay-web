import Link from 'next/link';
import slugify from 'slugify';

const Footer = ({ lang, links }) => {

   const menu = links && links[lang].sort((a, b) => a.order - b.order);

   return (
      <footer className="footer">
         <div className="inner-footer">
            <p>Solplay &copy; 2018</p>
         </div>
      </footer>
   );
}

export default Footer;