import Title from "@/components/Title";
import { useGetClothesQuery } from "@/redux/api/clothesApi";
import ClothesCard from "./ClothesCard";
import { TClothes } from "@/types/ClothesType";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WinterClothes = () => {
  const { data } = useGetClothesQuery(undefined);
  if (!data) return null;
  return (
    <div>
      <Title title={"Winter Clothes"} />

      {/* Cards */}
      <div className="flex justify-center items-center flex-wrap gap-8">
        {data.slice(0, 6).map((clothes: TClothes) => (
          <ClothesCard key={clothes._id} clothes={clothes} />
        ))}
      </div>
      <div className="text-center mt-20">
        <Link to="/winter-clothes">
          <Button className="bg-[#D7E826] text-black w-60">
            View All
            <ArrowRight className="h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WinterClothes;
