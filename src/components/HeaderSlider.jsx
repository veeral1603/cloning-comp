import styles from "./css/HeaderSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import HeaderCard from "./HeaderCard";

import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";

export default function HeaderSlider() {
  return (
    <div className={styles.headerSliderContainer}>
      <Swiper
        slidesPerView={6.5}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeaderCard img={person1} color="#ECF5D6" />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderCard img={person2} color="#FFEED2" />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderCard img={person3} color="#E1E9FE" />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderCard img={person4} color="#ECF5D6" />
        </SwiperSlide>

        <SwiperSlide>
          <HeaderCard img={person1} color="#ECF5D6" />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderCard img={person2} color="#FFEED2" />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderCard img={person3} color="#E1E9FE" />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderCard img={person4} color="#ECF5D6" />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderCard img={person1} color="#ECF5D6" />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderCard img={person2} color="#FFEED2" />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderCard img={person3} color="#E1E9FE" />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderCard img={person4} color="#ECF5D6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
