import aboutImg from "../../static/solplay_about.jpg";

const About = ({ content: { title, content, countries, icons } }) => {
  return (
    <section id="nosotros" className="about scroll">
      <h1 className="main-title">{title}</h1>
      <div className="about-content">
        <img className="about-bg-img" src={aboutImg} alt="" />
        <div className="about-content-txt">
          <p dangerouslySetInnerHTML={{ __html: content }} />
          <div className="countries">
            <p>{`${countries.intro} ${countries.list}`}</p>
          </div>
        </div>
      </div>
      <div className="about-icons">
        {icons.map((icon, key) => (
          <div key={key} className="about-icon" data-lighten={`${key * 5}`}>
            <img src={icon.icon} alt="" />
            <h3>{icon.text}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
