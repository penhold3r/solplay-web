const ProductModal = ({ open, content, closeModal }) => {
   return (
      <div className={open ? 'product-modal open' : 'product-modal'}>
         {content && (
            <div className="modal-container">
               <div className="close-modal product" onClick={closeModal}>
                  &#735;
               </div>
               <h2 className="modal-title">{content.name}</h2>
               <div className="modal-content">
                  <div className="product-details">
                     {content.specs &&
                        Object.entries(content.specs).map((spec, key) => (
                           <div key={key} className="spec">
                              <h4 className="spec-title">{spec[0]}</h4>
                              <div
                                 className="spec-content"
                                 dangerouslySetInnerHTML={{ __html: spec[1] }}
                              />
                           </div>
                        ))}
                  </div>
                  <img
                     src={content.image}
                     alt={`[imagen: ${content.name}]`}
                     className="product-image"
                     style={{ opacity: 1 }}
                  />
               </div>
            </div>
         )}
      </div>
   )
}

export default ProductModal
