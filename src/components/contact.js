import slugify from 'slugify'

import Social from './social'
import submitForm from '../data/submit-form'

class Contact extends React.Component {
   state = { spinner: false }
   handleChange = e => this.setState({ [e.target.name]: e.target.value })
   handleSubmit = (e, output) => {
      e.preventDefault()
      const submitSettings = {
         dest:
            'https://cors-anywhere.herokuapp.com/https://solplayargentina.com/contacto.php',
         fields: '.field',
         successMsg: output.successMsg,
         errorMsg: output.errorMsg,
         urlencoded: true
      }
      submitForm(e.target, submitSettings)
      this.setState({ spinner: true })
   }

   render() {
      const {
         content: { title, fields, output }
      } = this.props

      return (
         <section
            id={slugify(title, { lower: true })}
            className="contact scroll"
         >
            <h1 className="main-title">{title}</h1>
            <form
               className="contact-form"
               onSubmit={e => this.handleSubmit(e, output)}
            >
               <div className="form-field">
                  <input
                     type="text"
                     name="name"
                     id="name"
                     className="field"
                     placeholder=" "
                     onChange={this.handleChange}
                  />
                  <label htmlFor="name">{fields.name}</label>
               </div>
               <div className="form-field">
                  <input
                     type="email"
                     name="email"
                     id="email"
                     className="field"
                     placeholder=" "
                     onChange={this.handleChange}
                  />
                  <label htmlFor="email">{fields.email}</label>
               </div>
               <div className="form-field">
                  <textarea
                     name="msg"
                     id="msg"
                     className="field msg"
                     placeholder=" "
                     onChange={this.handleChange}
                  />
                  <label htmlFor="msg">{fields.msg}</label>
               </div>
               <input type="submit" className="button" value={fields.send} />
               <div
                  className={this.state.spinner ? 'sending visible' : 'sending'}
               >
                  <div className="spinner" />
               </div>
            </form>
            <Social className="contact-social" />
            <div className="contact-details">
               <div className="contact-details-inner">
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
                     <a
                        href="mailto:info@solplayargentina.com"
                        className="icon-envelope-o"
                     >
                        info@solplayargentina.com
                     </a>
                  </div>
                  <div className="contact-link">
                     <a href="tel:+5492614549231" className="icon-phone">
                        54 9 261 454 9231
                     </a>
                  </div>
               </div>
            </div>
         </section>
      )
   }
}

export default Contact
