import { useEffect, useState } from "react"
import './random.css'

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#'
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }

    function handleCreateRandomRGBColor() {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(() => {
        if(typeOfColor === 'rgb') handleCreateRandomRGBColor();
        else handleCreateRandomHexColor();
    }, [typeOfColor])

    return (
        <div style={{
            width: '1200px',
            height: '100vh',
            background: color
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Generate HEX color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Generate RGB color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRGBColor}>Generate Random color</button>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: "white",
                fontSize: '60px',
                marginTop: '50px',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <h6>{typeOfColor === 'rgb' ? 'RGB color' : 'HEX color'}</h6>
                <h4>{color}</h4>
            </div>
        </div>
    )
}

export default RandomColor