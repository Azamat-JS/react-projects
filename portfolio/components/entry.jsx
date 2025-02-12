export default function Entry(props){
    return (
  <article className="portfolio-entry">
  <div className="main-container">
    <img className= "main-image" src={props.img} alt="project-img" />
  </div>
  <div className="entry-body">
    <h2 className="entry-title">{props.title}</h2>
    <p className="entry-date">{props.date}</p>
    <p className="entry-desc">{props.desc}</p>
    <p className="entry-link">{props.link}</p>
  </div>
  </article>
    )
}