import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import NavBar from '../NavBar/NavBar';

function DocumentRegistrationForm() {
  const [name, setName] = useState('');
  const [identity, setIdentity] = useState('');
  const [rank, setRank] = useState('');
  const [description, setDescription] = useState('');
  const [boxNumber, setBoxNumber] = useState('');
  const [category, setCategory] = useState('');
  const [situation, setSituation] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/persons', {
        name,
        identity,
        rank,
        description,
        boxNumber,
        category,
        situation,
        entryDate,
        departureDate,
      });

      if (response.status === 201) {
        // Documento cadastrado com sucesso
        navigate('/home');
      } else {
        alert('Erro ao cadastrar documento');
      }
    } catch (error) {
      console.error(error);
      console.error('Mensagem de erro:', error.message);
      console.log('Stack de erro:', error.stack);
      console.warn('Ocorreu um erro ao tentar cadastrar o documento');
      alert('Ocorreu um erro ao cadastrar o documento');
    }
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
                <h4 className="card-title">Cadastro de Documentos</h4>
                <p className="card-description">Preencha os dados abaixo para cadastrar um documento.</p>
                <form onSubmit={handleSubmit} className="forms-sample">
                  <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Nome"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="identity">Identidade:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="identity"
                      value={identity}
                      onChange={(event) => setIdentity(event.target.value)}
                      placeholder="Identidade"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rank">Patente:</label>
                    <select
                      className="form-control"
                      id="rank"
                      value={rank}
                      onChange={(event) => setRank(event.target.value)}
                    >
                      <option value="">Selecione a Patente</option>
                      <option value="SOLDADO">Soldado</option>
                      <option value="CABO">Cabo</option>
                      <option value="TERCEIRO_SARGENTO">Terceiro Sargento</option>
                      <option value="SEGUNDO_SARGENTO">Segundo Sargento</option>
                      <option value="PRIMEIRO_SARGENTO">Primeiro Sargento</option>
                      <option value="SUBTENENTE">Subtenente</option>
                      <option value="ASPIRANTE">Aspirante</option>
                      <option value="SEGUNDO_TENENTE">Segundo Tenente</option>
                      <option value="PRIMEIRO_TENENTE">Primeiro Tenente</option>
                      <option value="CAPITAO">Capitão</option>
                      <option value="MAJOR">Major</option>
                      <option value="TENENTE_CORONEL">Tenente Coronel</option>
                      <option value="CORONEL">Coronel</option>
                      <option value="GENERAL_DE_BRIGADA">General de Brigada</option>
                      <option value="GENERAL_DE_DIVISAO">General de Divisão</option>
                      <option value="GENERAL_DE_EXERCITO">General de Exército</option>
                      <option value="NAO_POSSUI">Não Possui</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Descrição:</label>
                    <textarea
                      className="form-control"
                      id="description"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      placeholder="Descrição"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="boxNumber">Número da Caixa:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="boxNumber"
                      value={boxNumber}
                      onChange={(event) => setBoxNumber(event.target.value)}
                      placeholder="Número da Caixa"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Categoria:</label>
                    <select
                      className="form-control"
                      id="category"
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}
                    >
                      <option value="">Selecione a Categoria</option>
                      <option value="VETERANO">Veterano</option>
                      <option value="PENSIONISTA_MILITAR">Pensionista Militar</option>
                      <option value="PENSIONISTA_CIVIL">Pensionista Civil</option>
                      <option value="INATIVO_CIVIL">Inativo Civil</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="situation">Situação:</label>
                    <select
                      className="form-control"
                      id="situation"
                      value={situation}
                      onChange={(event) => setSituation(event.target.value)}
                    >
                      <option value="">Selecione a Situação</option>
                      <option value="EMPRESTADO">Emprestado</option>
                      <option value="ARQUIVADO">Arquivado</option>
                      <option value="NAO_ENCONTRADO">Não Encontrado</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="entryDate">Data de Entrada:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="entryDate"
                      value={entryDate}
                      onChange={(event) => setEntryDate(event.target.value)}
                      placeholder="Data de Entrada"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="departureDate">Data de Saída:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="departureDate"
                      value={departureDate}
                      onChange={(event) => setDepartureDate(event.target.value)}
                      placeholder="Data de Saída"
                    />
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

export default DocumentRegistrationForm;
