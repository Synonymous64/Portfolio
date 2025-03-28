import grainImage from '@/public/images/jpeg/grain.jpg';
import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'react';

export const AboutCard = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        `group relative z-0 overflow-hidden rounded-3xl 
        bg-gradient-to-br from-gray-900/90 via-purple-900/50 to-gray-900/90
        p-6 transition-all duration-300 hover:scale-[1.02]
        before:absolute before:inset-0 before:-z-10 before:animate-pulse
        before:bg-gradient-to-br before:from-purple-500/20 before:via-transparent before:to-blue-500/20
        after:pointer-events-none after:absolute after:inset-0 after:z-10 
        after:rounded-3xl after:bg-gradient-to-br after:from-white/10 after:to-transparent/5
        after:backdrop-blur-[1px] after:transition-all after:duration-500
        after:content-[''] hover:after:from-white/20 hover:after:to-transparent/10`,
        className
      )}
    >
      <div
        className="absolute inset-0 -z-20 opacity-[0.02] mix-blend-overlay"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      <div className="relative z-20 transition-transform duration-300 group-hover:scale-[1.02]">
        {children}
      </div>
    </div>
  );
};
