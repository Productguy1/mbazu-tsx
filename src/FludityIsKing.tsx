import { motion } from "motion/react"
import { container, item } from "./animation"
import { Link } from "react-router"

export default function FluidityIsKing() {
    return (
        <>
            <nav className="hidden lg:blockfixed top-24 left-32 z-10">
                <Link
                    to="/"
                    className="flex items-center gap-1.5 text-sm text-[#707070] transition-colors duration-200 hover:text-[#111]"
                >
                    <svg
                        width="14" height="14" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Index
                </Link>
            </nav>

            <motion.main
                variants={container}
                initial="hidden"
                animate="visible"
                className="flex flex-col max-w-2xl m-auto pt-24 pb-14 px-6"
            >
                <motion.header variants={item} className="mb-9">
                    <h1 className="text-[18px] font-[450] leading-[1.3] mb-2">
                        Fluidity is King: a shallow deep dive on continuity interactions
                    </h1>
                    <p className="text-sm text-[#858585]">Article coming soon…</p>
                </motion.header>
            </motion.main>
        </>
    )
}