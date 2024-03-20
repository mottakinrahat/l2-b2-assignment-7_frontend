import { Button } from "@/components/ui/button";
import { TClothes } from "@/types/ClothesType";
import { Link } from "react-router-dom";

const ClothesCard = ({ clothes }: { clothes: TClothes }) => {
  const { _id, image, title, category, size } = clothes;
  return (
    <div className="card w-[400px] h-auto ">
      <img
        src={image}
        className="h-[250px] w-[400px] object-cover shadow-md shadow-[#a8ad72]"
        alt=""
      />
      <h2 className="text-2xl font-semibold my-2">{title}</h2>
      <p>{category} </p>
      <p>size: {size}</p>
      <Link to={`/winter-clothes/${_id}`}>
        <Button className="bg-[#D7E826] text-black font-bold my-2">
          View Detail
        </Button>
      </Link>
    </div>
  );
};

export default ClothesCard;
