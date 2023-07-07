import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      imageUrl
      name
      numberOfProperties
    }
  }
}
`;

export interface Category {
  id: string;
  imageIrl: string;
  numberOfProperties: number;
};

export interface QueryCategory{
  categories?: Category[];
};
