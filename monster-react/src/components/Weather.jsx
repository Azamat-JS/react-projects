import React from 'react'

const Weather = ({ temp }) => {
    if (temp < 15) {
        return <h1>It is cold</h1>
    } else if (temp >= 15 && temp < 30) {
        return <h1>It is cool</h1>
    } else {
        return <h1>It is hot</h1>
    }
}

export default Weather