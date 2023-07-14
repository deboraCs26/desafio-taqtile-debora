import { useQuery } from '@apollo/client';
import { ResponseProperties } from '../properties';
import { GET_PROPERTIES } from '../properties';

export const GetProperties = () => {
  const { loading, error, data } = useQuery<ResponseProperties>(GET_PROPERTIES);
  const properties = data?.recentProperties ?? [];

  return {
    loading,
    error,
    properties,
  };
};
