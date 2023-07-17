import React from "react";
import cozinhaAmericana from "./image-icon/cozinha americana.svg";
import blur from "./image-icon/blur.svg";
import carro from "./image-icon/garagem.svg";
import campanhia from "./image-icon/sistema de campainha.svg";
import tabela from "./image-icon/tablelamp.svg";
import house from "./image-icon/house2.svg";
import chuveiro from "./image-icon/chuveiro a gás.svg"
import piscina from "./image-icon/la_swimmer.svg"

export const IconItems = () => {
  return (
    <div className="icon-container">
      <div className="icon-items">
        <img src={cozinhaAmericana} alt="icon cozinha americana" />
        <img src={blur} alt="jardim" />
        <img src={blur} alt="area de serviço" />
        <img src={carro} alt="garagem" />
        <img src={campanhia} alt="sistema de campanhia" />
      </div>
      <div className="icon-property">
        <img src={tabela} alt="mobilias" />
        <img src={house} alt="cobertura" />
        <img src={chuveiro} alt="chuveiro a gás" />
        <img src={piscina} alt="pricina privada" />
      </div>
    </div>

  );
};
