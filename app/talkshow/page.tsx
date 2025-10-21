"use client";

import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function TalkshowSection() {
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

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-3xl p-12 sm:p-16 md:p-20 shadow-2xl border border-[#5F1124]/10 overflow-hidden">
            {/* Decorative Background Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#5F1124]/10 to-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#5F1124]/5 to-transparent rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#5F1124] to-[#8B1538] rounded-full mb-8 shadow-xl"
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-[#5F1124] to-[#8B1538] bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto"
              >
                Galeri dokumentasi dari CREANOMIC Talkshow akan segera hadir.
                Nantikan momen-momen inspiratif dan insight menarik dari para pembicara kami!
              </motion.p>

              {/* Animated Dots */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                  className="w-3 h-3 bg-[#5F1124] rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  className="w-3 h-3 bg-[#5F1124] rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  className="w-3 h-3 bg-[#5F1124] rounded-full"
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

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