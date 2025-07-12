import { useEffect, useRef, useState } from 'react'
import './Prompt.css'
import Upload from '../uploads/Upload'
import { IKImage } from 'imagekitio-react'

const Prompt = () => {
    const [img, setImg] = useState({
      isLoading: false,
      error: "",
      dbData:{}
    })
      const ref = useRef(null)
    
      useEffect(() => {
        ref.current.scrollIntoView({ behavior: "smooth" })
      }, [])

  return (
    <>
    {/* ADD NEW CHAT */}
    {img?.isLoading && <div>Loading...</div>}
    {img?.dbData.filePath && (
      <IKImage 
        urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
        path={img?.dbData?.filePath}
        width="380"
        transformation={[{width: 380}]}
        />
    )}
    <div className="endChat" ref={ref}></div>
        <form className="newForm">
          <Upload setImg={setImg} />
            <input id='file' type="file" multiple={false} hidden />
            <input type="text" placeholder='Ask anything...' />
            <button><img src="/arrow.png" alt="arrow-img" /></button>
        </form>
    </>
  )
}

export default Prompt