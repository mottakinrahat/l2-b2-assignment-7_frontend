import { useLoaderData } from "react-router-dom";
import DetailsModal from "./DetailsModal";
import { TClothes } from "@/types/ClothesType";
import { toogleThemes } from "@/redux/features/auth/themeSlice";
import { useAppSelector } from "@/redux/hook";

const ViewDetails = () => {
  const data = useLoaderData() as TClothes;
  const darkMode = useAppSelector(toogleThemes);

  const { image, title, category, description, size, price } = data;
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('https://i.ibb.co/dDK99bX/pexels-alissa-nabiullina-997567.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: darkMode ? 0.2 : 0.2,
          zIndex: -1,
        }}
      ></div>
      <div className="flex flex-col justify-center items-center">
        <img
          src={image}
          alt=""
          className="w-[700px] h-[400px] object-cover  shadow-lg shadow-[#7e807e] px-2 lg:px-0"
        />
        <h2 className="mt-10 text-4xl font-semibold ">{title}</h2>
        <p className="text-xl mt-3">
          <span className="text-[#9d9032] font-semibold">Category:</span>{" "}
          {category}
        </p>
        <p className="text-xl mt-3">
          <span className="text-[#9d9032] font-semibold">Size:</span> {size}
        </p>
        <p className="text-xl mt-3 max-w-[700px]">
          <span className="text-[#9d9032] font-semibold">Description:</span>{" "}
          {description}
        </p>

        <DetailsModal
          productName={title}
          productPrice={price}
          productCategory={category}
        />
      </div>
    </div>
  );
};

export default ViewDetails;
