import './Chat.css'
import Prompt from '../../components/NewPrompt/Prompt'

const Chat = () => {

  return (
    <div className='chatPage'>
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test message from AI</div>
          <div className="message user">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo culpa voluptatem, accusamus libero ea blanditiis reprehenderit omnis asperiores dignissimos voluptatibus illo mollitia hic ad optio odit soluta, qui eum distinctio.</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <Prompt />
        </div>
      </div>
    </div>
  )
}

export default Chat