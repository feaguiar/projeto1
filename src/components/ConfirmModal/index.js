import './style.css';
import CloseIcon from '../../assets/close-icon.svg'

function ConfirmModal({ open, handleClose, handleConfirm, title, subtitle, btnConfirm, btnCancel }) {
    return (
        <>
        {open &&
        <div className='backdrop'>
            <div className='modal modal-confirm'>
                <img onClick={handleClose} className='close-icon' src={CloseIcon} alt='close' />
                <h2>{title}</h2>
                <span>{subtitle}</span>

                <div className='container-buttons'>
                    <button onClick={handleConfirm} className='btn-small btn-green'>{btnConfirm}</button>
                    <button onClick={handleClose} className='btn-small btn-red'>{btnCancel}</button>
                </div>
            </div>
        </div >
        }
        </>
    )
}

export default ConfirmModal;