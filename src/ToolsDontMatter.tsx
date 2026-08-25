import { Link } from "react-router"
import { motion } from "motion/react"
import { container, item } from "./animation"

export default function ToolsDontMatter() {
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
                {/* Article header */}
                <motion.header
                    variants={item}
                    className="mb-9"
                >
                    <h1 className="text-[18px] font-[450] leading-[1.3] mb-2">
                        The tools don't matter: on switching design tools and what you actually lose
                    </h1>
                    <p className="text-sm text-[#858585]">9th May 2026</p>
                </motion.header>

                {/* Article body */}
                <article className="w-full">
                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        Every few years, the design world holds a funeral for software that isn't dead.
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        Photoshop was killed by Sketch. Sketch was killed by Figma. Adobe XD was killed by being Adobe XD. Now Figma is being killed by v0, Cursor, Lovable, and a rotating cast of AI-native tools that didn't exist eighteen months ago. The eulogies are always written with the same breathless certainty, usually on Twitter, usually by someone who hasn't actually shipped a real product in either tool.
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        I want to make a boring claim that I think is true: the tool has never been the thing. It isn't the thing now, and it won't be the thing when whatever replaces v0 shows up in 2027 with a slightly different gradient on its landing page.
                    </motion.p>

                    <motion.h2 variants={item} className="text-[17px] font-[450] mt-10 mb-4 tracking-[-0.2px]">
                        A short history of design tools allegedly killing each other
                    </motion.h2>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        Designers used Photoshop for interfaces for years, which in retrospect was insane. It was a tool built for retouching photographs, and we used it to make buttons. Then Sketch arrived and everyone migrated, and the work got better, but not because Sketch was magic. The work got better because the field matured. Sketch happened to be the tool we held while it happened.
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        Then came Adobe XD, which arrived with enormous fanfare and the full marketing weight of Adobe behind it. It was supposed to flatten Sketch. It did not flatten Sketch. It mostly just existed, the way a houseplant exists, while Figma quietly built something in the background that would eventually flatten everyone.
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        Figma's actual innovation wasn't the tool. It was the URL. You could send a link. You could collaborate live. The product designers in your company stopped emailing each other 47MB files named final_v3_REAL_FINAL.sketch. That single shift was worth more than every feature that shipped before or after it.
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        And now we're told Figma is dead because you can describe a UI to a chatbot and it spits out working React. Maybe. We'll see. I have a hunch we're about to repeat the same pattern, which is that the new thing won't kill the old thing, it will absorb a chunk of its workflow, the field will mature again, and a different group of designers will discover that being good at design still requires being good at design.
                    </motion.p>

                    <motion.h2 variants={item} className="text-[17px] font-[450] mt-10 mb-4 tracking-[-0.2px]">
                        What actually carries over
                    </motion.h2>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        Here's the part nobody wants to hear, because it doesn't make for a viral post: almost everything that makes a designer good is invariant to the tool.
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        Visual hierarchy doesn't care what app you're in. Knowing which element should be loudest, which should recede, and how to use whitespace as a structural device works identically in Photoshop, Figma, and a prompt window. Typography is still typography. The rules about line height, measure, contrast, and rhythm were figured out by people setting metal type four hundred years ago, and AI tools have not repealed them.
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        Color theory is invariant. Composition is invariant. The instinct for when something is "off" by four pixels is invariant, and frankly, somewhat haunted. The ability to look at a competitor's product and reverse-engineer why it feels expensive is invariant. The taste to know when to stop polishing is invariant.
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        Knowing your own style is invariant, and probably the most underrated thing on this list. Designers who have spent years figuring out what they actually like, what they keep returning to, what feels like them, do not lose that when they switch tools. They just express it through a different surface. Designers who haven't done that work tend to produce output that looks like the default template of whatever software they opened most recently. You can usually tell within about three seconds.
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        The deepest invariant is judgment. Why this layout instead of the other one. Why warm grey instead of cool. Why three columns and not four. Why the CTA goes here. None of this lives in the tool. It lives in the years you spent looking at things, copying things badly, learning why your copy was bad, and slowly developing a private internal model of what works. AI tools can generate options faster than you can. They cannot tell you which option is right. That call is still yours, and being able to make it well is roughly 80% of the job.
                    </motion.p>

                    <motion.h2 variants={item} className="text-[17px] font-[450] mt-10 mb-4 tracking-[-0.2px]">
                        What you actually do lose
                    </motion.h2>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        I want to be honest, though, because the "tools don't matter" position is usually argued by people who pretend switching is free, and it isn't.
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        You lose muscle memory, which is more painful than it sounds. Years of keyboard shortcuts, plugin habits, and the ability to produce a clean component without thinking about it: all of that resets to zero. For about three weeks you will feel like a junior again, which is good for you spiritually and terrible for you operationally.
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        You lose your library of personal patterns. Every designer accumulates a private collection of components, spacing systems, color combinations, and weird little tricks that made past projects work. Some of this transfers conceptually. Some of it really was tied to specific features of the old tool, and you will quietly mourn it for a while. This is fine. You'll build a new collection in the new tool, and it'll be better, because you've grown since you built the last one.
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        You lose some collaboration overhead during the transition, because half your team has moved to the new thing and half hasn't, and now nobody knows where the source of truth lives. This usually resolves within a quarter, accompanied by approximately 200 Slack messages that all start with "quick question."
                    </motion.p>

                    <motion.p variants={item} className="text-sm mb-6 leading-[1.65] font-[410]">
                        What you don't lose is the part that actually matters. You don't lose your eye. You don't lose your taste. You don't lose the years of figuring out what good looks like.
                    </motion.p>

                    <motion.h2 variants={item} className="text-[17px] font-[450] mt-10 mb-4 tracking-[-0.2px]">
                        The real lesson of every tool transition
                    </motion.h2>

                    <p className="text-sm mb-6 leading-[1.65] font-[410]">
                        Look at the designers who made it through Photoshop to Sketch to Figma to whatever's next. They have a particular quality, and it isn't that they're early adopters or that they have strong opinions about software. It's that they were already good at design before the new tool arrived, so the new tool just gave them a faster way to do what they were already doing.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[410]">
                        The designers who struggled through these transitions, in my experience, were almost always people who had been hiding behind a specific tool. Their identity was "Sketch designer" rather than "designer." When the ground moved, they felt like they had nothing left, because most of what they'd built wasn't portable. It was tied to a particular surface that the industry had moved past.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[410]">
                        This is the actual risk of the AI tools moment. Not that Figma will die (it won't, at least not soon, and probably not in the way people think). The risk is that a generation of designers will mistake fluency in a specific tool for fluency in design, and they'll spend the next two years anxiously chasing whichever app is currently trending instead of doing the slow, unglamorous work of actually getting better.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[410]">
                        Get good at the underlying thing. Learn typography properly. Develop opinions about color that you can defend. Study why the products you love feel the way they feel. Build a personal style by making a lot of work and noticing what you keep doing. Do this for long enough and you'll watch tools come and go from a comfortable distance, occasionally adopting a new one, never feeling especially threatened by any of it.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[410]">
                        Get good at the underlying thing. Learn typography properly. Develop opinions about color that you can defend. Study why the products you love feel the way they feel. Build a personal style by making a lot of work and noticing what you keep doing. Do this for long enough and you'll watch tools come and go from a comfortable distance, occasionally adopting a new one, never feeling especially threatened by any of it.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[410]">
                        Figma isn't dead. Neither was Photoshop, technically. The thing that's actually at stake in every tool transition is whether the designers using them were ever doing design in the first place, or whether they were just operating software.
                    </p>

                    <p className="text-sm mb-6 leading-[1.65] font-[410]">
                        The software changes. The craft doesn't.
                    </p>
                </article>
            </motion.main>
        </>
    )
}
