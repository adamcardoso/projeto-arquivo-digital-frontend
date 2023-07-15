import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const console = window.console;

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:9090/realms/Arquivo/protocol/openid-connect/token',
       new URLSearchParams({
        client_id: "arquivo-rest-api",
        grant_type: "password",
        username,
        password,
        headers: new Headers({ 'Content-Type': 'application/json' })
       }));

      if (response.status === 200) {
        // Armazene o token de acesso retornado pela API
        // em um cookie ou armazenamento local do navegador aqui
        console.log(response.data.access_token)
        localStorage.setItem("Auth",response.data.access_token);
        navigate('/home');
      } else {
        alert('Usuário ou senha inválidos');
      }
    } catch (error) {
      console.error(error);
      console.error('Error message:', error.message);
      console.log('Error stack:', error.stack);
      console.warn('Error occurred during login attempt.');
      alert('Ocorreu um erro ao fazer login');
    }
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Digite o seu usuário e senha, por favor!</p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="username">Nome de usuário:</label>
                      <input type="text" id="username" className="form-control form-control-lg" value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="password">Senha:</label>
                      <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>

                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Esqueceu a senha?</a></p>

                    <button type="submit" className="btn btn-outline-light btn-lg px-5">Login</button>
                  </form>

                </div>

                <div>
                  <p className="mb-0">Não possui uma conta? <a href="#!" className="text-white-50 fw-bold"><br></br>Entre em contato com o arquivo!</a></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
