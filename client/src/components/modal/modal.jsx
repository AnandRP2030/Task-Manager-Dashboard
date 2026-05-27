import { createPortal } from 'react-dom';
import './modal.css';

export const Modal = ({children, onClose}) => {

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            onClose();
        }
    };

    return createPortal(
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-container">
                {children}
            </div>
        </div>,
        document.body
    )
}
