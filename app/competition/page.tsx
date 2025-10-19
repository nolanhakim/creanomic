"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function LombaSection() {
  const lombaList = [
    {
      id: 1,
      img: "/lomba/lomba1.png",
      title: "Web Development",
      desc: "Lomba yang menantang peserta untuk membangun website inovatif dengan desain dan fungsi menarik.",
    },
    {
      id: 2,
      img: "/lomba/lomba2.png",
      title: "Financial Planner",
      desc: "Kompetisi yang menguji kemampuan perencanaan keuangan dalam menghadapi tantangan ekonomi modern.",
    },
    {
      id: 3,
      img: "/lomba/lomba3.png",
      title: "Business Case",
      desc: "Peserta menganalisis dan memecahkan studi kasus bisnis nyata untuk memberikan solusi strategis.",
    },
    {
      id: 4,
      img: "/lomba/lomba4.png",
      title: "LKTI",
      desc: "Lomba Karya Tulis Ilmiah yang mendorong inovasi dan riset untuk memberikan kontribusi nyata bagi masyarakat.",
    },
    {
      id: 5,
      img: "/lomba/lomba5.png",
      title: "Creative Poster",
      desc: "Lomba desain poster kreatif yang menggabungkan pesan visual, estetika, dan daya tarik komunikasi.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen overflow-hidden">
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

      {/* === SECTION BIDANG DAN TANGKAI LOMBA === */}
      <section className="relative py-16 px-6 md:px-20 text-center">
        {/* === JUDUL === */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-extrabold text-[#5F1124] mb-2"
        >
          BIDANG DAN TANGKAI LOMBA
        </motion.h2>

        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          Berikut adalah Bidang dan Tangkai Lomba yang dikompetisikan
          dalam gelaran CREANOMIC Tahun 2025.
        </p>

        {/* === GAMBAR LABEL LOMBA (SATU GAMBAR) === */}
        <div className="flex justify-center mb-12">
          <Image
            src="/asset/lomba.png"
            alt="Label Bidang dan Tangkai Lomba"
            width={850}
            height={200}
            className="object-contain drop-shadow-[0_0_12px_rgba(95,17,36,0.4)]"
          />
        </div>

        {/* === GRID LOMBA - REDESIGNED === */}
        <div className="relative max-w-7xl mx-auto">
          {/* Decorative Background Elements */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#5F1124]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>


          <div className="relative space-y-12">
            {/* Baris 1 - 3 kotak */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {lombaList.slice(0, 3).map((item, i) => (
                <motion.div
                  key={item.id}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="relative bg-white rounded-3xl p-8 h-full border-2 border-[#5F1124]/10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5F1124]/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center h-full">
                      {/* Icon Container with Animation */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="relative mb-6"
                      >
                        {/* Glow Effect Behind Icon */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5F1124]/20 to-amber-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        
                        <div className="relative w-32 h-32 flex items-center justify-center">
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={120}
                            height={120}
                            className="object-contain drop-shadow-lg"
                          />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#5F1124] mb-3 group-hover:text-[#8B1538] transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Divider */}
                      <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#5F1124]/50 to-transparent mb-4"></div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        {item.desc}
                      </p>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#5F1124]/5 to-transparent rounded-tl-full"></div>
                  </div>

                  {/* Floating Border Effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-[#5F1124]/20 transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>

            {/* Connector Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[#5F1124]/30 to-transparent"
            ></motion.div>

            {/* Baris 2 - 2 kotak */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
              {lombaList.slice(3).map((item, i) => (
                <motion.div
                  key={item.id}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="relative bg-white rounded-3xl p-8 h-full border-2 border-[#5F1124]/10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5F1124]/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center h-full">
                      {/* Icon Container with Animation */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="relative mb-6"
                      >
                        {/* Glow Effect Behind Icon */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5F1124]/20 to-amber-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        
                        <div className="relative w-32 h-32 flex items-center justify-center">
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={120}
                            height={120}
                            className="object-contain drop-shadow-lg"
                          />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#5F1124] mb-3 group-hover:text-[#8B1538] transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Divider */}
                      <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#5F1124]/50 to-transparent mb-4"></div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        {item.desc}
                      </p>

                      {/* Hover Arrow Indicator */}
                      <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <div className="inline-flex items-center gap-2 text-[#5F1124] text-sm font-medium">
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#5F1124]/5 to-transparent rounded-tl-full"></div>
                  </div>

                  {/* Floating Border Effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-[#5F1124]/20 transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
      </section>


      <br/>
      <br/>
      {/* === FOOTER === */}
      <Footer />
    </div>
    
  );
}