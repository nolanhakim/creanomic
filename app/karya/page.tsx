"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");

  const karyaList = [
    { id: 1, src: "/karya/whos.png", alt: "Karya 1", category: "webdev" },
    { id: 2, src: "/karya/whos.png", alt: "Karya 2", category: "business" },
    { id: 3, src: "/karya/whos.png", alt: "Karya 3", category: "financial" },
    { id: 4, src: "/karya/whos.png", alt: "Karya 4", category: "lkti" },
    { id: 5, src: "/karya/whos.png", alt: "Karya 5", category: "poster" },
    { id: 6, src: "/karya/whos.png", alt: "Karya 6", category: "webdev" },
    { id: 7, src: "/karya/whos.png", alt: "Karya 7", category: "business" },
    { id: 8, src: "/karya/whos.png", alt: "Karya 8", category: "financial" },
    { id: 9, src: "/karya/whos.png", alt: "Karya 9", category: "lkti" },
    { id: 10, src: "/karya/whos.png", alt: "Karya 10", category: "poster" },
    { id: 11, src: "/karya/whos.png", alt: "Karya 11", category: "webdev" },
    { id: 12, src: "/karya/whos.png", alt: "Karya 12", category: "business" },
    { id: 13, src: "/karya/whos.png", alt: "Karya 13", category: "financial" },
    { id: 14, src: "/karya/whos.png", alt: "Karya 14", category: "lkti" },
    { id: 15, src: "/karya/whos.png", alt: "Karya 15", category: "poster" },
  ];

  const categories = [
    { id: "all", label: "All Winners" },
    { id: "webdev", label: "Web Development" },
    { id: "business", label: "Business Case" },
    { id: "financial", label: "Financial Planner" },
    { id: "lkti", label: "LKTI" },
    { id: "poster", label: "Creative Poster" },
  ];

  // Gunakan useMemo untuk menghindari re-filter berulang
  const filteredKarya = useMemo(() => {
    return filter === "all" 
      ? karyaList 
      : karyaList.filter(karya => karya.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* === NAVBAR === */}
      <Navbar />

      {/* === GAMBAR CREA1 DI BAWAH NAVBAR === */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative w-full overflow-hidden"
      >
        <Image
          src="/asset/crea1.png"
          alt="ornamen bawah navbar"
          width={1920}
          height={400}
          className="w-full object-cover"
          priority
          quality={85}
        />
      </motion.div>

      {/* === HEADER SECTION === */}
      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 py-16 sm:py-20 md:py-28 overflow-hidden">
        {/* === BACKGROUND DECORATION === */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E9AC37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E9AC37]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* === JUDUL SECTION === */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center items-center mb-12 sm:mb-16 text-center"
          >
            <div className="inline-block mb-4">
              <span className="text-sm sm:text-base font-semibold text-[#E9AC37] tracking-widest uppercase">
                Our Winners
              </span>
            </div>
            <h2
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-[#E9AC37] px-4 leading-tight"
              style={{
                textShadow:
                  "2px 2px 8px rgba(0, 0, 0, 0.15), 4px 4px 16px rgba(233, 172, 55, 0.1)",
              }}
            >
              PENAMPILAN KARYA
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#E9AC37] to-transparent mt-6" />
          </motion.div>

          {/* === FILTER BUTTONS === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  filter === category.id
                    ? "bg-[#E9AC37] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-[#E9AC37]/20"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* === GRID KARYA === */}
      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            layout
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6 md:gap-8"
          >
            {filteredKarya.map((karya, index) => (
              <motion.div
                key={karya.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.03,
                  layout: { duration: 0.3 }
                }}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden will-change-transform"
              >
                {/* === CARD CONTAINER === */}
                <div className="relative h-48 xs:h-52 sm:h-60 md:h-72 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E9AC37]/20 hover:border-[#E9AC37]">
                  {/* === IMAGE === */}
                  <Image
                    src={karya.src}
                    alt={karya.alt}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading={index < 6 ? "eager" : "lazy"}
                    quality={80}
                  />

                  {/* === OVERLAY GRADIENT === */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* === HOVER CONTENT === */}
                  <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-white">
                      <p className="text-sm sm:text-base font-semibold">{karya.alt}</p>
                      <p className="text-xs sm:text-sm text-gray-200 mt-1">Our Winners</p>
                    </div>
                  </div>

                  {/* === CORNER ACCENT === */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#E9AC37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* === BOTTOM ACCENT === */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#E9AC37] to-transparent transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* === NO RESULTS === */}
          {filteredKarya.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-500">No winners found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* === BACK TO HOME BUTTON === */}
      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#E9AC37] to-[#D49A2E] text-white font-bold text-sm sm:text-base rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  Back to Home
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D49A2E] to-[#E9AC37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* === FOOTER === */}
      <Footer />
    </div>
  );
}