import './style.css';
import Header from '../../components/Header';
import Table from '../../components/Table';
import { useState } from 'react';
import NewContactModal from '../../components/NewContactModal';
import EditContactModal from '../../components/EditContactModal';

function Main() {
    const [open, setOpen] = useState();

    return (
        <main>
            <Header />
            <div className='container-main'>
                <button onClick={() => setOpen(true)} className='btn-small btn-green'>Adicionar</button>
            </div>
            <div>
                <Table />
            </div>
            <NewContactModal
                open={open}
                handleClose={() => setOpen(false)}
            />
        </main>
    )
}

export default Main;