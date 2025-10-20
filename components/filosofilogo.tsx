"use client";

import { useState } from "react";
import Image from "next/image";

export default function FilosofiLogo() {
  const slides = [
    {
      img: "/logo/logo1.png",
      title: "Lingkaran Emas",
      subtitle: "CREANOMIC 2025",
      text: "Titik bulat pada huruf C melambangkan tujuan bersama untuk mewujudkan karya inovatif yang bermanfaat, sedangkan warna emas menyimbolkan prestasi, harapan, dan pencapaian.",
    },
    {
      img: "/logo/logo2.png",
      title: "Huruf C dengan 5 helai",
      subtitle: "CREANOMIC 2025",
      text: "Bentuk huruf C pada logo terdiri dari lima helai yang melambangkan lima Program Studi Vokasi Universitas Brawijaya, di mana setiap helai merepresentasikan keragaman ilmu yang saling melengkapi, namun tetap menyatu dalam satu lingkaran kebersamaan.",
    },
    {
      img: "/logo/logo3.png",
      title: "Tipografi Logo CREANOMIC.",
      subtitle: "CREANOMIC 2025",
      text: "Font yang digunakan pada logo CREANOMIC 2025 mencerminkan kesan modern, ramah, dan inklusif. Bentuk rounded melambangkan keterbukaan dan kreativitas, sementara tampilannya yang sederhana namun profesional merepresentasikan inovasi, kolaborasi, dan visi masa depan.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (direction: "next" | "prev") => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrent((prev) => {
        if (direction === "next") {
          return prev === slides.length - 1 ? 0 : prev + 1;
        } else {
          return prev === 0 ? slides.length - 1 : prev - 1;
        }
      });
      setIsAnimating(false);
    }, 400);
  };

  const { img, title, subtitle, text } = slides[current];

  return (
    <section className="relative bg-gradient-to-br bg-white py-12 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#a67c00] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-[#9b133b] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header dengan indicator */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-[#9b133b]/10 to-[#a67c00]/10 rounded-full mb-3 sm:mb-4">
            <span className="text-[#9b133b] font-semibold text-xs sm:text-sm tracking-wider">
              FILOSOFI & MAKNA
            </span>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrent(idx);
                      setIsAnimating(false);
                    }, 300);
                  }
                }}
                className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                  idx === current
                    ? "w-8 sm:w-12 bg-gradient-to-r from-[#9b133b] to-[#a67c00]"
                    : "w-6 sm:w-8 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          {/* === KIRI: GAMBAR LOGO === */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center group">
            {/* Navigation buttons with modern style */}
            <button
              onClick={() => changeSlide("prev")}
              className="absolute left-0 sm:left-2 z-10 bg-white text-[#9b133b] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg border-2 border-[#9b133b]/20 hover:bg-[#9b133b] hover:text-white hover:scale-110 transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image container with enhanced styling */}
            <div
              key={current}
              className={`relative transition-all duration-500 ease-out transform ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#a67c00]/20 to-[#9b133b]/20 rounded-xl sm:rounded-2xl blur-xl sm:blur-2xl transform scale-105"></div>
              <div className="relative">
                <Image
                  src={img}
                  alt={title}
                  width={450}
                  height={450}
                  className="object-contain w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[450px] mx-auto"
                />
              </div>
            </div>

            <button
              onClick={() => changeSlide("next")}
              className="absolute right-0 sm:right-2 z-10 bg-white text-[#9b133b] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg border-2 border-[#9b133b]/20 hover:bg-[#9b133b] hover:text-white hover:scale-110 transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* === KANAN: TEKS === */}
          <div
            key={current + "-text"}
            className={`w-full lg:w-1/2 text-left transition-all duration-500 ease-out ${
              isAnimating ? "opacity-0 translate-x-8" : "opacity-100 translate-x-0"
            }`}
          >
            <div className="space-y-4 sm:space-y-6">
              {/* Accent line */}
              <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-[#a67c00] to-[#9b133b] rounded-full"></div>
              
              <div>
                <h2 className="text-[#a67c00] text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 tracking-tight">
                  {title}
                </h2>
                <h3 className="text-[#9b133b] text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 tracking-wide">
                  {subtitle}
                </h3>
              </div>
              
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed font-light">
                {text}
              </p>

              {/* Counter */}
              <div className="pt-4 sm:pt-6 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
                <span className="font-semibold text-[#9b133b]">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <div className="w-8 sm:w-12 h-0.5 bg-gray-300"></div>
                <span className="font-light">
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}