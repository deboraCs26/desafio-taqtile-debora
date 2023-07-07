import React from "react";
import './style.css';
import logo from './image/logo.svg'
import { FooterSession } from "./footer-session";
import { Separator } from "../separator/separator";
import { colors } from "../colors";

const styleFooter = {
  background: colors.brand.primaryXDark,
}
export const Footer = () => (

  <footer style={styleFooter}>
    <div className="footer-container">

      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>

      <div className="items-container">
        <div className="items-column">
          <FooterSession
            title="Comprar"
            items={['Casas', 'Apartamentos', 'Lançamentos', 'Melhores negócios']}
          />
          <Separator size="large" />
          <Separator size="large" />
         
          <FooterSession
            title="Alugar"
            items={['Casas', 'Apartamentos', 'Lançamentos', 'Melhores negócios']}
          />
        </div>

        <div className="items-column">
          <FooterSession
            title="Termos & Privacidade"
            items={['Política de cookies', 'Termos de uso', 'Política de privacidade']}
          />
          <Separator size="large" />
          <Separator size="large" />
          <Separator size="large" />
          
          <FooterSession
            title="Institucional"
            items={['Sobre nós', 'Contato', 'Trabalhe conosco']}
          />
        </div>

        <FooterSession
          title="Informações"
          items={['Blog', 'Guia', 'FAQ', 'Canal de ajuda']}
        />
      </div>
    </div>

    <div className="copyright-container" style={styleFooter}>
      <FooterSession items={['©2022 Estatery. Todos os direitos estão reservados']} />
    </div>
  </footer>
);
