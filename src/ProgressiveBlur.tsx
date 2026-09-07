
export default function ProgressiveBlur() {
    const layers = [
        { blur: 12 },
        { blur: 8 },
        { blur: 4 },
        { blur: 2 },
        { blur: 1 },
    ]
    const n = layers.length

    return (
        <div
            aria-hidden
            className="pointer-events-none fixed top-0 left-0 right-0 h-14 z-40"
        >
            {layers.map((layer, i) => {
                const stop0 = Math.max(0, ((i - 1) / n) * 100)
                const stop1 = (i / n) * 100
                const stop2 = ((i + 1) / n) * 100
                const stop3 = Math.min(100, ((i + 2) / n) * 100)

                const mask = `linear-gradient(to bottom, transparent ${stop0}%, black ${stop1}%, black ${stop2}%, transparent ${stop3}%)`

                return (
                    <div
                        key={i}
                        className="absolute inset-0"
                        style={{
                            backdropFilter: `blur(${layer.blur}px)`,
                            WebkitBackdropFilter: `blur(${layer.blur}px)`,
                            maskImage: mask,
                            WebkitMaskImage: mask,
                        }}
                    />
                )
            })}
        </div>
    )
}