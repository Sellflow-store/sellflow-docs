import { useState } from 'react'
import { LogoSection } from './sections/LogoSection'
import { ColorsSection } from './sections/ColorsSection'
import { TypographySection } from './sections/TypographySection'
import { ButtonsSection } from './sections/ButtonsSection'
import { IconsSection } from './sections/IconsSection'
import { RadiiShadowsSection } from './sections/RadiiShadowsSection'
import { ChipsBadgesSection } from './sections/ChipsBadgesSection'
import { InputsSection } from './sections/InputsSection'
import { AlertsSection } from './sections/AlertsSection'
import { ProductCardSection } from './sections/ProductCardSection'
import { ComponentsSection } from './sections/ComponentsSection'

const nav = [
  { group: 'Foundation', items: [
    { id: 'logo', label: 'Wordmark' },
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'radii-shadows', label: 'Radii & Shadows' },
  ]},
  { group: 'Components', items: [
    { id: 'buttons', label: 'Buttons' },
    { id: 'inputs', label: 'Inputs' },
    { id: 'chips-badges', label: 'Chips & Badges' },
    { id: 'alerts', label: 'Alerts' },
    { id: 'icons', label: 'Icons' },
  ]},
  { group: 'Commerce', items: [
    { id: 'product-card', label: 'Product Card' },
    { id: 'components', label: 'Components' },
  ]},
]

export default function App() {
  const [active, setActive] = useState('colors')
  const [mobileOpen, setMobileOpen] = useState(false)

  function scrollTo(id: string) {
    setActive(id)
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen flex" style={{ background: 'var(--surface-page)', color: 'var(--fg-primary)' }}>
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-56 shrink-0 h-screen sticky top-0" style={{ background: '#fff', borderRight: '1px solid var(--stroke-default)' }}>
        {/* Logo */}
        <div className="p-5" style={{ borderBottom: '1px solid var(--stroke-default)' }}>
          <img src="/sellflow-logo.png" alt="Sellflow" style={{ height: 22 }} />
          <p className="ds-caption mt-1">Design System</p>
        </div>

        <nav className="flex-1 p-3 overflow-y-auto space-y-4">
          {nav.map(({ group, items }) => (
            <div key={group}>
              <p className="text-label px-3 py-1 mb-1">{group}</p>
              {items.map(({ id, label }) => (
                <NavItem key={id} id={id} label={label} active={active === id} onClick={scrollTo} />
              ))}
            </div>
          ))}
        </nav>

        <div className="p-4" style={{ borderTop: '1px solid var(--stroke-default)' }}>
          <p className="ds-mono">@sellflow/design-system</p>
          <p className="ds-mono">v1.0.0</p>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-12" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--stroke-default)' }}>
        <img src="/sellflow-logo.png" alt="Sellflow" style={{ height: 18 }} />
        <button onClick={() => setMobileOpen(!mobileOpen)} className="ds-body-sm" style={{ color: 'var(--fg-tertiary)' }}>Menu</button>
        {mobileOpen && (
          <div className="absolute top-12 left-0 right-0 p-3 space-y-1" style={{ background: '#fff', borderBottom: '1px solid var(--stroke-default)', boxShadow: 'var(--shadow-lg)' }}>
            {nav.flatMap(({ items }) => items).map(({ id, label }) => (
              <NavItem key={id} id={id} label={label} active={active === id} onClick={scrollTo} />
            ))}
          </div>
        )}
      </div>

      {/* Main content */}
      <main className="flex-1 min-w-0 pt-12 lg:pt-0">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-12 space-y-24">
          {/* Hero */}
          <div style={{ borderBottom: '1px solid var(--stroke-default)', paddingBottom: 40 }}>
            <p className="text-label mb-2" style={{ color: 'var(--fg-tertiary)' }}>@sellflow/design-system</p>
            <h1 className="ds-h1 mb-3">Design System</h1>
            <p className="ds-body" style={{ color: 'var(--fg-tertiary)', maxWidth: 520 }}>
              Confident deep-navy + cyan-tint palette. Space Grotesk. Reusable React components for any Sellflow storefront.
            </p>
            <code className="ds-mono inline-block mt-4 px-3 py-2 rounded-lg" style={{ background: 'var(--muted)' }}>
              npm install github:Sellflow-store/Design-System
            </code>
          </div>

          <LogoSection />
          <ColorsSection />
          <TypographySection />
          <RadiiShadowsSection />
          <ButtonsSection />
          <InputsSection />
          <ChipsBadgesSection />
          <AlertsSection />
          <IconsSection />
          <ProductCardSection />
          <ComponentsSection />
        </div>
      </main>
    </div>
  )
}

function NavItem({ id, label, active, onClick }: { id: string; label: string; active: boolean; onClick: (id: string) => void }) {
  return (
    <button
      onClick={() => onClick(id)}
      className="w-full text-left px-3 py-1.5 rounded-md transition-colors"
      style={{
        fontSize: 14,
        fontWeight: active ? 600 : 400,
        background: active ? 'var(--primary-50)' : 'transparent',
        color: active ? 'var(--primary-500)' : 'var(--fg-primary)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
      }}
    >
      {label}
    </button>
  )
}
