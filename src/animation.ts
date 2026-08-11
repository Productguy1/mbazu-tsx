import type { Variants } from "motion/react"

// Parent: orchestrates the stagger.
export const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
}

// Child: the reveal — blur + rise + fade, easeOutExpo.
export const item: Variants = {
    hidden: { opacity: 0, y: 8, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
}