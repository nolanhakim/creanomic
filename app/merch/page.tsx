"use client";

import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function MarchSection() {
  const merchItems = [
   {
      id: 1,
      name: "Gantungan Kunci",
      category: "Accessories",
      price: "Rp 10.000",
      priceNote: "per pcs",
      image: "/merch/merch1.png",
      description: "Gantungan kunci eksklusif creon maskot yang stylish dan tahan lama"
    },
    {
      id: 2,
      name: "Bando",
      category: "Accessories",
      price: "Rp ??.???",
      priceNote: "per pcs",
      image: "/merch/merch2.png",
      description: "Bando cantik dengan desain CREANOMIC yang nyaman dipakai "
    },
    {
      id: 3,
      name: "Pin",
      category: "Accessories",
      price: "Rp 9.000",
      priceNote: "per pcs",
      image: "/merch/merch3.png",
      description: "Pin enamel berkualitas tinggi dengan desain logo CREANOMIC"
    },
    {
      id: 4,
      name: "Sticker",
      category: "Accessories",
      price: "Rp 5.000",
      priceNote: "per pcs",
      image: "/merch/merch4.png",
      description: "Sticker  creon maskot dari CREANOMIC dengan kualitas premium "
    }
  ];



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

      {/* === MERCHANDISE SECTION === */}
      <div className="relative z-10 py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#5F1124]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>

        {/* Section Header */}
        <div className="relative max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
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
                Now Available
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
                OUR MERCHANDISE
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
              className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-700 leading-relaxed"
            >
              Koleksi merchandise eksklusif CREANOMIC dengan desain unik dan kualitas premium
            </motion.p>
          </motion.div>
        </div>

        {/* Merchandise Grid */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {merchItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#5F1124]/5 to-amber-500/5">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#5F1124]">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2C1810] mb-2 group-hover:text-[#5F1124] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-col gap-3">
                      <div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-[#5F1124] to-[#8B1538] bg-clip-text text-transparent">
                          {item.price}
                        </span>
                        <span className="text-sm text-gray-500 ml-2">
                          {item.priceNote}
                        </span>
                      </div>
                      <button 
                        onClick={() => window.open(`https://wa.me/62895422854189?text=Halo, saya tertarik dengan ${item.name}`, '_blank')}
                        className="w-full bg-gradient-to-r from-[#5F1124] to-[#8B1538] text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Order via WhatsApp
                      </button>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#5F1124]/5 to-transparent rounded-bl-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>

      {/* === FOOTER === */}
      <Footer />
    </section>
  );
}