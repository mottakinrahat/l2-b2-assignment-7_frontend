import Title from "@/components/Title";
import "./about.css";
import { toogleThemes } from "@/redux/features/auth/themeSlice";
import { useAppSelector } from "@/redux/hook";
const AboutUs = () => {
  const darkMode = useAppSelector(toogleThemes);
  return (
    <div className="relative pb-10">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",

          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: darkMode ? 0.1 : 0.1,
          zIndex: 1,
        }}
      ></div>
      <Title title={"What We Do?"}></Title>

      <div className="grid grid-grid-col-1 lg:grid-cols-3 justify-items-center items-center text-xl px-2 gap-10">
        <div className="text-right ">
          <ol>
            <li>
              {" "}
              Collect and distribute warmth.{" "}
              <span className="bg-[#D7E826] p-2 rounded-full text-white">
                01{" "}
              </span>
            </li>
            <li>
              {" "}
              Ensure cleanliness, suitability.{" "}
              <span className="bg-[#7286f1] p-2 rounded-full text-white">
                02
              </span>
            </li>
            <li>
              {" "}
              Direct delivery partnerships.{" "}
              <span className="bg-[#9da65d] p-2 rounded-full text-white">
                03
              </span>
            </li>
            <li>
              {" "}
              Community awareness initiatives.{" "}
              <span className="bg-[#6d7428] p-2 rounded-full text-white">
                04
              </span>
            </li>
            <li>
              {" "}
              Provide essential accessories.{" "}
              <span className="bg-[#30a97b] p-2 rounded-full text-white">
                05
              </span>
            </li>
          </ol>
        </div>

        <div>
          <img
            src="https://i.ibb.co/Y2tmMJM/pexels-rdne-stock-project-6646918.jpg"
            alt=""
            className="h-80 w-[700px] object-cover"
          />
        </div>

        <div className="text-left">
          {" "}
          <ol>
            <li>
              {" "}
              <span className="bg-[#4559f1] p-2 rounded-full text-white">
                06
              </span>{" "}
              Tailored support solutions.
            </li>
            <li>
              {" "}
              <span className="bg-[#f14343] p-2 rounded-full text-white">
                07
              </span>{" "}
              Emergency response readiness.
            </li>
            <li>
              {" "}
              <span className="bg-[#40ebc9] p-2 rounded-full text-white">
                08
              </span>{" "}
              Promote reuse, sustainability.
            </li>
            <li>
              {" "}
              <span className="bg-[#ff457d] p-2 rounded-full text-white">
                09
              </span>{" "}
              Advocate for change.
            </li>
            <li>
              {" "}
              <span className="bg-[#b2bb4d] p-2 rounded-full text-white">
                10
              </span>{" "}
              Empower through education.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
