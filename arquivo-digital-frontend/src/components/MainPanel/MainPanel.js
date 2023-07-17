import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import NavBar from '../NavBar/NavBar';


function MainPanel({ children }) {
    return (
      <div className="container-scroller">
        <NavBar />
        <SideBar />
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              
            </div>
            <Footer /> 
          </div>
        </div>
      </div>
    );
}
  
  export default MainPanel;