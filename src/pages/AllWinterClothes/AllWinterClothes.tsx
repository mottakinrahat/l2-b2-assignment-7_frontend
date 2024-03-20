import ClothesCard from "../Home/WinterClothes/ClothesCard";
import { TClothes } from "@/types/ClothesType";
import { useGetClothesQuery } from "@/redux/api/clothesApi";

const AllWinterClothes = () => {
  const { data } = useGetClothesQuery(undefined);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('https://i.ibb.co/94JxY6v/pexels-invisiblepower-1076885.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          zIndex: -1,
        }}
      ></div>

      <div className="flex justify-center items-center flex-wrap gap-8">
        {data.map((clothes: TClothes) => (
          <ClothesCard key={clothes._id} clothes={clothes} />
        ))}
      </div>
    </div>
  );
};

export default AllWinterClothes;
