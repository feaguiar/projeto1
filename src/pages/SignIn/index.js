import './style.css';
import ImgLeft from '../../assets/sign-in-background.jpg';
import { useState, useNavigate, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import useGlobalContextProvider from '../../hooks/useGlobalContextProvider';


function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { token, setToken, setUser } = useGlobalContextProvider();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post('/login', {
        email,
        senha
      })

      if (response.status > 204) {
        return
      }

      const { usuario, token } = response.data;
      setToken(token);
      setUser(usuario);

      navigate('/main');

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    if (token) {
      navigate('/main')
    }
  }, [])

  return (
    <div className='container-sign-in'>
      <img src={ImgLeft} alt='img' />

      <div className='container-right'>
        <span>Bem Vindo</span>
        <h1>Faça o login com sua conta</h1>

        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='text' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
        </form>

        <button type='submit' className='btn-big btn-green'>LOGIN</button>

        <span>Não tem cadastro? <Link to='/sign-up'>Clique aqui!</Link> </span>

      </div>
    </div>
  );
}

export default SignIn;
