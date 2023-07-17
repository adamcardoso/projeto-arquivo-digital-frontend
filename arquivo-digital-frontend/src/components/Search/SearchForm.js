import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import NavBar from '../NavBar/NavBar';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem("Auth");
      const response = await axios.get(`http://localhost:8081/api/persons/search?nomeCadastrado=${searchTerm}`,
       {'headers':{ 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'}}
       );
      console.log(response.data); // Verificar a resposta da API

      if (Array.isArray(response.data)) {
        setSearchResults(response.data);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao pesquisar o usuário');
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
                <h4 className="card-title">Pesquisa de documentos</h4>
                <p className="card-description">Insira o nome que você deseja.</p>

                <ul className="navbar-nav w-100">
                  <li className="nav-item w-100">
                    <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search" onSubmit={handleSearch}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Pesquisar processo"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                      />
                      <button type="submit" className="btn btn-outline-success">Buscar</button>
                    </form>
                  </li>
                </ul>

                {searchResults.length > 0 && (
                  <div>
                    <h4>Resultado da Pesquisa</h4>
                    {searchResults.map((user) => (
                      <form key={user.id} className="forms-sample">
                        <div className="form-group">
                          <label htmlFor="name">Nome:</label>
                          <input type="text" className="form-control" id="name" value={user.name} readOnly />
                        </div>
                        <div className="form-group">
                          <label htmlFor="identity">Identidade:</label>
                          <input type="text" className="form-control" id="identity" value={user.identity} readOnly />
                        </div>
                        <div className="form-group">
                          <label htmlFor="rank">Patente:</label>
                          <input type="text" className="form-control" id="rank" value={user.rank} readOnly />
                        </div>
                        <div className="form-group">
                          <label htmlFor="description">Descrição:</label>
                          <textarea className="form-control" id="description" value={user.description} readOnly />
                        </div>
                        <div className="form-group">
                          <label htmlFor="boxNumber">Número da Caixa:</label>
                          <input type="text" className="form-control" id="boxNumber" value={user.boxNumber} readOnly />
                        </div>
                      </form>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
