import React, { useState } from 'react'
import Modal from './modal';
import './modal.css'

const ModalTest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup)
    }

    function onClose(){
        setShowModalPopup(false)
    }
    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup && <Modal 
                id={'custom-id'}
                header={<h1>Customized Header</h1>}
                footer={<h1>Customized Footer</h1>}
                onClose={onClose}
                body={<div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto praesentium, perferendis eos quia nobis facere atque eaque incidunt architecto illo? Distinctio perferendis saepe veniam sapiente sunt asperiores porro, repellat obcaecati?</div>}/>
            }
        </div>
    )
}

export default ModalTest