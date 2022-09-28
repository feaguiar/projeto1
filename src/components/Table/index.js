import './style.css';
import Deleteicon from '../../assets/delete-icon.svg';
import Editicon from '../../assets/edit-icon.svg';
import ConfirmModal from '../ConfirmModal';
import { useState } from 'react';
import EditContactModal from '../EditContactModal';

function Table() {
    const [open, setOpen] = useState();
    const [openEdit, setOpenEdit] = useState();

    function handleClose() {
        setOpen(false)
    }

    function handleConfirm() {
        setOpen(false)
    }

    function handleDeleteContact(contact) {
        setOpen(true)
    }

    function handleContactEdit(contact) {
        setOpenEdit(true);
    }
    return (
        <div className='container-table'>
            <div className='table-header'>
                <strong>Nome</strong>
                <strong>Email</strong>
                <strong>Telefone</strong>
                <strong></strong>
            </div>

            <div className='table-body'>

                <div className='table-row'>
                    <span>Daniel</span>
                    <span>daniel@hotmail.com</span>
                    <span>18 94049-5989</span>

                    <div className='container-icons'>
                        <img onClick={() => handleContactEdit(1)} src={Editicon} alt='edit' />
                        <img onClick={() => handleDeleteContact(1)} src={Deleteicon} alt='delete' />
                    </div>
                </div>
            </div>
            <ConfirmModal
                open={open}
                handleClose={handleClose}
                handleConfirm={handleConfirm}
                title='Confirma a exclusão?'
                subtitle='Deseja excluir o contato, Daniel Lopes?'
                btnConfirm='Excluir'
                btnCancel='Cancelar'
            />
            <EditContactModal
                open={openEdit}
                handleClose={() => setOpenEdit(false)}
            />
        </div>
    )
}

export default Table;