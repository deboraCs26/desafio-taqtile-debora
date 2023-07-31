import { useQuery } from "@apollo/client";
import { ResponseDetail } from "../property-detail";
import { GET_PROPERTIES_DETAIL } from "../property-detail";

export const GetDetail = () => {
  const { loading, error, data } = useQuery<ResponseDetail>(GET_PROPERTIES_DETAIL);
  const detail = data?.recentPropertiesDetail ?? [];

  return {
    loading,
    error,
    detail,
  }
}
