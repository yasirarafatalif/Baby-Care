"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Soft & Gentle Care",
      subtitle: "100% Organic Products",
      desc: "Apnar shishur komol torker jonno amader protyekti product prokritir nirmol upadan diye toiri.",
      bg: "bg-[#E0F2F1] dark:bg-slate-900", 
      img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
      accent: "bg-teal-500",
      textColor: "text-gray-800 dark:text-teal-100"
    },
    {
      id: 2,
      title: "Sweet Dreams Always",
      subtitle: "Pure Cotton Comfort",
      desc: "Naram o aramdayok poshake apnar baccahr ghum hok aro shanti-purno.",
      bg: "bg-[#FCE4EC] dark:bg-slate-900",
      img: "https://images.unsplash.com/photo-1544126592-807daa2b565b?auto=format&fit=crop&q=80&w=800",
      accent: "bg-pink-500",
      textColor: "text-gray-800 dark:text-pink-100"
    },
    {
      id: 3,
      title: "Playful Learning Toys",
      subtitle: "Eco-Friendly Materials",
      desc: "Baccahr medha bikash o binodon-er jonno amader non-toxic khelna gulo ekhon-i dekhun.",
      bg: "bg-[#FCE4EC] dark:bg-slate-900",
      img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800",
      accent: "bg-yellow-600",
      textColor: "text-gray-800 dark:text-yellow-100"
    },
    {
      id: 4,
      title: "Winter Essentials Kit",
      subtitle: "Extra Moisture Protection",
      desc: "Sheet-er shushko hawa theke apnar shishuke bachaite amader premium lotion o oil.",
      bg: "bg-[#FCE4EC] dark:bg-slate-900",
      img: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&q=80&w=800",
      accent: "bg-blue-500",
      textColor: "text-gray-800 dark:text-blue-100"
    }
  ];

  return (
    <div className="w-full h-screen max-h-[750px] overflow-hidden transition-colors duration-500">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect={'fade'}
        speed={1500}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // navigation={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className={`relative w-full h-full flex items-center justify-center px-6 lg:px-20 ${slide.bg}`}>
                
                {/* Background Decorative Shapes */}
                <motion.div 
                  animate={isActive ? { scale: [1, 1.3, 1], rotate: [0, 45, 0] } : {}}
                  transition={{ duration: 15, repeat: Infinity }}
                  className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 dark:bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                />

                <div className="container mx-auto grid lg:grid-cols-2 items-center gap-12 z-10">
                  
                  {/* Left: Text Content */}
                  <div className="order-2 lg:order-1 text-center lg:text-left">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <div key={slide.id}>
                          <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1 rounded-full bg-white/60 dark:bg-white/10 text-gray-600 dark:text-gray-300 font-medium text-sm mb-4 border border-white/40"
                          >
                            {slide.subtitle}
                          </motion.span>

                          <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className={`text-5xl lg:text-7xl font-bold leading-tight mb-6 ${slide.textColor}`}
                          >
                            {slide.title}
                          </motion.h1>

                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto lg:mx-0"
                          >
                            {slide.desc}
                          </motion.p>

                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                          >
                            <button className={`px-10 py-4 ${slide.accent} text-white rounded-full font-bold shadow-2xl hover:brightness-110 transition-all active:scale-95`}>
                              Shop Now
                            </button>
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right: Floating Image */}
                  <div className="order-1 lg:order-2 flex justify-center">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={slide.id}
                          initial={{ opacity: 0, scale: 0.7, rotate: 5 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ type: "spring", damping: 15, delay: 0.3 }}
                          className="relative"
                        >
                          {/* Image Blob Frame */}
                          <div className="w-64 h-64 lg:w-[480px] lg:h-[480px] rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] overflow-hidden border-[12px] border-white dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-800">
                            <img src={slide.img} alt="Baby Care" className="w-full h-full object-cover" />
                          </div>
                          
                          {/* Floating Badge */}
                          <motion.div 
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-white dark:bg-slate-700 p-4 rounded-2xl shadow-xl flex items-center gap-2"
                          >
                            <span className="text-2xl">🌱</span>
                            <div className="text-left">
                                <p className="text-[10px] text-gray-400 uppercase font-bold leading-none">Safe for</p>
                                <p className="text-xs font-bold dark:text-white">Newborns</p>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Global CSS for Navigation/Pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet { background: #94a3b8 !important; }
        .swiper-pagination-bullet-active { width: 35px !important; border-radius: 8px !important; background: #64748b !important; }
        .swiper-button-next:after, .swiper-button-prev:after { font-size: 18px !important; font-weight: bold; }
        .swiper-button-next, .swiper-button-prev { 
            background: white; 
            width: 50px !important; 
            height: 50px !important; 
            border-radius: 50%; 
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .dark .swiper-button-next, .dark .swiper-button-prev { background: #1e293b; color: white; }
      `}</style>
    </div>
  );
};

export default HeroSlider;