import { gql } from "@apollo/client";

export const GET_PROPERTIES_DETAIL = gql`
query Detail {
  recentPropertiesDetail {
    address {
      cep
      city
      complement
      district
      streetNumber
      street
      state
      longitude
      latitude
    }
    area
    availableOnCondominium
    availableOnProperty
    bathrooms
    bedrooms
    broker {
      company
      cresciSp
      name
      whatsApp
    }
    buyPrices {
      condominium
      iptu
      total
    }
    description
    hasGarage
    hasPool
    id
    imageUrls
    proximities {
      description
      type
    }
    rentPrices {
      condominium
      iptu
      rent
      serviceTax
    }
    shortDescription
  }
}
`;

export interface Address {
  cep: string;
  city: string;
  complement: string;
  district: string;
  streetNumber: number;
  street: string;
  state: string;
  longitude: string;
  latitude: string;
};

export interface Broker {
  company: string;
  cresciSp: string;
  name: string;
  whatsApp: string;
}

export interface BuyPrices {
  condominium: number;
  iptu: number;
  total: number;
}

export interface RentPrices {
  condominium: number;
  iptu: number;
  rent: number;
  serviceTax: number;
}

export interface Proximity {
  description: string;
  type: string;
}

export interface RecentProperty {
  address: Address;
  area: string;
  availableOnCondominium: boolean;
  availableOnProperty: boolean;
  bathrooms: number;
  bedrooms: number;
  broker: Broker;
  buyPrices: BuyPrices;
  description: string;
  hasGarage: boolean;
  hasPool: boolean;
  id: string;
  imageUrls: string[];
  proximities: Proximity[];
  rentPrices: RentPrices;
  shortDescription: string;
}

export interface ResponseDetail {
  recentPropertiesDetail?: [];
};
