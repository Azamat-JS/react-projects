import React, { useState } from 'react'

const ModalTest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup)
    }
    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup && <Modal />
            }
        </div>
    )
}

export default ModalTest