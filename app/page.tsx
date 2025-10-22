"use client";

import Navbar from "@/components/navbar";
import Visimisi from "@/components/visimisi";
import FilosofiLogo from "@/components/filosofilogo";
import Mascot from "@/components/mascot";
import Kilasbalik from "@/components/kilasbalik";
import Sponsor from "@/components/sponsor";
import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#2b0912] relative overflow-hidden">
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

        {/* === VISI MISI ABOUT US === */}
      <Visimisi />


      {/* === PEMBATAS AWAN === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden -mt-12"
      >
        <Image
          src="/asset/awan-divider.png"
          alt="pembatas awan"
          width={1920}
          height={450}
          className="w-full h-auto object-cover scale-125"
        />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white"></div>
      </motion.div>

      {/* === FILOSOFI === */}
      <FilosofiLogo />

      {/* === Mascot === */}
      <Mascot />

      
      {/* === PEMBATAS AWAN === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden -mt-12"
      >
        <Image
          src="/asset/awan-divider.png"
          alt="pembatas awan"
          width={1920}
          height={450}
          className="w-full h-auto object-cover scale-125"
        />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white"></div>
      </motion.div>

      {/* === kilasbalik === */}
      <Kilasbalik />

  

      {/* === SPONSOR === */}
      <Sponsor />
      
      <br />
      <br />
      {/* === FOOTER === */}
      <Footer />
    </main>
  );
}