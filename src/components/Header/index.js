import './style.css';
import SignOut from '../../assets/sign-out.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    function handleLogout() {
        navigate('/')
    }
    return (
        <header>
            <div></div>
            <h2>Agenda de Contatos</h2>
            <img onClick={handleLogout} src={SignOut} alt='logout' />
        </header>
    )
}

export default Header;