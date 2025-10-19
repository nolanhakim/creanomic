"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PenampilanKarya() {
  const karyaList = [
    { id: 1, src: "/karya/whos.png", alt: "Karya 1" },
    { id: 2, src: "/karya/whos.png", alt: "Karya 2" },
    { id: 3, src: "/karya/whos.png", alt: "Karya 3" },
    { id: 4, src: "/karya/whos.png", alt: "Karya 4" },
    { id: 5, src: "/karya/whos.png", alt: "Karya 5" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* === BACKGROUND DECORATION === */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E9AC37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E9AC37]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* === JUDUL SECTION === */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center mb-12 sm:mb-16 md:mb-20 text-center"
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

        {/* === GRID KARYA === */}
        <div className="grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6 md:gap-8">
          {karyaList.map((karya, index) => (
            <motion.div
              key={karya.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden ${
                index >= 3 ? "hidden lg:block" : ""
              }`}
            >
              {/* === CARD CONTAINER === */}
              <div className="relative h-48 xs:h-52 sm:h-60 md:h-72 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E9AC37]/20 hover:border-[#E9AC37] group">
                {/* === IMAGE === */}
                <Image
                  src={karya.src}
                  alt={karya.alt}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out"
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
        </div>

        {/* === VIEW MORE BUTTON === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 sm:mt-16"
        >
          <Link href="/karya">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#E9AC37] to-[#D49A2E] text-white font-bold text-sm sm:text-base rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View More Winners
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D49A2E] to-[#E9AC37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}