import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css/navigation";
export default function Normal() {
  const swiper = useSwiper();

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide className="slide">Slide 1</SwiperSlide>
      <SwiperSlide className="slide">Slide 2</SwiperSlide>
      <SwiperSlide className="slide">Slide 3</SwiperSlide>
      <SwiperSlide className="slide">Slide 4</SwiperSlide>
      <SwiperSlide className="slide">Slide 5</SwiperSlide>
      <SwiperSlide className="slide">Slide 6</SwiperSlide>
      <SwiperSlide className="slide">Slide 7</SwiperSlide>
      <SwiperSlide className="slide">Slide 8</SwiperSlide>
      <SwiperSlide className="slide"> Slide 9</SwiperSlide>
    </Swiper>
  );
}
