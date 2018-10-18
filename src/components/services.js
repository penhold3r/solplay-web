import servicesImg from '../../static/solplay_servicios.jpg'

const Services = ({ content: { title, content, icons } }) => (
   <section id="servicios" className="services">
      <h1 className="main-title">{title}</h1>
      <div className="services-content">
         <img className="services-bg-img" src={servicesImg} alt="" />
         {/* <div className="services-content-txt">
          <p dangerouslySetInnerHTML={{ __html: content }} />
          <div className="countries">
            <p>{`${countries.intro} ${countries.list}`}</p>
          </div>
        </div> */}
      </div>
      <div className="services-icons">
         {icons.map((icon, key) => (
            <div
               key={key}
               className="services-icon"
               data-lighten={`${key * 5}`}
            >
               <img src={icon.icon} alt="" />
               <h3>{icon.text}</h3>
            </div>
         ))}
      </div>
   </section>
)

export default Services
