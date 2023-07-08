import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query CategoriesProperties {
    categories {
      id
      imageUrl
      name
      numberOfProperties
    }
  }
`;

export interface Category {
  id: string;
  imageUrl: string;
  name: string;
  numberOfProperties: number;
};

export interface QueryCategory {
  categories?: Category[];
};
