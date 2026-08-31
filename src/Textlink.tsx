import type { ReactNode } from "react"

type TextLinkProps = {
    href: string
    children: ReactNode
}

export default function TextLink({ href, children }: TextLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#707070] underline decoration-[#AEAEAE] underline-offset-[2px] transition-colors duration-200 hover:text-[#111]"
        >
            {children}
        </a>
    )
}