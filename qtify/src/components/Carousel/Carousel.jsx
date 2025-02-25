import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import "swiper/css";
import "swiper/css/navigation";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

function Carousel({ data, renderComponent }) {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
  }, [data, swiperInstance]);

  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        onSwiper={setSwiperInstance} // Store swiper instance
      >
        {/* Navigation Buttons */}
        <div>
          <CarouselLeftNavigation className="swiper-button-prev" />
          <CarouselRightNavigation className="swiper-button-next" />
        </div>

        {/* Slides */}
        {data.map((ele, index) => (
          <SwiperSlide key={index}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
