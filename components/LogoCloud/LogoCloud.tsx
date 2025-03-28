import Image from 'next/image';
import PythonLogo from '@/public/images/svg/Python-Logo.svg';
import TailwindCSSLogo from '@/public/images/svg/Tailwind-Logo.svg';
import ReactLogo from '@/public/images/svg/react-logo.svg';
import TypescriptLogo from '@/public/images/svg/TS-Logo.svg';
import FigmaLogo from '@/public/images/svg/figma-logo.svg';
import VercelLogo from '@/public/images/svg/Vercel-Logo.svg';
import EthereumLogo from '@/public/images/svg/ethereum-logo.svg';
import SolidityLogo from '@/public/images/svg/solidity-logo.svg';
import EthersJSLogo from '@/public/images/svg/ethersjs-logo.svg';
import OpenAILogo from '@/public/images/svg/openai-logo.svg';
import blender from '@/public/images/svg/blender.svg';
import bootstrap from '@/public/images/svg/bootstrap.svg';
import cpp from '@/public/images/svg/cpp.svg';
import java from '@/public/images/svg/java.svg';
import CSS from '@/public/images/svg/CSS.svg';
import HTML from '@/public/images/svg/HTML.svg';
import express from '@/public/images/svg/express.svg';
import gatsby from '@/public/images/svg/gatsby.svg';
import github from '@/public/images/svg/github.svg';
import langchain from '@/public/images/svg/langchain.svg';
import MaterialUI from '@/public/images/svg/MaterialUI.svg';
import mongodb from '@/public/images/svg/mongodb.svg';
import mysql from '@/public/images/svg/mysql.svg';
import nodejs from '@/public/images/svg/nodejs.svg';
import prisma from '@/public/images/svg/prisma.svg';
import redis from '@/public/images/svg/redis.svg';
import redux from '@/public/images/svg/redux.svg';
import supabase from '@/public/images/svg/supabase.svg';
import vite from '@/public/images/svg/vite.svg';
import vscode from '@/public/images/svg/vscode.svg';

export const logos = [
  {
    src: TypescriptLogo,
    alt: 'TypeScript Logo',
    name: 'TypeScript',
    width: 30,
    height: 30,
  },
  {
    src: cpp,
    alt: 'C++ Logo',
    name: 'C++',
    width: 30,
    height: 30,
  },
  {
    src: java,
    alt: 'Java Logo',
    name: 'Java',
    width: 30,
    height: 30,
  },
  {
    src: EthereumLogo,
    alt: 'Ethereum Logo',
    name: 'Ethereum',
    width: 30,
    height: 30,
  },
  {
    src: SolidityLogo,
    alt: 'Solidity Logo',
    name: 'Solidity',
    width: 30,
    height: 30,
  },
  {
    src: EthersJSLogo,
    alt: 'Ethers.js Logo',
    name: 'Ethers.js',
    width: 30,
    height: 30,
  },
  {
    src: OpenAILogo,
    alt: 'OpenAI Logo',
    name: 'AI/ML',
    width: 30,
    height: 30,
  },
  { src: ReactLogo, alt: 'React Logo', name: 'React', width: 30, height: 30 },
  {
    src: VercelLogo,
    alt: 'Vercel Logo',
    name: 'Vercel',
    width: 30,
    height: 30,
  },
  {
    src: TailwindCSSLogo,
    alt: 'Tailwind CSS Logo',
    name: 'Tailwind CSS',
    width: 30,
    height: 30,
  },
  {
    src: PythonLogo,
    alt: 'Python Logo',
    name: 'Python',
    width: 30,
    height: 30,
  },
  { src: FigmaLogo, alt: 'Figma Logo', name: 'Figma', width: 23, height: 23 },
  { src: blender, alt: 'Blender Logo', name: 'Blender', width: 23, height: 23 },
  {
    src: bootstrap,
    alt: 'Bootstrap Logo',
    name: 'Bootstrap',
    width: 23,
    height: 23,
  },
  { src: CSS, alt: 'CSS Logo', name: 'CSS', width: 23, height: 23 },
  { src: HTML, alt: 'HTML Logo', name: 'HTML', width: 23, height: 23 },
  { src: express, alt: 'Express Logo', name: 'Express', width: 23, height: 23 },
  { src: gatsby, alt: 'Gatsby Logo', name: 'Gatsby', width: 23, height: 23 },
  { src: github, alt: 'Github Logo', name: 'Github', width: 23, height: 23 },
  {
    src: langchain,
    alt: 'Langchain Logo',
    name: 'Langchain',
    width: 23,
    height: 23,
  },
  {
    src: MaterialUI,
    alt: 'Material UI Logo',
    name: 'Material UI',
    width: 23,
    height: 23,
  },
  {
    src: mongodb,
    alt: 'Mongodb Logo',
    name: 'Mongodb',
    width: 23,
    height: 23,
  },
  { src: mysql, alt: 'MySql Logo', name: 'MySql', width: 23, height: 23 },
  { src: nodejs, alt: 'Nodejs Logo', name: 'Nodejs', width: 23, height: 23 },
  { src: prisma, alt: 'Prisma Logo', name: 'Prisma', width: 23, height: 23 },
  { src: redis, alt: 'Redis Logo', name: 'Redis', width: 23, height: 23 },
  { src: redux, alt: 'Redux Logo', name: 'Redux', width: 23, height: 23 },
  {
    src: supabase,
    alt: 'Supabase Logo',
    name: 'Supabase',
    width: 23,
    height: 23,
  },
  { src: vite, alt: 'Vite Logo', name: 'Vite', width: 23, height: 23 },
  { src: vscode, alt: 'Vscode Logo', name: 'Vscode', width: 23, height: 23 },
];

