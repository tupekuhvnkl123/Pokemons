import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ImagesSwiper = ({ imgaes }) => {
  return (
    <div className="h-full flexCenter w-full">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
        className=" h-full"
      >
        {imgaes.map((img, index) => (
          <SwiperSlide className="flexCenter" key={index}>
            <img
              className="object-cover object-center h-[100px] select-none"
              src={img}
              alt={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImagesSwiper;
