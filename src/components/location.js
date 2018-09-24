
const LocationSection = ({ content: { title, content: { intro, text } } }) => {
   return (
      <section className="location">
         <h1 className="main-title">{title}</h1>
         <div className="location-content">
            <p className="location-intro" dangerouslySetInnerHTML={{ __html: intro }} />
            <p className="location-txt" dangerouslySetInnerHTML={{ __html: text }} />
            <a href="#" className="button">Ver en mapa</a>
         </div>
      </section>
   );
}

export default LocationSection;