import './style.css';
import ImgUp from '../../assets/sign-up-background.jpg'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!nome || !email || !senha) {
        return
      }

      const response = await api.post('/usuarios', {
        nome,
        email,
        senha
      });

      if (response.status > 204) {
        return
      }

      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container-sign-up'>

      <div className='container-left'>
        <h3>Cadastre-se</h3>

        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='text' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />

        </form>

        <button type='submit' className='btn-big btn-green'>CADASTRAR</button>
        <button type='submit' className='btn-big btn-red'>CANCELAR</button>

        <span>Já tem cadastro? <Link to='/'>Clique aqui!</Link> </span>

      </div>

      <img src={ImgUp} alt="img" />
    </div>
  );
}

export default SignUp;
