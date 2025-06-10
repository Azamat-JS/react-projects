import React from 'react';

const Copy = () => {
    const copyHandler = () => {
        console.log('Do not copy my content')
    }

    const pasteHandler = () => {
        console.log('Do not paste any content')
    }
    return (
        <>
            <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus inventore quod placeat nihil similique pariatur fuga? Eum voluptates labore dicta. Explicabo qui impedit similique doloremque commodi modi sed temporibus magni.</p>
            <p onPaste={pasteHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus inventore quod placeat nihil similique pariatur fuga? Eum voluptates labore dicta. Explicabo qui impedit similique doloremque commodi modi sed temporibus magni.</p>
        </>
    )
}

export default Copy