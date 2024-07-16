import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';


function Footer() {
  return (
    <FooterBase>
      <img className="Logo" src={Logo} alt="AluraFlix logo"/>
      <p>Desarrollado por Stephanie Molina</p>
      <p>Oracle ONE 6 | Fase 3 - Especialización Front-End</p>
    </FooterBase>
  );
}

export default Footer;
