import Title from "@/components/Title";
import Marquee from "react-fast-marquee";

const OurPartner = () => {
  return (
    <div>
      <Title title={"Our Payment Partner"}></Title>
      <Marquee>
        <div className="flex justify-center items-center gap-6">
          <img
            src="https://i.ibb.co/x2P9S97/pngwing-com-5.png"
            className="w-40 "
            alt=""
          />
          <img
            src="https://i.ibb.co/WvvXg2V/pngwing-com-1.png"
            className="w-40 "
            alt=""
          />
          <img
            src="https://i.ibb.co/XjY99QT/pngwing-com-2.png"
            className="w-40 "
            alt=""
          />
          <img
            src="https://i.ibb.co/1zRJPHJ/pngwing-com-3.png"
            className="w-40 "
            alt=""
          />
          <img
            src="https://i.ibb.co/60QnzLg/pngwing-com.png"
            className="w-40 "
            alt=""
          />
          <img
            src="https://i.ibb.co/GT6YDcb/pngwing-com-4.png"
            className="w-40 "
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default OurPartner;
