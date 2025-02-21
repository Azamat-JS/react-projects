import Js_icon from '../images/JS-icon.png';
import { Star, StarOff } from 'lucide-react';
import React from 'react';

export default function Contact() {
  const [contact, setContact] = React.useState({
    firstName: 'Azamat',
    lastName: 'Abdullayev',
    phone: '+998 (91) 092 83 53',
    email: 'azamat.abdullaev.d@gmail.com',
    isFavorite: false,
  });

  function toggleStar() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <article className="card">
        <h1>Contact me</h1>
        <img src={Js_icon} alt="JS-photo" width={70}/>
        <div className="info">
          <div onClick={toggleStar} className="cursor-pointer">
            {contact.isFavorite ? (
              <Star fill="gold" stroke="gold" size={42} />
            ) : (
              <StarOff size={32} />
            )}
          </div>
          <h2 className='full-name'>
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
