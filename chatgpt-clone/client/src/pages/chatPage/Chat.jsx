import './Chat.css'
import Prompt from '../../components/NewPrompt/Prompt'
import { useAuth } from '@clerk/clerk-react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import Markdown from 'react-markdown';
import { IKImage } from 'imagekitio-react';

const Chat = () => {
  const path = useLocation().pathname
  const chatId = path.split('/').pop()
  const { getToken } = useAuth();

  const { isPending, error, data } = useQuery({
    queryKey: ["chatData", chatId],
    queryFn: async () => {
      const token = await getToken();
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch chats");
      return res.json();
    },
  });

  return (
    <div className='chatPage'>
      <div className="wrapper">
        <div className="chat">
          {isPending ? "Loading..." : error ? "Something went wrong!" : data?.history?.map((msg, index) => (
            <>
              {msg.img && (
                <IKImage
                  urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                  path={msg.img}
                  height="300"
                  width="400"
                  transformation={[{height: 300, width: 400}]}
                  loading='lazy'
                  lqip={{active: true, quality: 20}}
                />
              )}
              <div className={msg.role === "user" ? "message user" : "message"} key={index}>
                <Markdown>{msg.parts[0].text}</Markdown>
              </div>
            </>
          ))}
          <Prompt />
        </div>
      </div>
    </div>
  )
}

export default Chat