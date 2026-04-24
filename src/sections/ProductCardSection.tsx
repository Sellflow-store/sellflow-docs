import { ProductCard, WishlistProvider, QuickViewProvider } from '@sellflow/design-system'
import { mockProduct, mockProductNew, mockProductBestseller } from '../mock'

export function ProductCardSection() {
  return (
    <section id="product-card" className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-1">Product Card</h2>
        <p className="text-muted-foreground">
          Core e-commerce card with image, badge, color swatches, price, and wishlist. Accepts a <code className="font-mono text-sm bg-muted px-1 rounded">Product</code> object.
        </p>
      </div>

      <WishlistProvider>
        <QuickViewProvider>
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">Badge Variants</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <ProductCard product={mockProductBestseller} />
              <ProductCard product={mockProductNew} />
              <ProductCard product={mockProduct} />
            </div>
          </div>
        </QuickViewProvider>
      </WishlistProvider>

      <div className="p-4 bg-muted rounded-lg">
        <p className="text-xs font-mono text-muted-foreground mb-2">Usage</p>
        <pre className="text-xs font-mono text-foreground overflow-x-auto">{`import { ProductCard } from '@sellflow/design-system'

<ProductCard product={product} />`}</pre>
      </div>
    </section>
  )
}
