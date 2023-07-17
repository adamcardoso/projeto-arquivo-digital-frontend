import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import NavBar from '../NavBar/NavBar';

function UserRegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER'); // Valor padrão para role
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/users', {
        username,
        password,
        userDTO: {
          email,
          role,
        },
      });

      if (response.status === 201) {
        // Usuário cadastrado com sucesso
        navigate('/home');
      } else {
        alert('Erro ao cadastrar usuário');
      }
    } catch (error) {
      console.error(error);
      console.error('Mensagem de erro:', error.message);
      console.log('Stack de erro:', error.stack);
      console.warn('Ocorreu um erro ao tentar cadastrar o usuário');
      alert('Ocorreu um erro ao cadastrar o usuário');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-scroller">
      <NavBar />
      <SideBar />
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Cadastro de Usuários</h4>
                <p className="card-description">Preencha os dados abaixo para cadastrar um usuário.</p>
                <form onSubmit={handleSubmit} className="forms-sample">
                  <div className="form-group">
                    <label htmlFor="username">Nome de usuário:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      placeholder="Nome de usuário"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="E-mail"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Senha:</label>
                    <div className="input-group">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Senha"
                        required
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn btn-outline-success"
                          onClick={toggleShowPassword}
                        >
                          {showPassword ? 'Ocultar' : 'Mostrar'}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <select
                      className="form-control"
                      id="role"
                      value={role}
                      onChange={(event) => setRole(event.target.value)}
                    >
                      <option value="ROLE_USER">USUÁRIO CONVENCIONAL</option>
                      <option value="ROLE_ADMIN">ADMIN</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-outline-success mr-2">Cadastrar</button>
                  <button className="btn btn-outline-danger">Cancelar</button>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default UserRegistrationForm;
