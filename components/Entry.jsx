
export default function Entry(props){
    return (
 <article className="journal-entry">
    <div className="main-image-container">
    <img className="main-image" src={props.img} alt="japan photo"/>
    </div>
    <div>
        <img src={props.icon} alt="marker icon" width="25px"/>
        <span>{props.country}</span>
        <a href={props.location}>{props.locText}</a>
    <h2>{props.title}</h2>
    <p className="entry-date">{props.date}</p>
    <p className="entry-description">{props.desc}</p>
    </div>
 </article>
    )
}