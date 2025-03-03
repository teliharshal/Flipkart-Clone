import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const smartphones = [
  {
    name: "Motorola Edge 50 Pro",
    image:
      "https://motorolain.vtexassets.com/arquivos/ids/159178/motorola-edge-50-pro-PDP-ecomm-render-color5-5-.png?v=638614765175970000",
    price: "From ₹20,000",
  },
  {
    name: "CMF Phone (8GB)",
    image: "https://at.nothing.tech/cdn/shop/files/2048x1352BuyPage-BlackPhone-1.png?v=1720093505",
    price: "Just ₹12,999*",
  },
  {
    name: "Moto G35 5G",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/z/q/m/g35-5g-pb3h0000in-motorola-original-imah7c6ykgz5rtgv.jpeg?q=90&crop=false",
    price: "From ₹9,999",
  },
  {
    name: "Moto G64 5G",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3IU94aS-_pfrsL8QQGeDNE1iNb6U3N2DnXQ&s",
    price: "Just ₹12,999*",
  },
  {
    name: "Realme P1 5G",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=90&crop=false",
    price: "From ₹13,999",
  },
  {
    name: "Poco M7 Pro 5G",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMMRL-GkIXNVNZ0iYx02a-FN0x8eXKJaHdQ&s",
    price: "From ₹13,999*",
  },
];

export default function HomeDeals() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width to decide layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white p-4 md:p-6 shadow-md rounded-md relative mt-3 mb-3 ml-3 mr-3">
      <h2 className="text-lg md:text-xl font-semibold mb-6 text-left">Best Of Electronics</h2>

      {/* Show different layout based on screen size */}
      {isMobile ? (
        // Show a simple vertical list on mobile
        <div className="flex flex-col gap-4">
          {smartphones.map((phone, index) => (
            <div key={index} className="flex items-center border p-3 rounded-md shadow-sm">
              <img src={phone.image} alt={phone.name} className="w-20 h-20 object-contain mr-4" />
              <div>
                <p className="text-sm font-medium">{phone.name}</p>
                <p className="text-sm font-bold">{phone.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Show Swiper carousel on larger screens
        <div className="flex justify-center">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="pb-2 text-center"
          >
            {smartphones.map((phone, index) => (
              <SwiperSlide key={index} className="flex flex-col items-center border p-3 rounded-md shadow-sm">
                <img src={phone.image} alt={phone.name} className="w-28 h-28 object-contain" />
                <p className="text-xs text-center mt-1">{phone.name}</p>
                <p className="text-xs font-bold">{phone.price}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Custom Swiper Navigation */}
      {!isMobile && (
        <>
          <div className="swiper-button-prev custom-nav mt-2"></div>
          <div className="swiper-button-next custom-nav mt-2"></div>
        </>
      )}

      {/* Custom Styling */}
      <style jsx>{`
        .custom-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 40px;
          background: white;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          cursor: pointer;
          z-index: 10;
        }
        .swiper-button-prev {
          left: 0;
        }
        .swiper-button-next {
          right: 0;
        }
        .custom-nav::after {
          font-size: 16px;
          color: gray;
        }
      `}</style>
    </div>
  );
}
