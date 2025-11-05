'use client';;
import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

const defaultVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
   visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
     transition: {
        duration: 0.4,         
        ease: 'easeOut',       
      },
  }
};




export function InView({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
  as = 'div',
  once
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  const [isViewed, setIsViewed] = useState(false)

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      ref={ref}
      initial='hidden'
      onAnimationComplete={() => {
        if (once) setIsViewed(true)
      }}
      animate={(isInView || isViewed) ? "visible" : "hidden"}
      variants={variants}
      transition={transition}>
      {children}
    </MotionComponent>
  );
  
}
