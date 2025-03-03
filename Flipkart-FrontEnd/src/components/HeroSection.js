import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const banners = [
  { id: 1, imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/f6c2fbe6b103cb71.jpg?q=20", link: "#" },
  { id: 2, imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/c928b14a5cddaf18.jpg?q=20", link: "#" },
  { id: 3, imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/f957904d5145986d.jpg?q=20", link: "#" },
  { id: 4, imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/e88e5a7fcc2bf844.jpg?q=20", link: "#" },
  { id: 5, imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/691d83e294cf1aba.jpg?q=20", link: "#" },
  { id: 6, imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/bd58703899c70c72.jpg?q=20", link: "#" },
  { id: 7, imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/1c26da03bd93c9f5.jpg?q=20", link: "#" },
  { id: 8, imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a89ee09acc1a9e5.jpg?q=80", link: "#" },
];

const HeroSection = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      if (swiperInstance && prevEl && nextEl) {
        swiperInstance.params.navigation.prevEl = prevEl;
        swiperInstance.params.navigation.nextEl = nextEl;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }
  }, [prevEl, nextEl]);

  return (
    <div className="relative overflow-hidden bg-[#f1f3f6] mb-2 mt-[-49px] ">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{ prevEl, nextEl }}
        pagination={{ clickable: true, bulletActiveClass: "swiper-pagination-bullet-active bg-[#2874f0]" }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[280px]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <a href={banner.link}>
              <img src={banner.imageUrl} alt="Banner" className="w-full h-full object-cover object-center" loading="lazy" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button ref={setPrevEl} className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white p-2 rounded-full shadow-md hidden sm:flex">
        <ChevronLeft size={24} />
      </button>
      <button ref={setNextEl} className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white p-2 rounded-full shadow-md hidden sm:flex">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroSection;
