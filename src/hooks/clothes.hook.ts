import { useGetClothesQuery } from "@/redux/api/clothesApi";

const useClothes = () => {
  const { data, error, isLoading } = useGetClothesQuery(undefined);

  if (isLoading) {
    return { isLoading: true, clothes: [] };
  }

  if (error) {
    console.error("Error fetching clothes:", error);
    return { isLoading: false, clothes: [] };
  }

  return { isLoading: false, clothes: data };
};

export default useClothes;