interface LogoProps {
  src: string | string[];
  alt: string | string[];
  name: string;
  width?: number | number[];
  height?: number | number[];
}

const Logo = ({ src, alt, name, width = 30, height = 30 }: LogoProps) => (
  <div className="flex items-center gap-2 self-center lg:items-center lg:gap-2">
    {Array.isArray(src) ? (
      <div className="flex items-center gap-2">
        <div className="flex w-[60px] items-center justify-center">
          <Image
            src={src[0]}
            alt={Array.isArray(alt) ? alt[0] : alt}
            width={Array.isArray(width) ? width[0] : width}
            height={Array.isArray(height) ? height[0] : height}
            className="scale-150 invert [&>path]:fill-white"
          />
        </div>
        <Image
          src={src[1]}
          alt={Array.isArray(alt) ? alt[1] : alt}
          width={Array.isArray(width) ? width[1] : width}
          height={Array.isArray(height) ? height[1] : height}
        />
      </div>
    ) : (
      <div className="flex w-[60px] items-center justify-center">
        <Image
          src={src}
          alt={alt as string}
          width={width as number}
          height={height as number}
        />
      </div>
    )}
    {name && <div className="text-sm font-semibold lg:text-base">{name}</div>}
  </div>
);

export const LogoList = ({ startIndex = 0 }: { startIndex?: number }) => (
  <div className="flex items-center">
    {Array.from({ length: 2 }, (_, i) =>
      logos.map((logo, index) => (
        <div
          key={`logo-${startIndex}-${i}-${index}`}
          className="inline-flex items-center px-6"
        >
          <Logo {...logo} />
        </div>
      )),
    ).flat()}
  </div>
);

export default function LogoCloud() {
  return (
    <div className="lg:mt-22 relative z-40 mx-auto mb-[-75px] mt-[50px] flex flex-col gap-3 text-white lg:mb-0 lg:max-w-[1080px] lg:gap-6">
      <h2 className="mx-auto mb-3 w-full px-8 text-center text-sm lg:mb-0 lg:max-w-none lg:px-0 lg:text-xl">
        Leveraging state-of-the-art technologies
      </h2>

      <div
        className="relative flex w-full overflow-hidden rounded-xl backdrop-blur-sm"
        style={{
          background: 'linear-gradient(to right, rgba(17, 24, 39, 0.7), rgba(88, 28, 135, 0.1), rgba(17, 24, 39, 0.7))',
          maskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)',
        }}
      >
        <div className="flex animate-marquee-scroll whitespace-nowrap py-6">
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-1-${i}`} startIndex={i} />
          ))}
        </div>
        <div
          className="flex animate-marquee-scroll whitespace-nowrap py-6"
          style={{ animationDelay: '-30s' }} // Increased from -20s to -30s
          aria-hidden="true"
        >
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-2-${i}`} startIndex={i + 2} />
          ))}
        </div>
      </div>

      <p className="mx-auto w-full max-w-[250px] text-center text-sm opacity-60 lg:max-w-none">
        Staying ahead of the curve and surfing the waves of innovation
      </p>
    </div>
  );
}
