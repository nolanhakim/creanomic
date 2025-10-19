"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Event", href: "/event" },
    { name: "Merchandise", href: "/merch" },
    { name: "Competition", href: "/competition" },
    { name: "Talkshow", href: "/talkshow" },
  ];

  return (
    <header className="relative bg-[#5d0b1d] text-white border-b-4 border-[#f0c36a] z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* === LOGO (opsional bisa ganti gambar/logo text) === */}
        <Link href="/" className="text-xl font-bold text-[#f0c36a]">
          CREANOMIC
        </Link>

        {/* === MENU DESKTOP === */}
        <nav className="hidden md:flex items-center gap-10 font-semibold tracking-wide">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-all duration-300 hover:text-[#f0c36a] ${
                  isActive ? "text-[#f0c36a]" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* === TOGGLE BUTTON (MOBILE) === */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-[#f0c36a] focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* === MENU MOBILE === */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#5d0b1d] border-t border-[#f0c36a]/30"
          >
            <ul className="flex flex-col items-center gap-5 py-6 font-semibold tracking-wide">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block text-lg transition-all duration-300 hover:text-[#f0c36a] ${
                        isActive ? "text-[#f0c36a]" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Garis hiasan bawah */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#f0c36a]" />
    </header>
  );
}
