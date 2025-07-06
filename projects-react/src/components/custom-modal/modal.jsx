import React, { useState, useEffect } from 'react';
import './modal.css';

const Modal = ({ id, header, body, footer, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
    };

    useEffect(() => {
        if (isClosing) {
            const timer = setTimeout(() => {
                onClose(); // Remove modal after animation
            }, 500); // match animation-duration
            return () => clearTimeout(timer);
        }
    }, [isClosing, onClose]);

    return (
        <div id={id || 'Modal'} className="modal">
            <div className={`modal-content ${isClosing ? 'modal-close' : 'modal-open'}`}>
                <div className="header">
                    <span onClick={handleClose} className="close-modal-icon">&times;</span>
                    <h2>{header || 'Header'}</h2>
                </div>
                <div className="body">
                    {body || (
                        <div>
                            <p>This is our Modal body</p>
                        </div>
                    )}
                </div>
                <div className="footer">{footer || <h2>Footer</h2>}</div>
            </div>
        </div>
    );
};

export default Modal;
