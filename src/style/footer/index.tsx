import React from "react";
import './style.css';
import logo from './image/LOGO.svg'
import { FooterBlock } from "./footer";
import { Separator } from "../separator/separator";

export const Footer = () => (

  <footer>
    <div  className="footer-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="itens-container">
      <div>
        <FooterBlock
          title="Comprar"
          items={['Casas', 'Apartamentos', 'Lançamentos', 'Melhores negócios']}
        />
        <Separator size="large" />
        <Separator size="large" />
        <Separator size="large" />
        <div>
          <FooterBlock
            title="Alugar"
            items={['Casas', 'Apartamentos', 'Lançamentos', 'Melhores negócios']}
          />
        </div>
      </div>

      <div>
        <FooterBlock
          title="Termos & Privacidade"
          items={['Política de cookies', 'Termos de uso', 'Política de privacidade']}
        />
        <Separator size="large" />
        <Separator size="large" />
        <Separator size="large" />
        <Separator size="large" />
        <div>
          <FooterBlock
            title="Institucional"
            items={['Sobre nós', 'Contato', 'Trabalhe conosco']}
          />
        </div>
      </div>

      <div>
        <FooterBlock
          title="Informações"
          items={['Blog', 'Guia', 'FAQ', 'Canal de ajuda']}
        />
      </div>
      </div>
     
    </div>
    <Separator size="small"/>
    <div className="rodape">
      <FooterBlock items={['©2022 Estatery. Todos os direitos estão reservados']} />
    </div>
  </footer>
);
