import { Link } from "react-router"
import { motion } from "motion/react"
import { container, item } from "./animation"
import CodeBlock from "./CodeBlock"
import TextLink from "./Textlink"

import doorDiagram from "./assets/rings-door-diagram.png"
import buttonLight from "./assets/rings-button-light.png"
import borderCompare from "./assets/rings-border-compare.png"
import mugShadows from "./assets/rings-mug-shadows.png"

export default function RingsInShadows() {
    return (
        <>
            <nav className="fixed top-24 left-32 z-10">
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
                        Rings in shadows: why your shadows suck and how to fix it
                    </h1>
                    <p className="text-sm text-[#858585]">19th August 2026</p>
                </motion.header>

                <article className="w-full">
                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[405]">
                        Shadows are a very important part of UI and web design, but most
                        shadows on the web are wrong. Or at least artistically wrong, in
                        the same way a drawing feels wrong when the light is coming from
                        three different directions at once.
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[405]">
                        Here's why: <em>we're guessing at a shadow instead of modelling
                            the light that creates it.</em>
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[405]">
                        In the real world, you never see a shadow on its own. You see a
                        light source, an object, and then the shadow as a consequence of
                        that light being blocked. Your eye has spent your entire life
                        reading that relationship, which is exactly why you notice, almost
                        instantly, when a shadow doesn't obey it.
                    </motion.p>

                    <motion.figure variants={item} className="my-8">
                        <img
                            src={doorDiagram}
                            alt="Diagram of a light source hitting a surface, next to a blue door showing real-world light falloff"
                            className="block w-full rounded-lg"
                        />
                        <figcaption className="text-xs text-[#858585] mt-2">
                            Img 1.1 — light cast on a wooden door
                        </figcaption>
                    </motion.figure>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[405]">
                        That flat, sticker-like quality of a bad UI shadow isn't really a
                        blur-radius problem. It's a physics problem. The shadow is
                        describing a world with no consistent light in it.
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[405]">
                        So the fix doesn't start with the shadow. It starts with the light.
                    </motion.p>

                    <h2 className="text-[17px] font-[450] mt-10 mb-4 tracking-[-0.2px]">
                        Emulate a light source
                    </h2>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        Before you touch a single shadow value, decide where your light is
                        coming from, and then commit to it across the entire interface.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        On the web, the convention is usually a soft light coming from
                        directly above, maybe tilted slightly forward, like an overcast
                        sky. That one decision determines everything downstream: shadows
                        fall below elements, they're offset slightly on the y-axis, and
                        every raised element on the page agrees about where the light is
                        coming from.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        The moment your light source is consistent, your shadows stop
                        fighting each other. A button, a card, a dropdown — they all cast
                        shadows in the same direction because they all live under the same
                        sky.
                    </p>

                    <figure className="my-8">
                        <img
                            src={buttonLight}
                            alt="Two buttons side by side: one with a flat shadow, one with a light-modelled shadow"
                            className="block w-full rounded-lg"
                        />
                        <figcaption className="text-xs text-[#858585] mt-2">
                            Img 1.2 — button under different light conditions
                        </figcaption>
                    </figure>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        This is also a good way to think about shadows in general. Instead
                        of asking, "What shadow looks good here?", ask, "What would the
                        shadow look like if this object existed under the same light as
                        everything else?"
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        That small shift in thinking makes it much easier to create shadows
                        that feel natural.
                    </p>

                    <h2 className="text-[17px] font-[450] mt-10 mb-4 tracking-[-0.2px]">
                        Use shadow-based borders
                    </h2>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        Another common mistake is using fully opaque borders.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        Borders themselves aren't bad, especially when combined with
                        shadows, but a solid border can make an element feel flattened
                        against the background. This becomes even more noticeable when the
                        background isn't pure white or black.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        One trick I've used to get around this is using shadows to create
                        the border instead. The idea is sometimes referred to as a soft
                        boundary border.
                    </p>

                    <figure className="my-8">
                        <img
                            src={borderCompare}
                            alt="Two connector cards compared: one with a solid border, one with a soft shadow-based border"
                            className="block w-full rounded-lg"
                        />
                        <figcaption className="text-xs text-[#858585] mt-2">
                            Img 1.3 — a solid border versus a soft shadow-based border
                        </figcaption>
                    </figure>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        Instead of adding a traditional border, you can use a shadow with
                        only a spread value and a low-opacity color. This creates a much
                        softer edge around the element while still giving it enough
                        definition.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        You can achieve this in CSS by adding only a spread value with low
                        color opacity:
                    </p>

                    <CodeBlock code={`.card {
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06);
}`} />


                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        The nice thing about doing this is that the "border" becomes part
                        of the shadow system. You can then combine it with the other
                        shadow layers to create a much more natural and crisp result. The
                        border isn't fighting the shadow anymore. They're working together
                        to describe the same surface.
                    </p>

                    <h2 className="text-[17px] font-[450] mt-10 mb-4 tracking-[-0.2px]">
                        One shadow is a lie
                    </h2>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        The other thing bad shadows get wrong is that they usually use one
                        layer. One box-shadow with one blur and one colour.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        But real shadows aren't really one thing. They're a gradient of
                        darkness, sharp and dense right under the object, then softer and
                        fainter as they move away from it.
                    </p>

                    <figure className="my-8">
                        <img
                            src={mugShadows}
                            alt="Two mugs compared: one with a double shadow, one with multiple layered shadows"
                            className="block w-full rounded-lg"
                        />
                        <figcaption className="text-xs text-[#858585] mt-2">
                            Img 1.4 — double shadow versus multiple shadows
                        </figcaption>
                    </figure>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        You can approximate this by stacking multiple shadows: several
                        layers, each with a slightly larger blur and a slightly lower
                        opacity, starting with a tight, darker shadow that hugs the element
                        and ending with a wider, faint shadow that slowly fades into the
                        background.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        Stack three or four of those together and the shadow stops looking
                        painted on and starts looking <em>cast</em>.
                    </p>

                    <h2 className="text-[17px] font-[450] mt-10 mb-4 tracking-[-0.2px]">
                        But how do you actually achieve this?
                    </h2>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        The trick I've used to get crisp shadows is really a combination of
                        the principles I've talked about above: pick a light source, then
                        build the shadow around it.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        There are different ways to build a shadow stack, and not every
                        shadow needs to follow the exact same formula. But one technique
                        I've found useful is a method shared by <TextLink href="https://x.com/PixelJanitor">Derek Briggs.</TextLink>
                    </p>

                    <CodeBlock code={`.card {
  box-shadow:
     0 0px 0px 1px rgba(0, 0, 0, 0.06),
    0 1px 1px -0.5px rgba(0, 0, 0, 0.06),
    0 3px 3px -1.5px rgba(0, 0, 0, 0.06),
    0 6px 6px -3px rgba(0, 0, 0, 0.06),
    0 12px 12px -6px rgba(0, 0, 0, 0.06),
    0 24px 24px -12px rgba(0, 0, 0, 0.06);
}`} />

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        Each layer shares the same colour at a low alpha, and each step
                        increases the offset and blur while pulling the spread further
                        negative, so the shadow tightens near the element and softens as it
                        falls away:
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        While I don't use it for every shadow, I think it's a solid
                        starting point for building a crisp shadow stack. The important
                        part isn't memorising the exact values. It's understanding why the
                        values work.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        The light gives you direction. The layers give you the falloff.
                        Together, they give the object somewhere to exist.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        That's really what a good shadow is doing.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[405]">
                        It's not decoration. It's telling your eye where the light is.
                    </p>
                </article>
            </motion.main>
        </>
    )
}