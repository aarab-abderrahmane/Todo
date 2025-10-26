"use client";;
import { cn } from "../../../lib/utils";
import { motion, useAnimation, useReducedMotion } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

const CodeXmlIcon = forwardRef((
    {
        onMouseEnter,
        onMouseLeave,
        className,
        size = 28,
        duration = 1,
        ...props
    },
    ref,
) => {
    const leftControls = useAnimation();
    const rightControls = useAnimation();
    const slashControls = useAnimation();
    const isControlled = useRef(false);
    const reduced = useReducedMotion();

    useImperativeHandle(ref, () => {
        isControlled.current = true;
        return {
            startAnimation: () => {
                if (reduced) {
                    leftControls.start("normal");
                    rightControls.start("normal");
                    slashControls.start("normal");
                } else {
                    leftControls.start("animate");
                    rightControls.start("animate");
                    slashControls.start("animate");
                }
            },
            stopAnimation: () => {
                leftControls.start("normal");
                rightControls.start("normal");
                slashControls.start("normal");
            },
        };
    });

    const handleEnter = useCallback((e) => {
        if (reduced) return;
        if (!isControlled.current) {
            leftControls.start("animate");
            rightControls.start("animate");
            slashControls.start("animate");
        } else {
            onMouseEnter?.(e);
        }
    }, [leftControls, rightControls, slashControls, reduced, onMouseEnter]);

    const handleLeave = useCallback((e) => {
        if (!isControlled.current) {
            leftControls.start("normal");
            rightControls.start("normal");
            slashControls.start("normal");
        } else {
            onMouseLeave?.(e);
        }
    }, [leftControls, rightControls, slashControls, onMouseLeave]);

    const leftArrowVariants = {
        normal: { pathLength: 1, opacity: 1 },
        animate: {
            pathLength: [0, 1],
            opacity: [0.6, 1],
            transition: { duration: 0.7 * duration, ease: "easeInOut" },
        },
    };

    const rightArrowVariants = {
        normal: { pathLength: 1, opacity: 1 },
        animate: {
            pathLength: [0, 1],
            opacity: [0.6, 1],
            transition: { duration: 0.7 * duration, ease: "easeInOut", delay: 0.1 },
        },
    };

    const slashVariants = {
        normal: { pathLength: 1, opacity: 1 },
        animate: {
            pathLength: [1, 0, 1],
            opacity: [1, 0.4, 1],
            transition: {
                duration: 1 * duration,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            className={cn("inline-flex items-center justify-center", className)}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            {...props}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <motion.path
                    d="m6 8-4 4 4 4"
                    animate={leftControls}
                    initial="normal"
                    variants={leftArrowVariants} />
                <motion.path
                    d="m18 16 4-4-4-4"
                    animate={rightControls}
                    initial="normal"
                    variants={rightArrowVariants} />
                <motion.path
                    d="m14.5 4-5 16"
                    animate={slashControls}
                    initial="normal"
                    variants={slashVariants} />
            </motion.svg>
        </motion.div>
    );
});

CodeXmlIcon.displayName = "CodeXmlIcon";
export { CodeXmlIcon };
