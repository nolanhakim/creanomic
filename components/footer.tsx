"use client";

import Image from "next/image";

export default function FooterSection() {
  return (
    <div className="relative w-full">
      {/* === Divider Bawah === */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <Image
          src="/asset/awan-divider3.png"
          alt="Batas bawah dekorasi"
          width={1920}
          height={200}
          unoptimized
          className="w-full object-cover select-none pointer-events-none"
        />
      </div>

      {/* === Footer Content === */}
      <footer className="relative w-full z-20 bg-gradient-to-b from-transparent via-white/5 to-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center justify-center mb-12">
            {/* Brand Section */}
            <div className="flex flex-col items-center">
              <a
                href="https://instagram.com/pit.creanomic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold glow-text text-[#45171D] mb-2 hover:text-[#5a1e26] transition-colors duration-300 cursor-pointer"
              >
                PIT CREANOMIC
              </a>
              <p className="text-sm text-gray-500">
                Crafting digital experiences with creativity
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300/30 to-transparent mb-8" />

          {/* Copyright Section */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              <span className="font-medium">© 2025 Made With</span>{" "}
              <span className="text-pink-500 text-lg animate-pulse">♡</span>{" "}
              <span className="font-medium">by</span>{" "}
              <a
                href="https://www.instagram.com/catranolanhkm?igsh=NTMzZjVteWp2dWdm&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold glow-text text-[#45171D] hover:text-[#5a1e26] transition-colors duration-300 cursor-pointer"
              >
                PIT CREANOMIC
              </a>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              All rights reserved. Crafted with passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}