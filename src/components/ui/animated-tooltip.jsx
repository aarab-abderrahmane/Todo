"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
  
} from "motion/react";

export const AnimatedTooltip = ({
  item , applyTheme
}) => {
  
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef(null);

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <>
        <div
          className="group -mr-1 relative "
          key={item.theme_name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-[var(--color-text)] px-4 py-2 text-xs shadow-xl">
                {/* <div
                  className="absolute inset-x-0 -bottom-px z-30 h-[2px] w-[50%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div
                  className="absolute -bottom-px left-8 z-30 h-[2px] w-[50%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" /> */}
                <div className="relative z-30 text-base font-bold text-white">
                  {item.key}
                </div>
                {/* <div className="text-xs text-white">{item.theme_name}</div> */}
              </motion.div>
            )}
          </AnimatePresence >
                        <div
                            key={item.index}
                            className={`w-[50px] h-[50px]
                          bg-[${item.colorInfo["--color-button"]}] 
                          rounded-full hover:border-2  cursor-pointer
                          ${
                            item.theme_name === item.key
                              ? "border-2"
                              : ""
                          } 
                          border-[var(--color-primary)]
                          
                          `}
                            onClick={
                              item.theme_name === item.key
                                ? undefined
                                : () => applyTheme(item.key)
                            }
          ></div>

        </div>
    </>
  );
};
