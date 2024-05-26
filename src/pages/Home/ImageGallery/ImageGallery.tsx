// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Title from "@/components/Title";
import { useGetGalleryQuery } from "@/redux/api/galleryApi";
const ImageGallery = () => {
  const { data } = useGetGalleryQuery(undefined);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="px-10 md:px-0">
      <Title title={"Image Gallery of Donation"}></Title>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          autoplay={{ delay: 1000 }}
          className="mySwiper"
        >
          <div>
            {data.map((gallery: any) => (
              <div key={gallery._id}>
                <SwiperSlide key={gallery._id}>
                  <img src={gallery.image_url} alt={`Image ${gallery._id}`} />
                </SwiperSlide>
              </div>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ImageGallery;
