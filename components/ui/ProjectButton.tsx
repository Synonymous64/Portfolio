import React from 'react';

const ProjectButton = ({ text }: any) => {
  return (
    <button className="group relative cursor-pointer border-none bg-transparent p-0 font-mono text-base font-light uppercase outline-none">
      {/* Shadow layer with smoother transition */}
      <span className="duration-[400ms] group-hover:duration-[200ms] absolute left-0 top-0 h-full w-full translate-y-0.5 transform rounded-lg bg-black/30 blur-[1px] transition-all ease-out group-hover:translate-y-1.5 group-hover:blur-[2px] group-active:translate-y-px" />

      {/* Background gradient with subtle pulse */}
      <span className="animate-subtle-pulse absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]" />

      {/* Main button content with enhanced transitions */}
      <div className="duration-[400ms] group-hover:duration-[200ms] relative flex -translate-y-1 transform items-center justify-between gap-3 rounded-lg bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] px-6 py-3 text-lg text-white shadow-lg transition-all ease-out group-hover:-translate-y-2 group-hover:shadow-xl group-hover:brightness-110 group-active:translate-y-0.5 group-active:shadow-md">
        <span className="select-none tracking-wide">{text}</span>

        {/* Download icon with bounce animation */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="ease-spring -mr-1 ml-2 h-5 w-5 transform transition-all duration-300 group-hover:translate-y-0.5 group-hover:scale-110"
        >
          <path
            fillRule="evenodd"
            d="M10 2a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5A.75.75 0 0110 2zM5.404 14.596a.75.75 0 010-1.06l4.596-4.597 4.596 4.596a.75.75 0 11-1.06 1.06L10 11.061l-3.536 3.535a.75.75 0 01-1.06 0z"
            clipRule="evenodd"
          />
          <path d="M3.5 17a1.5 1.5 0 001.5 1.5h10a1.5 1.5 0 001.5-1.5v-2a.75.75 0 011.5 0v2a3 3 0 01-3 3h-10a3 3 0 01-3-3v-2a.75.75 0 011.5 0v2z" />
        </svg>
      </div>
    </button>
  );
};

export default ProjectButton;
