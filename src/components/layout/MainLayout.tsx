import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { useAppSelector } from "@/redux/hook";
import { toogleThemes } from "@/redux/features/auth/themeSlice";

const MainLayout = () => {
  const darkMode = useAppSelector(toogleThemes);
  return (
    <div className={`ubuntu-regular ${darkMode ? "text-white" : "text-black"}`}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('${
            darkMode
              ? "https://i.ibb.co/g9Q2yjV/pexels-martin-mariani-3801463.jpg"
              : "https://i.ibb.co/dDK99bX/pexels-alissa-nabiullina-997567.jpg"
          }')`,
          backgroundSize: "cover",

          backgroundPosition: "center",
          opacity: darkMode ? 20 : 0.1,
          zIndex: -1,
        }}
      >
        {darkMode && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Black with 70% opacity
              zIndex: 0,
            }}
          ></div>
        )}
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
