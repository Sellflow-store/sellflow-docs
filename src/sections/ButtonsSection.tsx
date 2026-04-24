import { Button } from '@sellflow/design-system'

type Variant = 'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link'
const variants: Variant[] = ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link']
const labels: Record<Variant, string> = {
  default: 'Default', outline: 'Outline', secondary: 'Secondary',
  ghost: 'Ghost', destructive: 'Destructive', link: 'Link',
}

const nativeButtons = [
  { label: 'Add to bag', cls: 'primary-lg', style: { background: 'var(--primary-500)', color: '#fff', fontSize: 16, padding: '14px 24px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500, boxShadow: 'var(--shadow-sm)' } },
  { label: 'Add to bag', cls: 'primary-md', style: { background: 'var(--primary-500)', color: '#fff', fontSize: 14, padding: '10px 18px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500, boxShadow: 'var(--shadow-sm)' } },
  { label: 'Save', cls: 'primary-sm', style: { background: 'var(--primary-500)', color: '#fff', fontSize: 12, padding: '6px 14px', borderRadius: 8, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500 } },
  { label: 'Sold out', cls: 'primary-disabled', style: { background: 'var(--primary-500)', color: '#fff', fontSize: 14, padding: '10px 18px', borderRadius: 10, border: 'none', cursor: 'not-allowed', fontFamily: 'inherit', fontWeight: 500, opacity: 0.4 } },
]

const secondaryButtons = [
  { label: 'Secondary', style: { background: '#fff', color: 'var(--primary-500)', fontSize: 14, padding: '10px 18px', borderRadius: 10, border: '1px solid var(--primary-200)', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500 } },
  { label: 'Tertiary', style: { background: 'transparent', color: 'var(--fg-primary)', fontSize: 14, padding: '10px 18px', borderRadius: 10, border: '1px solid transparent', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500 } },
  { label: 'Text link →', style: { background: 'transparent', color: 'var(--primary-500)', fontSize: 14, padding: '10px 0', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500 } },
  { label: 'Destructive', style: { background: 'var(--critical-500)', color: '#fff', fontSize: 14, padding: '10px 18px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500, boxShadow: 'var(--shadow-sm)' } },
]

export function ButtonsSection() {
  return (
    <section id="buttons" className="space-y-10">
      <div>
        <h2 className="ds-h2 mb-1">Buttons</h2>
        <p className="ds-body-sm" style={{ color: 'var(--fg-tertiary)' }}>
          Radius 10 px standard, 8 px small. Navy-tinted shadows. No scale on press — shadow drop only.
        </p>
      </div>

      <div>
        <p className="text-label mb-4">Primary — sizes & states</p>
        <div className="p-5 rounded-xl flex flex-wrap gap-3 items-center" style={{ background: 'var(--surface-subtle)', border: '1px solid var(--stroke-subtle)' }}>
          {nativeButtons.map((b) => (
            <button key={b.cls} style={b.style as React.CSSProperties}>{b.label}</button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-label mb-4">Secondary, tertiary, text, destructive</p>
        <div className="p-5 rounded-xl flex flex-wrap gap-3 items-center" style={{ background: 'var(--surface-subtle)', border: '1px solid var(--stroke-subtle)' }}>
          {secondaryButtons.map((b) => (
            <button key={b.label} style={b.style as React.CSSProperties}>{b.label}</button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-label mb-4">React component variants</p>
        <div className="p-5 rounded-xl grid grid-cols-2 sm:grid-cols-3 gap-4" style={{ background: 'var(--surface-subtle)', border: '1px solid var(--stroke-subtle)' }}>
          {variants.map((v) => (
            <div key={v} className="flex flex-col gap-2">
              <span className="ds-mono">{v}</span>
              <Button variant={v}>{labels[v]}</Button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-label mb-4">CSS utilities</p>
        <div className="p-5 rounded-xl flex flex-wrap gap-4 items-center" style={{ background: 'var(--surface-subtle)', border: '1px solid var(--stroke-subtle)' }}>
          <div className="flex flex-col items-start gap-2">
            <a href="#" className="btn-cta">Shop now</a>
            <span className="ds-mono">.btn-cta</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <a href="#" className="btn-cta-outline">Learn more</a>
            <span className="ds-mono">.btn-cta-outline</span>
          </div>
        </div>
      </div>
    </section>
  )
}
