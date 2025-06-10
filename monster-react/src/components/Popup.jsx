import React from 'react'

const Popup = ({ copied }) => {
    return (
        <section>
            {copied && (
                <div style={{ position: 'absolute', bottom: '3rem' }}>Copied to Clipboard</div>
            )}
        </section>
    )
}

export default Popup