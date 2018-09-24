import organicImg from '../../static/solplay_leaf.jpg';

const Organic = ({ content: { title, content }, openModal }) => {
   return (
      <section className="organic">
         <h1 className="main-title">{title}</h1>
         <div className="organic-content">
            <div className="organic-content-wrapper">
               <img className="organic-image" src={organicImg} alt="" />
               <div className="organic-content-txt">
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                  <a href="certificaciones" className="button" onClick={e => openModal(e)}>Certificaciones</a>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Organic;