import React from 'react';
import '../../App.css';

function Footer(){
    return(
        
        <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Arquivo Digital - SVP3 - Cmdo 3ª RM</span>
                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Desenvolvido por <a href="https://www.linkedin.com/in/adam-cardoso/" target="_blank" rel="noopener noreferrer">Adam Cardoso & Hiago Silva</a></span>
            </div>
        </footer>
    );
}

export default Footer;