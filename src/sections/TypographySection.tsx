const typeScale = [
  { label: 'display', spec: '72 / 1.2 / -0.02em / 500', cls: 'ds-display', sample: 'Headings set the pace', style: { fontSize: 48 } },
  { label: 'h1', spec: '48 / 1.2 / -0.01em / 600', cls: 'ds-h1', sample: 'This season\'s looks', style: { fontSize: 34 } },
  { label: 'h2', spec: '32 / 1.2 / -0.005em / 600', cls: 'ds-h2', sample: 'Curated for you', style: { fontSize: 26 } },
  { label: 'h3', spec: '24 / 1.4 / 0 / 600', cls: 'ds-h3', sample: 'New arrivals weekly', style: {} },
  { label: 'h4', spec: '20 / 1.4 / 0 / 600', cls: 'ds-h4', sample: 'Item Name', style: {} },
  { label: 'h5', spec: '16 / 1.4 / 0 / 600', cls: 'ds-h5', sample: 'Section title', style: {} },
]

const bodyScale = [
  { label: 'body-lg', spec: '18px / 1.5 / 400', cls: 'ds-body-lg', sample: "We're glad you're here. Here's some important info to get started." },
  { label: 'body', spec: '16px / 1.5 / 400', cls: 'ds-body', sample: 'Direct, warm, second person. Short sentences. Descriptive, not salesy.' },
  { label: 'body-sm', spec: '14px / 1.5 / 400', cls: 'ds-body-sm', sample: 'From $99 · 3 variants · lowest in 30 days' },
  { label: 'caption', spec: '12px / 1.4 / 500 / uppercase', cls: 'ds-caption', sample: 'EYEBROW TEXT · CATEGORY LABEL' },
  { label: 'mono', spec: '12px / 1.4 / 500', cls: 'ds-mono', sample: '--primary-500 = #00007D' },
]

export function TypographySection() {
  return (
    <section id="typography" className="space-y-10">
      <div>
        <h2 className="ds-h2 mb-1">Typography</h2>
        <p className="ds-body-sm" style={{ color: 'var(--fg-tertiary)' }}>
          One family: <strong>Space Grotesk</strong> (variable, 300–700). Self-hosted. Display to caption — a single voice.
        </p>
      </div>

      <div>
        <p className="text-label mb-3">Headings</p>
        <div className="divide-y" style={{ borderColor: 'var(--stroke-subtle)' }}>
          {typeScale.map(({ label, spec, cls, sample, style }) => (
            <div key={label} className="flex items-baseline justify-between py-3 gap-4">
              <span className={cls} style={style}>{sample}</span>
              <div className="text-right shrink-0">
                <span className="ds-mono block">{label}</span>
                <span className="ds-mono">{spec}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-label mb-3">Body & utility</p>
        <div className="divide-y" style={{ borderColor: 'var(--stroke-subtle)' }}>
          {bodyScale.map(({ label, spec, cls, sample }) => (
            <div key={label} className="flex items-baseline justify-between py-3 gap-4">
              <span className={cls}>{sample}</span>
              <div className="text-right shrink-0">
                <span className="ds-mono block">{label}</span>
                <span className="ds-mono">{spec}</span>
              </div>
            </div>
          ))}
          <div className="flex items-baseline justify-between py-3 gap-4">
            <span style={{ fontFamily: 'Caveat, cursive', fontSize: 40, lineHeight: 1.1, color: 'var(--primary-500)' }}>hello!</span>
            <div className="text-right shrink-0">
              <span className="ds-mono block">script</span>
              <span className="ds-mono">Caveat / decorative</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
