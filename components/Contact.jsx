export default function Contact(props){
    return (
            <article className="contact-card">
              {props.name && <h3>Name: {props.name}</h3>}
                <div className="info-group">
                    <img width="20px" src="/map-marker.webp" alt="marker" />
                <p>Phone number: {props.phone}</p>
                </div>
                <div className="info-group">
               <img src="/vite.svg" width="20px" alt="" />
                <p>Email: {props.email}</p>
                </div>
            </article>
    )
}