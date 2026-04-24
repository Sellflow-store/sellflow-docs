import type { Product, HeroSlide } from '@sellflow/design-system'

export const mockProduct: Product = {
  id: 'prod-1',
  name: 'Courier Runner',
  slug: 'courier-runner',
  category: 'unisex',
  productCategory: 'shoes',
  collections: ['new-arrivals'],
  price: 149,
  originalPrice: 189,
  colors: [
    { name: 'Charcoal', hex: '#212121', image: '' },
    { name: 'Cream', hex: '#ece9e2', image: '' },
    { name: 'Sage', hex: '#8a9e8a', image: '' },
  ],
  sizes: [38, 39, 40, 41, 42, 43, 44, 45],
  description: 'A versatile everyday runner built for comfort and style. Lightweight mesh upper with a responsive sole.',
  features: ['Breathable mesh upper', 'Cushioned midsole', 'Durable rubber outsole', 'Reflective details'],
  materials: '100% recycled mesh upper, EVA midsole, rubber outsole',
  care: 'Machine wash cold, air dry',
  badge: 'sale',
  images: [],
  type: 'runner',
  material: 'mesh',
  rating: 4.7,
  reviewCount: 142,
  tags: ['running', 'everyday', 'lightweight'],
  sellerId: 'seller-1',
}

export const mockProductNew: Product = {
  ...mockProduct,
  id: 'prod-2',
  name: 'Wool Walker',
  slug: 'wool-walker',
  badge: 'new',
  price: 179,
  originalPrice: undefined,
  material: 'wool',
  type: 'walker',
  colors: [
    { name: 'Oat', hex: '#d4c9b8', image: '' },
    { name: 'Navy', hex: '#1e3a5f', image: '' },
  ],
}

export const mockProductBestseller: Product = {
  ...mockProduct,
  id: 'prod-3',
  name: 'Tree Slip-On',
  slug: 'tree-slip-on',
  badge: 'bestseller',
  price: 129,
  originalPrice: undefined,
  material: 'tree-fiber',
  type: 'slip-on',
  colors: [
    { name: 'White', hex: '#ffffff', image: '' },
    { name: 'Black', hex: '#000000', image: '' },
    { name: 'Stone', hex: '#9e9e88', image: '' },
    { name: 'Rust', hex: '#b85c38', image: '' },
  ],
}

export const mockHeroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    subtitle: 'New Collection',
    title: 'Move Freely,\nLive Boldly',
    image: '',
    ctaLinks: [
      { label: 'Shop Now', href: '#' },
      { label: 'Learn More', href: '#' },
    ],
  },
  {
    id: 'slide-2',
    subtitle: 'Bestsellers',
    title: 'Crafted for\nEvery Step',
    image: '',
    ctaLinks: [
      { label: 'Explore', href: '#' },
    ],
  },
]
