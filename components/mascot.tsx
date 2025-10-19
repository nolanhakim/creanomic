"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MeetOurMascot() {
  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-5 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-[#E9AC37] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-5 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-[#E9AC37] opacity-5 rounded-full blur-3xl"></div>

      {/* ===== Judul dengan Bayangan Lebih Kuat ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-[#E9AC37] mb-6 sm:mb-8 md:mb-10 z-10 text-center px-4"
        style={{
          textShadow:
            "1px 1px 3px rgba(0, 0, 0, 0.5), 2px 2px 6px rgba(0, 0, 0, 0.3), 3px 3px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        MEET OUR MASCOT
      </motion.h2>

      {/* ===== Mascot ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-[220px] xs:max-w-[260px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] relative z-10"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          }}
          className="w-full h-auto"
        >
          <div className="relative">
            {/* Glow effect behind mascot */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E9AC37]/20 to-transparent rounded-full blur-2xl scale-110"></div>
            
            <Image
              src="/mascot/creon.png"
              alt="Mascot CREANOMIC 2025"
              width={400}
              height={400}
              className="object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)] sm:drop-shadow-[0_8px_12px_rgba(0,0,0,0.4)] w-full h-auto relative z-10"
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Mascot Name & Description - Enhanced Design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-8 sm:mt-10 md:mt-12 text-center z-10 px-4 w-full max-w-4xl"
      >
        {/* Decorative line before name */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent to-[#E9AC37]"
          ></motion.div>
          <div className="w-2 h-2 bg-[#E9AC37] rounded-full"></div>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-l from-transparent to-[#E9AC37]"
          ></motion.div>
        </div>

        {/* Name with gradient background */}
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-block relative mb-6 sm:mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#E9AC37]/10 via-[#E9AC37]/20 to-[#E9AC37]/10 blur-xl"></div>
          <h3 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#E9AC37] px-6 sm:px-8 py-2 sm:py-3"
            style={{
              textShadow: "2px 2px 4px rgba(233, 172, 55, 0.3), 0 0 20px rgba(233, 172, 55, 0.2)"
            }}
          >
            CREON
          </h3>
        </motion.div>

        {/* Description card with glassmorphism effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#E9AC37]/20"
        >
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-12 sm:w-16 h-12 sm:h-16 border-t-2 border-l-2 border-[#E9AC37]/30 rounded-tl-2xl sm:rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-12 sm:w-16 h-12 sm:h-16 border-b-2 border-r-2 border-[#E9AC37]/30 rounded-br-2xl sm:rounded-br-3xl"></div>

          {/* Quote icon */}
          <div className="flex justify-center mb-4">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#E9AC37]/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
            </svg>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
            Creon adalah maskot resmi{" "}
            <span className="font-extrabold text-[#E9AC37] relative inline-block">
              CREANOMIC 2025
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#E9AC37]/30"></span>
            </span>
            , simbol kreativitas dan inovasi yang menginspirasi setiap langkah perjalanan kita. 
            Dengan semangat yang penuh energi dan visi yang cerah, Creon hadir untuk menemani 
            dan memotivasi seluruh peserta dalam mengeksplorasi dunia kreatif yang tak terbatas!
          </p>

          {/* Decorative sparkles */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-[#E9AC37] rounded-full animate-pulse"></div>
          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-[#E9AC37] rounded-full animate-pulse delay-75"></div>
          <div className="absolute top-1/3 right-8 w-1 h-1 bg-[#E9AC37] rounded-full animate-pulse delay-150"></div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center gap-2 mt-6 sm:mt-8"
        >
          <div className="w-1.5 h-1.5 bg-[#E9AC37] rounded-full"></div>
          <div className="w-2 h-2 bg-[#E9AC37] rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-[#E9AC37] rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}