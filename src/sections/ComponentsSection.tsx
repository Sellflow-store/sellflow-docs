import { ColorSwatches, SizeSelector, ProductDetailsAccordion } from '@sellflow/design-system'
import { mockProduct } from '../mock'
import { useState } from 'react'

function ColorSwatchesDemo() {
  const [selected, setSelected] = useState(mockProduct.colors[0])
  return (
    <div className="p-5 bg-card rounded-lg border border-border space-y-3">
      <p className="text-xs font-mono text-muted-foreground">ColorSwatches</p>
      <ColorSwatches
        colors={mockProduct.colors}
        selectedColor={selected}
        onSelect={setSelected}
      />
      <p className="text-xs text-muted-foreground">Selected: {selected.name}</p>
    </div>
  )
}

function SizeSelectorDemo() {
  const [selected, setSelected] = useState<number | null>(null)
  return (
    <div className="p-5 bg-card rounded-lg border border-border space-y-3">
      <p className="text-xs font-mono text-muted-foreground">SizeSelector</p>
      <SizeSelector
        sizes={mockProduct.sizes}
        selectedSize={selected}
        onSelect={setSelected}
      />
      {selected && <p className="text-xs text-muted-foreground">Selected: EU {selected}</p>}
    </div>
  )
}

function AccordionDemo() {
  return (
    <div className="p-5 bg-card rounded-lg border border-border space-y-3">
      <p className="text-xs font-mono text-muted-foreground">ProductDetailsAccordion</p>
      <ProductDetailsAccordion product={mockProduct} />
    </div>
  )
}

export function ComponentsSection() {
  return (
    <section id="components" className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-1">Components</h2>
        <p className="text-muted-foreground">
          Interactive product detail components — color swatches, size picker, and accordion.
        </p>
      </div>

      <div className="space-y-4">
        <ColorSwatchesDemo />
        <SizeSelectorDemo />
        <AccordionDemo />
      </div>
    </section>
  )
}
