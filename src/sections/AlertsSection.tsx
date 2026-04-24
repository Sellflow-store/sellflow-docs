const alerts = [
  {
    type: 'info',
    icon: 'ph-info',
    title: 'Free shipping unlocked',
    body: 'You qualify for free shipping on orders over $75.',
    style: { background: 'var(--primary-50)', border: '1px solid var(--primary-200)', color: 'var(--primary-900)' },
    iconColor: 'var(--primary-500)',
  },
  {
    type: 'success',
    icon: 'ph-check-circle',
    title: 'Added to your bag',
    body: 'Courier Runner · size 42 · 1 in stock.',
    style: { background: 'var(--success-50)', border: '1px solid #b7e7d4', color: '#0a5a48' },
    iconColor: 'var(--success-600)',
  },
  {
    type: 'warning',
    icon: 'ph-warning',
    title: 'Low stock',
    body: 'Only 2 left in this size. Order soon.',
    style: { background: 'var(--warning-50)', border: '1px solid var(--warning-100)', color: 'var(--warning-700)' },
    iconColor: 'var(--warning-600)',
  },
  {
    type: 'critical',
    icon: 'ph-x-circle',
    title: 'Card declined',
    body: 'Try a different payment method, or contact your bank.',
    style: { background: 'var(--critical-50)', border: '1px solid var(--critical-100)', color: 'var(--critical-700)' },
    iconColor: 'var(--critical-600)',
  },
]

export function AlertsSection() {
  return (
    <section id="alerts" className="space-y-8">
      <div>
        <h2 className="ds-h2 mb-1">Alerts</h2>
        <p className="ds-body-sm" style={{ color: 'var(--fg-tertiary)' }}>
          Radius 12 px. Use Phosphor icons — fill variant for system confirms. Magenta only for critical/destructive.
        </p>
      </div>

      <div className="flex flex-col gap-3 max-w-lg">
        {alerts.map(({ type, icon, title, body, style, iconColor }) => (
          <div
            key={type}
            style={{
              ...style as React.CSSProperties,
              display: 'flex',
              gap: 12,
              padding: '14px 16px',
              borderRadius: 12,
              fontSize: 14,
              lineHeight: 1.4,
              fontFamily: 'inherit',
            }}
          >
            <i className={`ph ${icon}`} style={{ fontSize: 18, lineHeight: 1.2, flexShrink: 0, color: iconColor }} />
            <div>
              <strong style={{ fontWeight: 600, display: 'block', marginBottom: 2 }}>{title}</strong>
              {body}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
