import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { useAuth } from "@clerk/clerk-react";

const Home = () => {
  const [typingStatus, setTypingStatus] = useState("AI-agent");

// const { getToken } = useAuth();

// const test = async () => {
//   const token = await getToken();
//   const response = await fetch("http://localhost:4000/api/test", {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const data = await response.text();
//   console.log(data); // should log: "Success!"
// };

  return (
    <div className="homepage">
      <img src="/orbital.png" className="orbital" />
      <div className="left">
        <h1>ZET AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Make your coding more enjoyable and fast with ZET
          <br />
          Join our community today!
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot1.webp" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "Human"
                  ? "/human2.avif"
                  : "/bot.webp"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "How can I help you?",
                2000,
                () => {
                  setTypingStatus("AI-agent");
                },
                "Tell me about AI.",
                2000,
                () => {
                  setTypingStatus("Human");
                },
                "AI is a powerful tool to carried out innovative ideas",
                2000,
                () => {
                  setTypingStatus("AI-agent");
                },
                "Wow, that`s amazing to use it!",
                2000,
                () => {
                  setTypingStatus("Human");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              style={{ fontSize: "1.2em" }}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
