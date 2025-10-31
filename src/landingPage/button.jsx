'use client';
import React, { useState } from 'react';
import { Github } from 'lucide-react';
import { Liquid } from '../components/uilayouts/liquid-gradient';
    const COLORS = {
    color1: '#E6F0FF', // very light blue (background)
    color2: '#1E40FF', // bright primary blue
    color3: '#3B82F6', // medium blue
    color4: '#F0F7FF', // very light sky blue
    color5: '#DCEEFB', // soft pastel blue
    color6: '#60A5FA', // sky blue
    color7: '#2563EB', // deep blue
    color8: '#1D4ED8', // darker blue
    color9: '#1E3A8A', // navy blue
    color10: '#93C5FD', // light baby blue
    color11: '#0E2DCB', // rich deep blue
    color12: '#BFDBFE', // soft light blue
    color13: '#1E40AF', // indigo blue
    color14: '#60A5FA', // repeat medium blue
    color15: '#3B82F6', // repeat bright blue
    color16: '#1E3A8A', // repeat navy blue
    color17: '#93C5FD', // repeat soft light blue
    };

const GitHubButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex justify-center ">
      <a
        href="https://github.com/ui-layouts/uilayouts"
        target="_blank"
        className="relative inline-block w-48 h-[3.4em] mx-auto group dark:bg-black bg-white dark:border-white border-black border-2 rounded-3xl">
        <div className="absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70">
          <span className="absolute inset-0 rounded-3xl bg-[#d9d9d9] filter blur-[6.5px]"></span>
          <div className="relative w-full h-full overflow-hidden rounded-3xl">
            <Liquid isHovered={isHovered} colors={COLORS} />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-3xl bg-[#010128] filter blur-[7.3px]"></div>
        <div className="relative w-full h-full overflow-hidden rounded-3xl ">
          <span className="absolute inset-0 rounded-3xl bg-[#d9d9d9]"></span>
          <span className="absolute inset-0 rounded-3xl bg-black"></span>
          <Liquid isHovered={isHovered} colors={COLORS} />
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`absolute inset-0 rounded-3xl border-solid border-[3px] border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${i <= 2 ? 'blur-[3px]' : i === 3 ? 'blur-[5px]' : 'blur-xs'}`}></span>
          ))}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-3xl filter blur-[15px] bg-[#006]"></span>
        </div>
        <button
          className="absolute inset-0 rounded-3xl bg-transparent cursor-pointer"
          aria-label="Get Started"
          type="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <span className="flex items-center justify-center px-2 gap-1 rounded-3xl group-hover:text-yellow-400 text-white text-xl font-semibold tracking-wide whitespace-nowrap">
            Get Started
            <i class="bi bi-arrow-right-short text-xl  inline-block group-hover:fill-yellow-400 fill-white  shrink-0" ></i>

          </span>
        </button>
      </a>
    </div>
  );
};
export default GitHubButton;
