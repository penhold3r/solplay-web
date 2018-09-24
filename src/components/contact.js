import Social from './social';

const Contact = () => {
   return (
      <section id="contacto" className="contact scroll">
         <h1 className="main-title">Contact</h1>
         <form className="contact-form">
            <div className="form-field">
               <input type="text" name="name" id="name" className="field" placeholder=" " />
               <label htmlFor="name">Nombre</label>
            </div>
            <div className="form-field">
               <input type="email" name="email" id="email" className="field" placeholder=" " />
               <label htmlFor="email">E-mail</label>
            </div>
            <div className="form-field">
               <textarea name="msg" id="msg" className="field msg" placeholder=" "></textarea>
               <label htmlFor="msg">Mensaje</label>
            </div>
            <input type="button" className="button" value="Enviar" />
         </form>
         <Social className="contact-social" />
      </section>
   );
}

export default Contact;