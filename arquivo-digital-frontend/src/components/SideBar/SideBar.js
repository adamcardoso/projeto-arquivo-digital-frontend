import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item menu-items">
          <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
            <span className="menu-icon">
              <i className="mdi mdi-file-document"></i>
            </span>
            <span className="menu-title">Processos</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link to="/pesquisa-documentos" className="nav-link">Pesquisar documentos</Link></li>
              <li className="nav-item"> <Link to="/cadastrar-documentos" className="nav-link">Cadastrar documentos</Link></li>
              <li className="nav-item"> <Link to="/editar-documentos" className="nav-link">Editar documentos</Link></li>
              <li className="nav-item"> <Link to="/excluir-documentos" className="nav-link">Excluir documentos</Link></li>
            </ul>
          </div>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#ui-basic-2" aria-expanded="false" aria-controls="ui-basic-2">
            <span className="menu-icon">
              <i className="mdi mdi-account-key"></i>
            </span>
            <span className="menu-title">Usuários</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="ui-basic-2">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link to="/pesquisa-usuarios" className="nav-link">Pesquisar usuários</Link> </li>
              <li className="nav-item"> <Link to="/cadastro-usuarios" className="nav-link">Cadastrar usuários</Link> </li>
              <li className="nav-item"> <Link to="/editar-usuarios" className="nav-link">Editar usuários</Link> </li>
              <li className="nav-item"> <Link to="/excluir-usuarios" className="nav-link">Excluir usuários</Link> </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
