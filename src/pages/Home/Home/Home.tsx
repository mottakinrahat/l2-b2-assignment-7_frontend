import { toogleThemes } from "@/redux/features/auth/themeSlice";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner";
import Blog from "../Blog/Blog";
import ImageGallery from "../ImageGallery/ImageGallery";
import TopDonor from "../TopDonor/TopDonor";
import WinterClothes from "../WinterClothes/WinterClothes";
import OurPartner from "./OurPartner/OurPartner";
import { useAppSelector } from "@/redux/hook";

const Home = () => {
  const darkMode = useAppSelector(toogleThemes);
  return (
    <div className={`h-auto ${darkMode ? "text-white" : "text-black"}`}>
      <Banner />
      <WinterClothes></WinterClothes>
      <TopDonor></TopDonor>
      <div>
        <ImageGallery />
      </div>
      <div className="mt-20">
        <AboutUs></AboutUs>
      </div>
      <div>
        <OurPartner />
      </div>
      <div>
        <Blog />
      </div>
    </div>
  );
};

export default Home;
