"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <>
      {/* === KONTEN UTAMA - REDESIGNED === */}
      <section className="relative max-w-7xl mx-auto py-20 sm:py-28 md:py-32 px-6 sm:px-8 lg:px-12">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-[#9b133b]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#f2b705]/5 rounded-full blur-3xl"></div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* KIRI - LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9b133b]/20 to-[#f2b705]/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700"></div>

              {/* Rotating Border Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, #9b133b 50%, #f2b705 100%, transparent 100%)",
                  opacity: 0.15,
                }}
              ></motion.div>

              {/* Logo Container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-8 shadow-2xl border-4 border-white">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src="/asset/konten1.png"
                    alt="Logo Creanomic"
                    width={450}
                    height={450}
                    className="object-contain drop-shadow-2xl ml-10"
                  />
                </motion.div>
              </div>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#f2b705] to-[#a67c00] rounded-full opacity-20 blur-xl"
              ></motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#9b133b] to-[#6a0c23] rounded-full opacity-20 blur-xl"
              ></motion.div>
            </div>
          </motion.div>

          {/* KANAN - TEKS */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9b133b] to-[#6a0c23] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                About Us
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Tentang{" "}
              <span className="bg-gradient-to-r from-[#9b133b] to-[#6a0c23] bg-clip-text text-transparent">
                CREANOMIC
              </span>
            </motion.h3>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-to-r from-[#f2b705] to-transparent mb-8"
            ></motion.div>

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-white/90 to-amber-50/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-l-4 border-[#f2b705]">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#f2b705] to-[#a67c00] rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-gray-700 leading-relaxed text-justify text-base sm:text-lg relative z-10">
                  CREANOMIC (Creative Economy Innovation Centre) 2025 hadir sebagai wadah bagi pemuda 
                  untuk mengasah kemampuan mereka melalui berbagai kompetisi dan kegiatan interaktif. CREANOMIC 2025 tidak hanya sekadar kompetisi, tetapi
                   juga menjadi platform edukatif dan networking yang menghadirkan pembicara inspiratif, 
                  stand pameran industri dan UMKM, serta sesi promosi organisasi mahasiswa. 
                </p>

                {/* Decorative Corner */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-tl from-[#f2b705]/10 to-transparent rounded-tl-full"></div>
              </div>

              {/* Floating Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#f2b705]/20 transform translate-x-2 translate-y-2 -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* === VISI & MISI - SIMPLIFIED === */}
      <section className="relative max-w-7xl mx-auto py-20 sm:py-24 px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2b0912] mb-4">
            Our Vision & Mission
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#6a0c23] to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* VISI */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative h-full"
          >
            <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-[#6a0c23]/20 p-8 sm:p-10 flex flex-col">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6a0c23]/5 via-transparent to-[#f2b705]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <motion.div
                className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#6a0c23] to-[#9b133b] rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
                whileHover={{ rotate: 10 }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.div>

              {/* Content */}
              <div className="relative z-10 text-center flex-grow flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#6a0c23] mb-4">
                  VISI
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#6a0c23] to-[#f2b705] mx-auto mb-6"></div>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg flex-grow">
                  Menjadikan CREANOMIC 2025 sebagai platform inovatif yang
                  menginspirasi dan memberikan pengalaman terbaik bagi pemuda dalam
                  bidang ekonomi kreatif, teknologi, dan seni melalui kompetisi,
                  edukasi, dan networking.
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6a0c23]/5 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#f2b705]/5 to-transparent rounded-tr-full"></div>
            </div>
          </motion.div>

          {/* MISI */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative h-full"
          >
            <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-[#6a0c23]/20 p-8 sm:p-10 flex flex-col">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f2b705]/5 via-transparent to-[#6a0c23]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <motion.div
                className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#f2b705] to-[#a67c00] rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
                whileHover={{ rotate: -10 }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </motion.div>

              {/* Content */}
              <div className="relative z-10 text-center flex-grow flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#6a0c23] mb-4">
                  MISI
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#f2b705] to-[#6a0c23] mx-auto mb-6"></div>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg flex-grow">
                  Menyediakan platform kompetitif di bidang bisnis, teknologi, dan
                  seni. Mendorong kolaborasi dan networking antara peserta,
                  akademisi, dan industri. Menginspirasi generasi muda melalui
                  pemateri dan seminar berkualitas. Mendukung pertumbuhan ekonomi
                  kreatif melalui exhibition dan UMKM. Meningkatkan kualitas dan
                  profesionalisme acara dengan standar tinggi.
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#f2b705]/5 to-transparent rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#6a0c23]/5 to-transparent rounded-tl-full"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}