const radii = [
  { name: 'radius-sm', value: '8px', usage: 'Inputs, chips, small buttons' },
  { name: 'radius-md', value: '12px', usage: 'Cards' },
  { name: 'radius-lg', value: '16px', usage: 'Panels' },
  { name: 'radius-xl', value: '24px', usage: 'Feature cards' },
  { name: 'radius-2xl', value: '32px', usage: 'Hero tiles' },
  { name: 'radius-pill', value: '999px', usage: 'Badges, pills, toggles' },
]

const shadows = [
  { name: 'shadow-xs', value: '0 1px 1px rgba(0,0,49,.08)', usage: 'Chips, toggles' },
  { name: 'shadow-sm', value: '0 1px 2px rgba(0,0,49,.16)', usage: 'Buttons' },
  { name: 'shadow-md', value: '0 4px 8px rgba(0,0,49,.06)', usage: 'Cards' },
  { name: 'shadow-lg', value: '0 8px 24px rgba(0,0,49,.10)', usage: 'Floating panels' },
  { name: 'shadow-xl', value: '0 32px 80px rgba(0,0,49,.12)', usage: 'Modals' },
]

export function RadiiShadowsSection() {
  return (
    <section id="radii-shadows" className="space-y-10">
      <div>
        <h2 className="ds-h2 mb-1">Radii & Shadows</h2>
        <p className="ds-body-sm" style={{ color: 'var(--fg-tertiary)' }}>
          Shadows use navy tint <code className="ds-mono px-1 rounded" style={{ background: 'var(--muted)' }}>rgba(0,0,49,…)</code> — not pure black — for a cohesive dark-navy aesthetic.
        </p>
      </div>

      <div>
        <p className="text-label mb-4">Corner radii</p>
        <div className="flex flex-wrap gap-4">
          {radii.map(({ name, value, usage }) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <div
                className="w-24 h-16 flex items-center justify-content-center"
                style={{
                  background: '#fff',
                  border: '1px solid var(--stroke-default)',
                  borderRadius: value === '999px' ? 999 : value,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: 13,
                  color: 'var(--fg-primary)',
                }}
              >
                {value}
              </div>
              <div className="text-center">
                <p className="ds-mono" style={{ color: 'var(--fg-primary)' }}>{name}</p>
                <p className="ds-mono">{usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-label mb-4">Shadows</p>
        <div className="flex flex-wrap gap-6" style={{ background: 'var(--neutral-100)', padding: 24, borderRadius: 12 }}>
          {shadows.map(({ name, usage }) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <div
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  width: 120,
                  height: 80,
                  boxShadow: `var(--${name})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: 13,
                  color: 'var(--fg-primary)',
                }}
              >
                {name.replace('shadow-', '')}
              </div>
              <div className="text-center">
                <p className="ds-mono" style={{ color: 'var(--fg-primary)' }}>{name}</p>
                <p className="ds-mono">{usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
