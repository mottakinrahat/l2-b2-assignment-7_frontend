import Title from "@/components/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useGetAllDonorQuery } from "@/redux/features/auth/donorApi";
const TopDonor = () => {
  const { data } = useGetAllDonorQuery(undefined);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-2">
      <Title title={"Top Donor Testimonial"}></Title>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.slice(0, 6).map((data: any) => (
            <div key={data._id}>
              <SwiperSlide key={data._id}>
                <div className="h-[600px] w-full relative text-white rounded-xl">
                  <img
                    src="https://i.ibb.co/W0hZTb0/pexels-joyston-judah-933054.jpg"
                    alt={`Image ${data._id}`}
                    className=""
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                  <div className="absolute top-1/4 ">
                    <div className="h-40 w-40 mx-auto">
                      <img
                        src={data.image}
                        alt=""
                        className="border-2 border-white rounded-full"
                      />
                    </div>
                    <h3 className="font-bold text-2xl mt-4 text-[#D7E826]">
                      {data.name}
                    </h3>
                    <p className="lg:mx-40 mx-8 mt-6">{data.testimonial}</p>
                    <p className="mt-6">
                      <span className="text-[#D7E826]">Location:</span>{" "}
                      {data.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopDonor;
