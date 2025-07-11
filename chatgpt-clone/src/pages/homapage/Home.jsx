import './Home.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  return (
    <div className='homepage'>
      <img src="/orbital.png" className='orbital' />
      <div className="left">
        <h1>ZET AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>Make your coding more enjoyable and fast with ZET<br />
          Join our community today!
        </h3>
        <Link to="/dashboard">Get Started</Link >
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className='bot' />
          <div className="chat">
            <img src="/bot.png" alt="" />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'I can write code for you',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'It is great to help you',
                1000,
                'Do you have any innovative ideas?',
                1000,
                'Just let me know',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home