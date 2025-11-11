import { motion, useInView } from "motion/react";
import React from "react";
import PropTypes from "prop-types";


export const TimelineContent = ({
  children,
  animationNum,
  timelineRef,
  className,
  as,
  customVariants,
  once = false,
  ...props
}) => {
  const defaultSequenceVariants = {
    visible: (i) => ({
      filter: "blur(0px)",
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.5,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(20px)",
      y: 0,
      opacity: 0,
    },
  };

  const sequenceVariants = customVariants || defaultSequenceVariants;

  const isInView = useInView(timelineRef, {
    once,
  });

  const MotionComponent = motion[as || "div"];

  return (
    <MotionComponent
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={sequenceVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};



TimelineContent.propTypes = {
  children: PropTypes.node,
  animationNum: PropTypes.number,
  timelineRef: PropTypes.object.isRequired,
  className: PropTypes.string,
  as: PropTypes.string,
  customVariants: PropTypes.object,
  once: PropTypes.bool,
};
