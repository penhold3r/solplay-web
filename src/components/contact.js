import Social from './social'

const Contact = () => {
   return (
      <section id="contacto" className="contact scroll">
         <h1 className="main-title">Contacto</h1>
         <form className="contact-form">
            <div className="form-field">
               <input
                  type="text"
                  name="name"
                  id="name"
                  className="field"
                  placeholder=" "
               />
               <label htmlFor="name">Nombre</label>
            </div>
            <div className="form-field">
               <input
                  type="email"
                  name="email"
                  id="email"
                  className="field"
                  placeholder=" "
               />
               <label htmlFor="email">E-mail</label>
            </div>
            <div className="form-field">
               <textarea
                  name="msg"
                  id="msg"
                  className="field msg"
                  placeholder=" "
               />
               <label htmlFor="msg">Mensaje</label>
            </div>
            <input type="submit" className="button" value="Enviar" />
         </form>
         <Social className="contact-social" />
         <div className="contact-details">
            <div className="contact-link">
               <a
                  href="https://goo.gl/maps/WrcgbGnL3V92"
                  target="_blank"
                  rel="noopener"
                  className="icon-map-pin-streamline"
               >
                  Ruta Provincial, 24, km, 16, 5535. - Mendoza Argentina.
               </a>
            </div>
            <div className="contact-link">
               <a href="mailto:agrovit@hotmail.com" className="icon-envelope-o">
                  agrovit@hotmail.com
               </a>
            </div>
            <div className="contact-link">
               <a href="tel:+5492614549231" className="icon-phone">
                  54 9 261 454 9231
               </a>
            </div>
         </div>
      </section>
   )
}

export default Contact
