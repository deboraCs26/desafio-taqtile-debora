import React from "react";
import { Items } from "./items-list";
import { itemsProperty, itemsPrivate, itemsCondominium, itemsCondominiumPrivate } from "./items-constants";
import { Separator } from "../separator/separator";

export const PropertyItems = () => {

  return (
    <div className="property-list-container">
      <div className="property-list">
        <Items title="O que esse lugar oferece" />

        <div className="list-container">
          <Items itemsNeutral={itemsProperty} />
          <Items itemsCta={itemsPrivate} />
        </div>
      </div>

      <Separator size="XLarge" />
      <div className="property-list">
        <Items title="Disponível no condomínio" />

        <div className="list-container">
          <Items itemsNeutral={itemsCondominium} />
          <Items itemsCta={itemsCondominiumPrivate} />
        </div>
      </div>
    </div>
  );
};
