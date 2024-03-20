import Dashboard from "@/components/layout/Dashboard/Dashboard";
import MainLayout from "@/components/layout/MainLayout";
import AboutUs from "@/pages/AboutUs/AboutUs";
import AllWinterClothes from "@/pages/AllWinterClothes/AllWinterClothes";
import Community from "@/pages/Community/Community";
import AddClothes from "@/pages/Dashboard Pages/AddClothes/AddClothes";
import WinterDashClothes from "@/pages/Dashboard Pages/AllWinterClothes/WinterDashClothes";
import Statistics from "@/pages/Dashboard Pages/Statistics/Statistics";
import Testimonial from "@/pages/Dashboard Pages/Testimonial/Testimonial";
import Vounteer from "@/pages/Dashboard Pages/Volunteer/Vounteer";
import Error from "@/pages/Error";
import Home from "@/pages/Home/Home/Home";
import LeaderBoard from "@/pages/LeaderBoard/LeaderBoard";
import Login from "@/pages/Login";
import Register from "@/pages/Register/Register";
import ViewDetails from "@/pages/ViewDetails/ViewDetails";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/winter-clothes",
        element: <AllWinterClothes />,
      },
      {
        path: "/winter-clothes/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://l2-b2-assignment7-rahat.vercel.app/api/v1/clothes/${params.id}`
          ),
      },
      {
        path: "/leaderboard",
        element: <LeaderBoard></LeaderBoard>,
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
      {
        path: "/volunteer",
        element: <Vounteer></Vounteer>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <Statistics></Statistics>,
      },
      {
        path: "winter-clothes",
        element: <WinterDashClothes />,
      },
      {
        path: "create-winter-clothes",
        element: <AddClothes></AddClothes>,
      },
      {
        path: "create-testimonial",
        element: <Testimonial></Testimonial>,
      },
    ],
  },
]);
export default router;
