import background from '../../static/solplay_certification.jpg';
import oia from '../../static/oia-logo.svg';
import pdf from '../../static/download-pdf-icon.svg';

const Certificate = ({ open, closeModal }) => {
   const visible = open ? ' visible' : '';
   return (
      <section className={`certificate${visible}`}>
         <div className="modal">
            <div className="close-modal" onClick={e => closeModal(e)}>&#735;</div>
            <img src={background} alt="" className="certificate-background" />
            <div className="certificate-content">
               <h1 className="main-title">Certificacion</h1>
               <img src={oia} alt="Organización Internacional Agropecuaria" className="oia-logo" />
               <a href="../../static/solpay_OIA_certificacion.pdf" className="download"><img src={pdf} alt="Descargar PDF" /></a>
            </div>
         </div>
      </section>
   );
}

export default Certificate;