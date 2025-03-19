"use client";

import InfiniteLoopSlider from "./InfiniteLoopSlider";
import { STACKS } from "@/lib/stack";

import { memo, ReactNode, useEffect, useState } from "react";

// eslint-disable-next-line react/display-name
const Tag = memo(({ icon, title }: { icon: ReactNode; title: string }) => (
  <div className="mr-3 flex w-max items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-5 py-2 text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50">
    {icon}
    <span>{title}</span>
  </div>
));

const SkillSlider = () => {
  const [shuffledSkills, setShuffledSkills] = useState<
    Array<[string, ReactNode]>
  >([]);

  useEffect(() => {
    const skillsArray = Object.entries(STACKS);
    const shuffledArray = [...skillsArray].sort(() => Math.random() - 0.5);
    setShuffledSkills(shuffledArray);
  }, []);

  const sliders = Array.from({ length: 3 }, (_, index) => {
    const sliderSkills = [...shuffledSkills].sort(() => Math.random() - 0.5);
    return (
      <InfiniteLoopSlider 
        key={index} 
        isReverse={index % 2 === 1}
      >
        {sliderSkills.map(([title, icon], index) => (
          <Tag key={index} icon={icon} title={title} />
        ))}
      </InfiniteLoopSlider>
    );
  });

  return (
    <div className="relative flex flex-col gap-y-4 py-4 w-full overflow-hidden">
      {sliders}
    </div>
  );
};

export default SkillSlider;
