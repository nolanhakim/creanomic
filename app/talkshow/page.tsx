"use client";

import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function TalkshowSection() {
  const talkshowImages = [
    "/talkshow/coming1.png",
    "/talkshow/coming1.png",
    "/talkshow/coming1.png",
    "/talkshow/coming1.png",
    "/talkshow/coming1.png",
    "/talkshow/coming1.png",
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#FFF9F5] text-[#2C1810] overflow-hidden">
      {/* === NAVBAR === */}
      <Navbar />

      {/* === GAMBAR CREA1 DI BAWAH NAVBAR === */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-full overflow-hidden"
      >
        <Image
          src="/asset/crea1.png"
          alt="ornamen bawah navbar"
          width={1920}
          height={400}
          className="w-full object-cover"
          priority
        />
      </motion.div>

      {/* === KONTEN TALKSHOW - REDESIGNED === */}
      <div className="relative z-10 py-16 sm:py-20 md:py-28 px-6 md:px-16 lg:px-24">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#5F1124]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>

        {/* Header Section */}
        <div className="relative text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5F1124] to-[#8B1538] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Featured Event
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-[#5F1124] to-[#8B1538] bg-clip-text text-transparent">
              CREANOMIC
            </span>
            <br />
            <span className="text-[#2C1810]">TALKSHOW</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#5F1124] to-transparent mx-auto"
          ></motion.div>
        </div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl border border-[#5F1124]/10">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-[#5F1124] to-[#8B1538] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">
                CREANOMIC Talkshow merupakan acara inspiratif yang menghadirkan para
                kreator, desainer, dan pelaku industri digital untuk berbagi
                pengalaman dalam dunia kreatif modern.
              </p>
              <p className="text-base sm:text-lg">
                Melalui diskusi terbuka, peserta dapat belajar mengenai proses
                membangun branding, strategi desain, serta bagaimana kolaborasi
                kreatif dapat memperluas peluang karier di era digital.
              </p>
              <p className="text-base sm:text-lg">
                Talkshow ini juga menjadi ruang untuk berjejaring, bertukar ide, dan
                menyalakan kembali semangat berkarya bersama komunitas kreatif.
              </p>
            </div>

            {/* Decorative Corner */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-[#5F1124]/10 to-amber-500/10 rounded-full blur-2xl"></div>
          </div>
        </motion.div>

        {/* Gallery Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-[#5F1124] mb-3">
            Event Gallery
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Momen-momen inspiratif dari CREANOMIC Talkshow
          </p>
        </motion.div>

        {/* Gallery Grid - Masonry Style */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {talkshowImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5F1124]/80 via-[#5F1124]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={src}
                      alt={`Foto talkshow ${index + 1}`}
                      width={500}
                      height={350}
                      className="object-cover w-full h-72 sm:h-80 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div className="text-white">
                        <p className="font-semibold text-sm">Moment #{index + 1}</p>
                        <p className="text-xs opacity-90">CREANOMIC Talkshow</p>
                      </div>
                    </div>
                  </div>

                  {/* Border Animation */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-500"></div>
                </div>

                {/* Index Number - Floating */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#5F1124] to-[#8B1538] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-20">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-2 text-[#5F1124] font-medium">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#5F1124]"></div>
            <span className="text-sm">Stay tuned for our next event</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#5F1124]"></div>
          </div>
        </motion.div>
      </div>

      {/* === FOOTER === */}
      <Footer />
    </section>
  );
}