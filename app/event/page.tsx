"use client";

import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";

export default function EventPage() {
  const events = [
    {
      title: "EXHIBITION",
      desc: "Melalui rangkaian Exhibition yang inspiratif, kamu bakal diajak menyaksikan inovasi visual, karya interaktif, dan ide- ide segar hasil buah pikir anak muda penuh semangat kreasi! Ini bukan sekadar pameran, tapi ruang unjuk rasa kreativitas dan inovasi-dari Mahasiswa Fakultas Vokasi Universitas Brawijaya untuk masa depan yang lebih berdampak!",
      img: "/kegiatan/kegiatan7.png",
      img2: "/kegiatan/kegiatan8.png",
    },
    {
      title: "ENTERTAINMENT",
      desc: "Nikmati keseruan malam penuh energi lewat penampilan spesial dari band, musik akustik, dan pertunjukan hiburan lainnya yang siap bikin kamu go with the flow bareng teman-teman se-UB! Saatnya rayakan kreativitas dengan cara yang paling seru- dengan tawa, musik, dan momen yang nggak terlupakan! Jangan lupa ajak semua temanmu dan jadi bagian dari vibes luar biasa ini!",
      img: "/kegiatan/kegiatan2.png",
      img2: "/kegiatan/kegiatan10.png",
    },
    {
      title: "TALKSOW",
      desc: "Di rangkaian Creanomic juga ada Talkshow sebagai ruang diskusi interaktif bersama narasumber keren dan ahli di bidangnya yang akan membahas topik-topik menarik seputar bisnis, kreativitas, teknologi, dan dunia industri masa kini! Cocok banget buat kamu yang pengen upgrade wawasan, dapat motivasi baru, dan terinspirasi langsung dari para praktisi profesional yang udah terbukti sukses di bidangnya!",
      img: "/kegiatan/kegiatan5.png",
      img2: "/kegiatan/kegiatan12.png",
    },
    {
      title: "COMPETITION",
      desc: "Kompetisi ini bukan sekadar lomba, tapi panggung besar untuk mengasah ide, membangun relasi, dan jadi inspirasi!Apapun latar belakangmu, saatnya buktikan kemampuanmu di hadapan juri dan peserta se-Indonesia!",
      img: "/kegiatan/kegiatan9.png",
      img2: "/kegiatan/kegiatan13.png",
    },
  ];

  return (
    <main className="bg-white text-[#45171D] min-h-screen overflow-hidden">
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

      {/* === SECTION EVENT - REDESIGNED === */}
      <section
        id="event"
        className="relative w-full min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white text-[#45171D] py-16 sm:py-20 md:py-28"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 px-4"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#45171D] mb-4">
            Our Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c7933d] to-transparent mx-auto"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20 sm:space-y-28 md:space-y-32">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8 lg:gap-16`}
              >
                {/* Images Container */}
                <div className="relative w-full lg:w-1/2">
                  {/* Decorative Background Element */}
                  <div
                    className={`absolute -z-10 w-72 h-72 bg-gradient-to-br from-[#c7933d]/20 to-[#45171D]/10 rounded-full blur-3xl ${
                      index % 2 === 1 ? "-right-20" : "-left-20"
                    } top-1/2 -translate-y-1/2`}
                  ></div>

                  <div className="relative">
                    {/* Main Image */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#c7933d]/40 to-[#45171D]/40 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                        <Image
                          src={event.img}
                          alt={event.title}
                          width={600}
                          height={400}
                          className="w-full h-[280px] sm:h-[340px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </motion.div>

                    {/* Secondary Image - Floating */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute ${
                        index % 2 === 1 ? "-left-8 sm:-left-16" : "-right-8 sm:-right-16"
                      } -bottom-12 sm:-bottom-16 w-48 sm:w-64 group`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#45171D]/30 to-[#c7933d]/30 rounded-xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300"></div>
                      <div className="relative overflow-hidden rounded-xl shadow-xl border-3 border-white">
                        <Image
                          src={event.img2}
                          alt={`${event.title} 2`}
                          width={300}
                          height={200}
                          className="w-full h-[140px] sm:h-[180px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 mt-20 sm:mt-24 lg:mt-0"
                >
                  <div className="space-y-6">
                    {/* Badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block"
                    >
                      <span className="bg-gradient-to-r from-[#c7933d] to-[#b8822e] text-white font-bold px-6 py-2.5 rounded-full text-sm sm:text-base shadow-lg inline-flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        {event.title}
                      </span>
                    </motion.div>

                    {/* Description */}
                    <p className="text-base sm:text-lg leading-relaxed text-[#45171D]/80">
                      {event.desc}
                    </p>

                    {/* Decorative Line */}
                    <div className="flex items-center gap-4 pt-4">
                      <div className="w-16 h-0.5 bg-gradient-to-r from-[#c7933d] to-transparent"></div>
                      <span className="text-[#c7933d] text-sm font-medium">
                        Event #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Divider between events */}
              {index < events.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[#c7933d]/30 to-transparent mt-20 sm:mt-28"
                ></motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <br />
      <br />
      <br />
      {/* === FOOTER === */}
      <Footer />
    </main>
  );
}