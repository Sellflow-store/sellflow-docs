import { useState } from 'react'

const inputBase: React.CSSProperties = {
  width: '100%',
  border: '1px solid var(--stroke-subtle)',
  borderRadius: 8,
  padding: '10px 12px',
  fontSize: 14,
  lineHeight: 1.2,
  color: 'var(--fg-primary)',
  background: '#fff',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 150ms, box-shadow 150ms',
}

export function InputsSection() {
  const [focused, setFocused] = useState(false)

  return (
    <section id="inputs" className="space-y-8">
      <div>
        <h2 className="ds-h2 mb-1">Inputs</h2>
        <p className="ds-body-sm" style={{ color: 'var(--fg-tertiary)' }}>
          Radius 8 px. Strokes are cyan-tinted. Focus: 2 px navy outline + glow. Error: magenta border.
        </p>
      </div>

      <div className="flex flex-wrap gap-6">
        {/* Default */}
        <div style={{ width: 260 }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: 'var(--fg-primary)', marginBottom: 6, fontFamily: 'inherit' }}>
            Email
          </label>
          <input
            style={inputBase}
            defaultValue="you@sellflow.com"
          />
          <p style={{ fontSize: 11, fontWeight: 500, color: 'var(--fg-tertiary)', marginTop: 4, fontFamily: 'inherit' }}>
            We'll never share your email.
          </p>
        </div>

        {/* Focus state */}
        <div style={{ width: 260 }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: 'var(--fg-primary)', marginBottom: 6, fontFamily: 'inherit' }}>
            Search (focused)
          </label>
          <input
            style={{
              ...inputBase,
              borderColor: 'var(--primary-500)',
              boxShadow: 'var(--shadow-focus)',
            }}
            placeholder="Search products…"
          />
          <p className="ds-mono" style={{ marginTop: 4 }}>2px navy + glow</p>
        </div>

        {/* Error state */}
        <div style={{ width: 260 }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: 'var(--fg-primary)', marginBottom: 6, fontFamily: 'inherit' }}>
            Size
          </label>
          <input
            style={{ ...inputBase, borderColor: 'var(--critical-500)' }}
            placeholder=""
          />
          <p style={{ fontSize: 11, fontWeight: 500, color: 'var(--critical-600)', marginTop: 4, fontFamily: 'inherit' }}>
            Please select a size.
          </p>
        </div>

        {/* Select */}
        <div style={{ width: 260 }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: 'var(--fg-primary)', marginBottom: 6, fontFamily: 'inherit' }}>
            Country
          </label>
          <select style={inputBase}>
            <option>United States</option>
            <option>Poland</option>
            <option>Germany</option>
          </select>
        </div>

        {/* Checkboxes */}
        <div style={{ width: '100%', display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {['Subscribe to updates', 'Gift wrap (+$5)'].map((label, i) => (
            <label key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500, color: 'var(--fg-primary)', cursor: 'pointer', fontFamily: 'inherit' }}>
              <input
                type="checkbox"
                defaultChecked={i === 0}
                style={{ accentColor: 'var(--primary-500)', width: 18, height: 18 }}
              />
              {label}
            </label>
          ))}
        </div>
      </div>
    </section>
  )
}
