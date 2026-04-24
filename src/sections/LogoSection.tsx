const scriptStyle: React.CSSProperties = {
  fontFamily: 'Caveat, cursive',
  fontWeight: 400,
  lineHeight: 1,
  display: 'block',
}

function Tile({ bg, border, children, style }: {
  bg: string
  border?: string
  children: React.ReactNode
  style?: React.CSSProperties
}) {
  return (
    <div
      style={{
        background: bg,
        border: `1px solid ${border ?? '#B8FFFF'}`,
        borderRadius: 16,
        minHeight: 92,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '28px 34px',
        position: 'relative',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--fg-tertiary)', marginBottom: 10, fontFamily: 'inherit' }}>
      {children}
    </p>
  )
}

export function LogoSection() {
  return (
    <section id="logo" className="space-y-8">
      <div>
        <h2 className="ds-h2 mb-1">Wordmark</h2>
        <p className="ds-body-sm" style={{ color: 'var(--fg-tertiary)' }}>
          Logo PNG at height ≥ 20 px. On dark surfaces use <code className="ds-mono px-1 rounded" style={{ background: 'var(--muted)' }}>filter: brightness(0) invert(1)</code>.
          The <em>hello!</em> mark is a Caveat script accent — brand signature, not a product icon.
        </p>
      </div>

      <div className="flex flex-wrap gap-6">
        {/* Wordmark · lockup with accent */}
        <div>
          <Label>Wordmark · lockup with accent</Label>
          <Tile bg="#fff">
            <img src="/sellflow-logo.png" alt="Sellflow" style={{ height: 44, display: 'block' }} />
            <span style={{
              ...scriptStyle,
              position: 'absolute',
              top: -12,
              right: -16,
              fontSize: 48,
              color: '#DB00B2',
              transform: 'rotate(-8deg)',
              textShadow: '0 3px 10px rgba(219,0,178,.28)',
              pointerEvents: 'none',
            }}>
              hello!
            </span>
          </Tile>
        </div>

        {/* Wordmark · muted */}
        <div>
          <Label>Wordmark · muted</Label>
          <Tile bg="#E6FFFF">
            <img src="/sellflow-logo.png" alt="Sellflow" style={{ height: 44, display: 'block' }} />
          </Tile>
        </div>

        {/* Wordmark · inverse */}
        <div>
          <Label>Wordmark · inverse</Label>
          <Tile bg="#000031" border="#000031">
            <img
              src="/sellflow-logo.png"
              alt="Sellflow"
              style={{ height: 44, display: 'block', filter: 'brightness(0) invert(1)' }}
            />
          </Tile>
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        {/* hello! mark · primary */}
        <div>
          <Label>hello! mark · primary</Label>
          <Tile bg="#fff">
            <span style={{ ...scriptStyle, fontSize: 84, color: '#DB00B2', transform: 'rotate(-6deg)' }}>
              hello!
            </span>
          </Tile>
        </div>

        {/* hello! mark · on dark */}
        <div>
          <Label>hello! mark · on dark</Label>
          <Tile bg="#000031" border="#000031">
            <span style={{
              ...scriptStyle,
              fontSize: 84,
              color: '#fff',
              transform: 'rotate(-6deg)',
              textShadow: '0 2px 14px rgba(219,0,178,.45)',
            }}>
              hello!
            </span>
          </Tile>
        </div>

        {/* hello! mark · on pink */}
        <div>
          <Label>hello! mark · on pink</Label>
          <Tile bg="#DB00B2" border="#DB00B2">
            <span style={{ ...scriptStyle, fontSize: 84, color: '#fff', transform: 'rotate(-6deg)' }}>
              hello!
            </span>
          </Tile>
        </div>
      </div>
    </section>
  )
}
