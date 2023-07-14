import { useQuery } from '@apollo/client';
import { QueryProperties } from '../properties';
import { GET_PROPERTIES } from '../properties';

export const GetProperties = () => {
  const { loading, error, data } = useQuery<QueryProperties>(GET_PROPERTIES);

  const properties = data?.recentProperties?.map((property) => ({
    imageUrls: property.imageUrls,
    area: property.area,
    buyPrices: property.buyPrices,
    bathrooms: property.bathrooms,
    bedrooms: property.bedrooms,
    address: {
      city: property.address.city,
      state: property.address.state,
      district: property.address.district,
      streetNumber: property.address.streetNumber,
    },
  })) || [];

  return {
    loading,
    error,
    properties,
  };
};
