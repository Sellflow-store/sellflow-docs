const chips = [
  { label: 'All', style: { background: '#fff', color: 'var(--fg-primary)', border: '1px solid var(--stroke-default)' } },
  { label: 'Dresses', style: { background: 'var(--primary-500)', color: '#fff', border: '1px solid var(--primary-500)' } },
  { label: 'Outerwear', style: { background: '#fff', color: 'var(--fg-primary)', border: '1px solid var(--stroke-default)' } },
  { label: 'Under $100 ✕', style: { background: 'var(--primary-50)', color: 'var(--primary-500)', border: '1px solid var(--primary-200)' } },
]

const badges = [
  { label: 'Sale', style: { background: 'var(--primary-500)', color: '#fff' } },
  { label: 'New', style: { background: 'var(--success-600)', color: '#fff' } },
  { label: 'Members', style: { background: 'var(--primary-100)', color: 'var(--primary-700)' } },
  { label: 'Low stock', style: { background: 'var(--warning-100)', color: 'var(--warning-600)' } },
  { label: 'Sold out', style: { background: 'var(--critical-100)', color: 'var(--critical-600)' } },
]

export function ChipsBadgesSection() {
  return (
    <section id="chips-badges" className="space-y-8">
      <div>
        <h2 className="ds-h2 mb-1">Chips & Badges</h2>
        <p className="ds-body-sm" style={{ color: 'var(--fg-tertiary)' }}>
          Pills (radius 999 px) for filter chips and status badges. Selected state uses primary navy fill.
        </p>
      </div>

      <div>
        <p className="text-label mb-4">Filter chips</p>
        <div className="flex flex-wrap gap-2">
          {chips.map(({ label, style }) => (
            <button
              key={label}
              style={{
                ...style as React.CSSProperties,
                fontFamily: 'inherit',
                fontSize: 13,
                fontWeight: 500,
                padding: '8px 14px',
                borderRadius: 999,
                cursor: 'pointer',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-label mb-4">Badges</p>
        <div className="flex flex-wrap gap-2">
          {badges.map(({ label, style }) => (
            <span
              key={label}
              style={{
                ...style as React.CSSProperties,
                fontSize: 11,
                fontWeight: 600,
                padding: '5px 10px',
                borderRadius: 999,
                letterSpacing: '0.02em',
                fontFamily: 'inherit',
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
