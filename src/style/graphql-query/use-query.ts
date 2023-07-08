import { useQuery } from '@apollo/client';
import { QueryCategory } from './categories';
import { GET_CATEGORIES } from './categories';

export const GetCategories = () => {
  const { loading, error, data } = useQuery<QueryCategory>(GET_CATEGORIES);
  
  const categories = data?.categories?.map((category) => ({
    id: category.id,
    imageUrl: category.imageUrl,
    name: category.name,
    numberOfProperties: category.numberOfProperties,
  }));

  return {
    loading,
    error,
    categories: categories || [],
  };
};
