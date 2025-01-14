export default function Entry(props){
    return (
 <article className="journal-entry">
    <div className="main-image-container">
    <img className="main-image" src= "/japan.jpg" alt="japan photo"/>
    </div>
    <div>
        <img src="/map-marker.webp" alt="marker icon" width="25px"/>
        <span>Japan</span>
        <a href="https://www.google.com/maps/place/Kyoto,+Japan/@35.3127248,135.2692883,363853m/data=!3m1!1e3!4m15!1m8!3m7!1s0x6001a8d6cd3cc3f1:0xc0961d366bbb1d3d!2sKyoto,+Japan!3b1!8m2!3d35.011564!4d135.7681489!16zL20vMDlkNF8!3m5!1s0x6001a8d6cd3cc3f1:0xc0961d366bbb1d3d!8m2!3d35.011564!4d135.7681489!16zL20vMDlkNF8?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D">View on Google Maps</a>
    <h2>Japanese Traditional Building</h2>
    <p className="entry-date">14 Jan 2025, winter 2025</p>
    <p className="entry-description">Japan is located in Asia. One of the developed countries in the world. It is well known for its great companies like Hundai, Honda, and Honor. It has a lot of amazing technologies.</p>
    </div>
 </article>
    )
}