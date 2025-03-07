import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const smartphones = [
  {
    name: "Best TrueWireless H...",
    image: "https://www.baudville.com/cdn/shop/products/BV_94172_FRONT.jpg?v=1702501363",
    price: "Grab Now",
  },
  {
    name: "Noise Smartwatches",
    image: "https://www.gonoise.com/cdn/shop/products/Artboard17.png?v=1674121716",
    price: "From ₹1,099",
  },
  {
    name: "Printers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGnAhYfVx5dKEmhNuHNHK7y9sASSNuHXhFw&s",
    price: "From ₹499*",
  },
  {
    name: "Top Mirrorless Cameras",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO0LgJBeaJurUGvXVDh9LWVmCKeHQRxFzsg&s",
    price: "Shop Now!",
  },
  {
    name: "ASUS Monitors",
    image: "https://mx2games.com/wp-content/uploads/2024/10/Asus-Rog-Swift-32-Inch-4K-Oled-Gaming-Monitor-Dual-Mode-4K-FHD-PG32UCDP-httpsmx2games.com_.png",
    price: "From ₹14,999",
  },
  {
    name: "Projectors",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMKyCmswvjYKi4qPLC_O2KdUbRGH_E18YbQ&s",
    price: "From ₹9,999",
  },
  {
    name: "Best of Shavers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JNgmVKkDTgPownwzfa6p06TZCyhTMlJJFmYElO66rYSnitn8zufzTLN6kYMxF_7XF1k&usqp=CAU",
    price: "From ₹999",
  },
  {
    name: "Best SmartPhones",
    image: "https://www.oppostore.com.au/cdn/shop/files/1_413475e3-4489-48be-ac95-735bad7e914b.png?v=1723427854&width=1080",
    price: "From ₹9,999",
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
          <div className="swiper-button-prev custom-nav mt-7"></div>
          <div className="swiper-button-next custom-nav mt-7"></div>
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
