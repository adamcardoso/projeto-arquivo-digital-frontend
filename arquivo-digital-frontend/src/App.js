import React from 'react';
import './App.css';
import LoginForm from './components/Login/LoginForm';
import MainPanel from './components/MainPanel/MainPanel';
import UserRegistrationForm from './components/RegistrationForm/UserRegistrationForm';
import SearchForm from './components/Search/SearchForm';
import DocumentRegistrationForm from './components/DocumentRegistration/DocumentRegistrationForm'; // Importe o componente DocumentRegistrationForm
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/home"
          element={<MainPanel />}
          render={() =>
            isAuthenticated ? <MainPanel /> : <Navigate to="/" />
          }
        />
        <Route path="/cadastro-usuarios" element={<UserRegistrationForm />} />
        <Route path="/cadastrar-documentos" element={<DocumentRegistrationForm />} /> {/* Adicione essa rota para o DocumentRegistrationForm */}
        <Route path="/pesquisa-documentos" element={<SearchForm />} />
      </Routes>
    </Router>
  );
}

export default App;
