import React from "react";
import "./location.css";

export const PropertyMap = () => {
  return (
    <div>
      <iframe
        title="Local do Imóvel"
        width="450"
        height="430"
        frameBorder="0"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?q=Avenida das Nações Unidas 3239, Complemento 245B, Bonfim, Osasco&key=AIzaSyDFqcjwssTsHGkqm0V2cVmRCNUhfOhxr4I"
        allowFullScreen
      />
    </div>
  );
};
