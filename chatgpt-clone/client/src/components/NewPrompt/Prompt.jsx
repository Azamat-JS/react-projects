import { useEffect, useRef, useState } from 'react'
import './Prompt.css'
import Upload from '../uploads/Upload'
import { IKImage } from 'imagekitio-react';
import model from '../../lib/gemini.js';
import Markdown from 'react-markdown'

const Prompt = () => {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {},
  });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{text: ''}]
      },
      {
        role: 'model',
        parts: [{text: ''}]
      }
    ],
    generationConfig: {
      // maxOutputTokens: 100,
    }
  })

  const ref = useRef(null)

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }, [answer, question, img.dbData]);

  const add = async (text) => {
    setQuestion(text);

    const result = await chat.sendMessageStream(Object.entries(img.aiData).length ? [img.aiData, text] : [text]);
    let streamingText = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      streamingText += chunkText;
      setAnswer(streamingText)
    }
    setImg({
      isLoading: false,
      error: "",
      dbData: {},
      aiData: {},
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = e.target.text.value;

    if (!text) return;

    add(text)
  }

  return (
    <>
      {/* ADD NEW CHAT */}
      {img?.isLoading && <div>Loading...</div>}
      {img?.dbData.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img?.dbData?.filePath}
          width="380"
          transformation={[{ width: 380 }]}
        />
      )}
      {question && <div className='message user'>{question}</div>}
      {answer && <div className='message'><Markdown>{answer}</Markdown></div>}
      <div className="endChat" ref={ref}></div>
      <form className="newForm" onSubmit={handleSubmit}>
        <Upload setImg={setImg} />
        <input id='file' type="file" multiple={false} hidden />
        <input type="text" name='text' placeholder='Ask anything...' />
        <button><img src="/arrow.png" alt="arrow-img" /></button>
      </form>
    </>
  )
}

export default Prompt