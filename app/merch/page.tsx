"use client";

import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function MarchSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FFF9F5] text-[#2C1810]">
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

      {/* === COMING SOON SECTION === */}
      <div className="relative z-10 py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#5F1124]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>

        {/* Coming Soon Container */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #5F1124 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10 py-20 sm:py-28 px-6 sm:px-12 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block mb-6"
              >
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5F1124] to-[#8B1538] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Stay Tuned
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-[#5F1124] to-[#8B1538] bg-clip-text text-transparent">
                  COMING SOON
                </span>
              </motion.h2>

              {/* Decorative Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-32 h-1 bg-gradient-to-r from-transparent via-[#5F1124] to-transparent mx-auto mb-8"
              ></motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-700 leading-relaxed mb-12"
              >
                Merchandise eksklusif CREANOMIC sedang dalam persiapan! 
                Koleksi istimewa dengan desain unik akan segera hadir untuk kamu.
              </motion.p>

              {/* Icon Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12"
              >
                {/* T-Shirt Icon */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5F1124]/10 to-[#8B1538]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#5F1124]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">T-Shirts</span>
                </div>

                {/* Hoodie Icon */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5F1124]/10 to-[#8B1538]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#5F1124]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">Hoodies</span>
                </div>

                {/* Accessories Icon */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5F1124]/10 to-[#8B1538]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#5F1124]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">Accessories</span>
                </div>
              </motion.div>

              {/* Bottom Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                viewport={{ once: true }}
                className="inline-flex flex-col items-center gap-4"
              >
                <div className="inline-flex items-center gap-2 text-[#5F1124] font-medium">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#5F1124]"></div>
                  <span className="text-sm">Exclusive Launch Coming Soon</span>
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#5F1124]"></div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#5F1124]/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>

      {/* === FOOTER === */}
      <Footer />
    </section>
  );
}