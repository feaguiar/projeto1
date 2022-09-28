import './style.css';
import CloseIcon from '../../assets/close-icon.svg'
import { useState } from 'react'

function EditContactModal({ open, handleClose }) {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [fone, setFone] = useState('');


    return (
        <>
            {open &&
                <div className='backdrop'>
                    <div className='modal modal-confirm'>
                        <img onClick={handleClose} className='close-icon' src={CloseIcon} alt='close' />
                        <h2>Editar Contato</h2>

                        <form>
                            <input type='text' placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />
                            <input type='text' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type='text' placeholder='Telefone' value={fone} onChange={(e) => setFone(e.target.value)} />

                        </form>

                        <div className='container-buttons'>
                            <button className='btn-small btn-green btn-confirm'>SALVAR</button>
                            <button onClick={handleClose} className='btn-small btn-red'>CANCELAR</button>
                        </div>
                    </div>
                </div >
            }
        </>
    )
}

export default EditContactModal;