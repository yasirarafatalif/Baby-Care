'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Soft & Gentle Care",
      subtitle: "100% Organic Baby Products",
      description: "Amader organic products apnar shishur torker jonno purota nirapod.",
      bg: "bg-blue-50",
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1471&auto=format&fit=crop",
      btnColor: "bg-blue-500"
    },
    {
      id: 2,
      title: "Sweet Dreams Always",
      subtitle: "Comfortable Sleepwear",
      description: "Naram o aramdayok poshake apnar baccah ghumabe nishchinte.",
      bg: "bg-pink-50",
      img: "https://images.unsplash.com/photo-1544126592-807daa2b565b?q=80&w=1470&auto=format&fit=crop",
      btnColor: "bg-pink-500"
    },
    {
      id: 3,
      title: "Play & Learn Together",
      subtitle: "Safe & Non-Toxic Toys",
      description: "Kheladhular maddhome baccahr medha bikash hok nirapode.",
      bg: "bg-yellow-50",
      img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1470&auto=format&fit=crop",
      btnColor: "bg-yellow-500"
    }
  ];

  return (
    <div className="w-full h-[500px] lg:h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect={'fade'}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`flex flex-col lg:flex-row items-center justify-between h-full px-10 lg:px-24 ${slide.bg}`}>
              
              {/* Text Area */}
              <div className="flex-1 text-center lg:text-left z-10">
                <span className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-2 block">
                  {slide.subtitle}
                </span>
                <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-800 mb-4">
                  {slide.title}
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto lg:mx-0">
                  {slide.description}
                </p>
                <button className={`px-10 py-4 ${slide.btnColor} text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform`}>
                  Shop Now
                </button>
              </div>

              {/* Image Area */}
              <div className="flex-1 flex justify-center mt-8 lg:mt-0">
                <div className="relative">
                  <div className="absolute -inset-4 bg-white/50 rounded-full blur-2xl"></div>
                  <img 
                    src={slide.img} 
                    alt={slide.title} 
                    className="w-64 h-64 lg:w-[450px] lg:h-[450px] object-cover rounded-full border-[12px] border-white shadow-2xl relative z-10"
                  />
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Swiper Buttons */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: #4b5563 !important;
          background: rgba(255, 255, 255, 0.8);
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet-active {
          background: #ec4899 !important;
          width: 25px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </div>
  );
};

export default Hero;