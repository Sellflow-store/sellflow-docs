const coreTokens = [
  { name: 'Primary', token: 'primary', hex: '#00007D', textColor: '#ffffff' },
  { name: 'Background', token: 'background', hex: '#ffffff', textColor: '#000031' },
  { name: 'Foreground', token: 'foreground', hex: '#000031', textColor: '#ffffff' },
  { name: 'Muted', token: 'muted', hex: '#E6FFFF', textColor: '#000031' },
  { name: 'Muted FG', token: 'muted-foreground', hex: '#234B6F', textColor: '#ffffff' },
  { name: 'Border', token: 'border', hex: '#B8FFFF', textColor: '#000031' },
  { name: 'Input', token: 'input', hex: '#B8FFFF', textColor: '#000031' },
  { name: 'Destructive', token: 'destructive', hex: '#DB00B2', textColor: '#ffffff' },
]

const navyScale = [
  { step: '50',  hex: '#e6e6f2' }, { step: '100', hex: '#ccccea' },
  { step: '200', hex: '#9999d2' }, { step: '300', hex: '#6666bb' },
  { step: '400', hex: '#3333a3' }, { step: '500', hex: '#00007d' },
  { step: '600', hex: '#00006b' }, { step: '700', hex: '#000058' },
  { step: '800', hex: '#000045' }, { step: '900', hex: '#000031' },
  { step: '950', hex: '#00001f' },
]

const cyanScale = [
  { step: '50',  hex: '#f5ffff' }, { step: '100', hex: '#e6ffff' },
  { step: '200', hex: '#d2ffff' }, { step: '300', hex: '#b8ffff' },
  { step: '400', hex: '#8cf2f2' }, { step: '500', hex: '#5fd9d9' },
  { step: '600', hex: '#3fbfbf' }, { step: '700', hex: '#2a9a9a' },
  { step: '800', hex: '#1d7373' }, { step: '900', hex: '#0f4d4d' },
]

const semanticStatus = [
  { name: 'Success', hex: '#008f79', textColor: '#ffffff' },
  { name: 'Warning', hex: '#ac7302', textColor: '#ffffff' },
  { name: 'Critical', hex: '#db00b2', textColor: '#ffffff' },
]

function ScaleSwatch({ step, hex }: { step: string; hex: string }) {
  const isLight = parseInt(step) <= 200
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="w-full h-10 rounded-lg" style={{ backgroundColor: hex }} />
      <span className="text-xs font-mono" style={{ color: 'var(--fg-tertiary)' }}>{step}</span>
      <span className="text-xs font-mono" style={{ color: 'var(--fg-tertiary)', fontSize: 10 }}>{hex}</span>
    </div>
  )
}

function CoreSwatch({ name, token, hex, textColor }: { name: string; token: string; hex: string; textColor: string }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--stroke-subtle)' }}>
      <div className="px-4 pt-5 pb-4 flex flex-col gap-5" style={{ backgroundColor: hex, color: textColor }}>
        <p style={{ fontFamily: 'Caveat, cursive', fontSize: 32, fontWeight: 400, lineHeight: 1.1, margin: 0 }}>
          hello!
        </p>
        <div>
          <p style={{ fontSize: 12, fontWeight: 500, margin: 0, opacity: 0.85 }}>
            {name.toLowerCase()} · {token}
          </p>
          <p style={{ fontSize: 11, fontFamily: 'monospace', margin: 0, opacity: 0.6, marginTop: 2 }}>{hex}</p>
        </div>
      </div>
    </div>
  )
}

export function ColorsSection() {
  return (
    <section id="colors" className="space-y-12">
      <div>
        <h2 className="ds-h2 mb-1">Colors</h2>
        <p className="ds-body-sm" style={{ color: 'var(--fg-tertiary)' }}>
          Deep navy + cyan-tint palette. Strokes are always cyan-tinted — never gray. Magenta is the alarm color.
        </p>
      </div>

      <div>
        <p className="text-label mb-4">Core tokens</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {coreTokens.map((c) => (
            <CoreSwatch key={c.token} {...c} />
          ))}
        </div>
      </div>

      <div>
        <p className="text-label mb-4">Primary navy scale</p>
        <div className="grid grid-cols-6 sm:grid-cols-11 gap-2">
          {navyScale.map((s) => <ScaleSwatch key={s.step} {...s} />)}
        </div>
      </div>

      <div>
        <p className="text-label mb-4">Cyan tint scale</p>
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {cyanScale.map((s) => <ScaleSwatch key={s.step} {...s} />)}
        </div>
      </div>

      <div>
        <p className="text-label mb-4">Semantic status</p>
        <div className="grid grid-cols-3 gap-3 max-w-sm">
          {semanticStatus.map((c) => (
            <div key={c.name} className="flex flex-col gap-2">
              <div className="h-12 rounded-lg" style={{ backgroundColor: c.hex }} />
              <div>
                <p className="ds-caption font-medium" style={{ color: 'var(--fg-primary)' }}>{c.name}</p>
                <p className="ds-mono">{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
