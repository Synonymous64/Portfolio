import React from 'react';
import Image from 'next/image';

const AboutMeImage = () => {
  return (
    <div className="relative mb-8">
      {/* Letter background layers with rotation */}
      <div className="absolute left-0 top-0 z-10 h-full w-full -rotate-1 rounded-lg bg-gradient-to-br from-gray-800/90 to-gray-900/90 lg:-rotate-2" />
      <div className="absolute left-1 top-1 z-20 h-[98%] w-[98%] -rotate-1 rounded-lg bg-gradient-to-br from-gray-700/90 to-gray-800/90 lg:left-3 lg:top-3 lg:rotate-1" />

      {/* Main image container with improved shadow and border */}
      <div className="relative z-30 overflow-hidden rounded-lg border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/images/png/praj.png"
            alt="Prajwal Urkude"
            fill
            quality={100}
            className="object-cover object-center transition-all duration-300 hover:scale-105 hover:brightness-110"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              filter: 'contrast(1.1) brightness(1.05)',
            }}
          />

          {/* Softer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </div>

        {/* Enhanced decorative element */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white/90">
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default AboutMeImage;
