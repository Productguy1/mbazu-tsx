import { useState } from "react"

type CodeBlockProps = {
    code: string
}

export default function CodeBlock({ code }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <div className="relative mb-6">
            <pre className="text-xs bg-[#f2f2f2] rounded-lg p-4 overflow-x-auto font-mono text-[#404040]">
                <code>{code}</code>
            </pre>
            <button
                onClick={handleCopy}
                className={`absolute top-3 right-3 text-xs text-[#707070] hover:text-[#111] transition-colors duration-200 cursor-pointer`}
            >
                {copied ? "copied" : "copy"}
            </button>
        </div>
    )
}