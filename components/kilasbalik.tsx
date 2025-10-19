"use client";

import Image from "next/image";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function KilasBalik() {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "center", 
      containScroll: "trimSnaps",
      skipSnaps: false,
      dragFree: false
    },
    [autoplay.current]
  );

  const kegiatan = [
    "/kegiatan/kegiatan1.jpg",
    "/kegiatan/kegiatan2.jpg",
    "/kegiatan/kegiatan11.jpg",
    "/kegiatan/kegiatan4.jpg",
    "/kegiatan/kegiatan5.jpg",
    "/kegiatan/kegiatan6.jpg",
    "/kegiatan/kegiatan7.jpg",
    "/kegiatan/kegiatan8.jpg",
    "/kegiatan/kegiatan9.jpg",
    "/kegiatan/kegiatan10.jpg",
    
  ];

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* === BACKGROUND DECORATION === */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#E9AC37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#E9AC37]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 px-4 sm:px-6">
        {/* === JUDUL SECTION === */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-10 sm:mb-14 md:mb-16 lg:mb-20 text-center"
        >
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm md:text-base font-semibold text-[#E9AC37] tracking-widest uppercase">
              Event Highlights
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-wider text-[#E9AC37] leading-tight px-4"
            style={{
              textShadow:
                "2px 2px 8px rgba(0, 0, 0, 0.15), 4px 4px 16px rgba(233, 172, 55, 0.1)",
            }}
          >
            KILAS BALIK
          </h2>
          <p
            className="mt-3 sm:mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#660F24] tracking-wide px-4"
            style={{
              textShadow: "1px 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            CREANOMIC 2024
          </p>
          <div className="h-0.5 sm:h-1 w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#E9AC37] to-transparent mt-6 sm:mt-8" />
        </motion.div>

        {/* === CAROUSEL CONTAINER === */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="relative w-full">
            {/* === CAROUSEL === */}
            <div className="w-full overflow-hidden" ref={emblaRef}>
              <div className="flex w-full gap-0">
                {[...kegiatan, ...kegiatan].map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex-[0_0_100%] min-[400px]:flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_55%] lg:flex-[0_0_42%] xl:flex-[0_0_38%] px-2 sm:px-3"
                  >
                    <div className="group relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                      {/* === IMAGE CONTAINER === */}
                      <div className="relative h-48 min-[400px]:h-56 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-[#E9AC37]/20 group-hover:border-[#E9AC37] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden">
                        <Image
                          src={src}
                          alt={`Kegiatan ${i + 1}`}
                          width={600}
                          height={400}
                          unoptimized
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                        />

                        {/* === OVERLAY GRADIENT === */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* === HOVER CONTENT === */}
                        <div className="absolute inset-0 flex items-end justify-start p-3 sm:p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="text-white">
                            <p className="text-sm sm:text-base md:text-lg font-bold">CREANOMIC 2024</p>
                            <p className="text-xs sm:text-sm text-gray-200 mt-0.5 sm:mt-1">Event Moment</p>
                          </div>
                        </div>

                        {/* === CORNER ACCENT === */}
                        <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-bl from-[#E9AC37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* === BOTTOM ACCENT === */}
                      <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-1 sm:h-1.5 bg-gradient-to-r from-[#E9AC37] via-[#f5c14a] to-transparent transition-all duration-500 rounded-full" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* === NAVIGATION BUTTONS === */}
            <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => emblaApi?.scrollPrev()}
                className="p-2 sm:p-2.5 md:p-3 rounded-full bg-gradient-to-r from-[#E9AC37]/20 to-[#E9AC37]/10 hover:from-[#E9AC37]/40 hover:to-[#E9AC37]/30 border border-[#E9AC37]/30 hover:border-[#E9AC37] transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#E9AC37]" />
              </motion.button>

              <div className="flex gap-1.5 sm:gap-2">
                {kegiatan.map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#E9AC37]/30 hover:bg-[#E9AC37] cursor-pointer transition-all duration-300"
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => emblaApi?.scrollNext()}
                className="p-2 sm:p-2.5 md:p-3 rounded-full bg-gradient-to-r from-[#E9AC37]/20 to-[#E9AC37]/10 hover:from-[#E9AC37]/40 hover:to-[#E9AC37]/30 border border-[#E9AC37]/30 hover:border-[#E9AC37] transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#E9AC37]" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}