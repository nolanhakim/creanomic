"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function SponsorMedia() {
  const [emblaRefSponsor, emblaApiSponsor] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "keepSnaps",
    duration: 50,
  });

  const [emblaRefMedia, emblaApiMedia] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "keepSnaps",
    duration: 50,
  });

  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!emblaApiSponsor || !emblaApiMedia) return;

    const autoplay = () => {
      // Sponsor carousel bergerak ke kanan (previous)
      emblaApiSponsor.scrollPrev();
      // Media carousel bergerak ke kiri (next)
      emblaApiMedia.scrollNext();
    };

    autoplayIntervalRef.current = setInterval(autoplay, 2500);

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [emblaApiSponsor, emblaApiMedia]);

  const sponsorList = [
    "/sponsor/blumen.jpg",
    "/sponsor/photo.png",
    "/medpart/medpart1.png",
    "/medpart/medpart2.png",
    "/medpart/medpart3.png",
    "/medpart/medpart5.png",
    "/medpart/medpart6.png",
    "/medpart/medpart7.png",
    "/medpart/medpart8.png",
    "/medpart/medpart9.png",
    "/medpart/medpart10.png",
  ];
  const mediaList = [
   "/medpart/medpart11.png",
   "/medpart/medpart12.png",
   "/medpart/medpart13.png",
   "/medpart/medpart14.png",
   "/medpart/medpart15.webp",
   "/medpart/medpart16.png",
   "/medpart/medpart17.png",
   "/medpart/medpart18.jpg",
   "/medpart/medpart19.png",
   "/medpart/medpart20.png",
   "/medpart/medpart21.png",
   "/medpart/medpart22.png",
  ];

  const extendedSponsorList = [...sponsorList, ...sponsorList];
  const extendedMediaList = [...mediaList, ...mediaList];

  return (
    <section className="relative w-full bg-white pb-16 sm:pb-24 md:pb-36 pt-12 sm:pt-16 md:pt-24 overflow-hidden">
      {/* === JUDUL SECTION === */}
      <div className="relative flex flex-col items-center justify-center mb-10 sm:mb-12 md:mb-16 z-10 px-4">
        <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-extrabold text-[#660F24] tracking-wide text-center drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]">
          SPONSOR AND MEDIA PARTNER
        </h2>
      </div>

      {/* === SPONSOR (Bergerak ke Kanan) === */}
      <div
        className="relative overflow-hidden w-full z-10 px-2 sm:px-0"
        ref={emblaRefSponsor}
      >
        <div className="flex">
          {extendedSponsorList.map((src, i) => (
            <div
              key={`sponsor-${i}`}
              className="flex-[0_0_auto] px-3 sm:px-4 md:px-6"
            >
              <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-white/60 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-[#FFD700] flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={src}
                  alt={`Sponsor ${i + 1}`}
                  width={110}
                  height={110}
                  className="object-contain p-2 sm:p-3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === MEDIA PARTNER (Bergerak ke Kiri) === */}
      <div
        className="relative overflow-hidden w-full mt-10 sm:mt-12 md:mt-16 z-10 px-2 sm:px-0"
        ref={emblaRefMedia}
      >
        <div className="flex">
          {extendedMediaList.map((src, i) => (
            <div
              key={`media-${i}`}
              className="flex-[0_0_auto] px-3 sm:px-4 md:px-6"
            >
              <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-white/60 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-[#FFD700] flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={src}
                  alt={`Media Partner ${i + 1}`}
                  width={110}
                  height={110}
                  className="object-contain p-2 sm:p-3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}