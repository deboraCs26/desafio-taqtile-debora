import { useQuery } from '@apollo/client';
import { QueryCategory } from './categories';
import { GET_CATEGORIES } from './categories';

export const GetCategories = () => {
  const { loading, error, data } = useQuery<QueryCategory>(GET_CATEGORIES);
  const categories = data?.categories ?? [];

  return {
    loading,
    error,
    categories: categories || [],
  };
};
