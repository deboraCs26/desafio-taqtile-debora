import { gql } from '@apollo/client';

export const GET_PROPERTIES = gql`
  query Properties {
    recentProperties {
      id
      imageUrls
      area
      bathrooms
      bedrooms
      address {
        city
        state
        district
        streetNumber
      }
      buyPrices {
        total
      }
    }
  }
`;

export interface Address {
  city: string;
  state: string;
  district: string;
  streetNumber: number;
}

export interface Property {
  imageUrls: string[];
  area: number;
  bathrooms: number;
  bedrooms: number;
  buyPrices: {
    total: number;
  };
  address: Address;
}

export interface ResponseProperties {
  recentProperties: Property[];
};

