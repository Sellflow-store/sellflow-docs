import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { Button as Button$1 } from '@base-ui/react/button';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, ...props }: Button$1.Props & VariantProps<typeof buttonVariants>): react_jsx_runtime.JSX.Element;

interface Seller {
    id: string;
    name: string;
    slug: string;
    description: string;
    logo: string;
    joinedYear: number;
    rating: number;
}

interface ProductColor {
    name: string;
    hex: string;
    image: string;
}
type ShoeType = "runner" | "walker" | "slip-on" | "trainer" | "flat" | "hiker" | "slide" | "loafer" | "sock" | "tee" | "hoodie" | "pant" | "jacket" | "cardigan" | "bag" | "beanie" | "cap" | "insole";
type ShoeMaterial = "mesh" | "wool" | "tree-fiber" | "knit" | "leather";
type ProductCategory = "shoes" | "socks" | "apparel" | "accessories";
interface Product {
    id: string;
    name: string;
    slug: string;
    category: "men" | "women" | "unisex";
    productCategory: ProductCategory;
    collections: string[];
    price: number;
    originalPrice?: number;
    colors: ProductColor[];
    sizes: number[];
    description: string;
    features: string[];
    materials: string;
    care: string;
    badge?: "new" | "new-color" | "bestseller" | "sale";
    images: string[];
    type: ShoeType;
    material: ShoeMaterial;
    rating: number;
    reviewCount: number;
    tags: string[];
    sellerId: string;
}
interface Collection {
    id: string;
    name: string;
    slug: string;
    description: string;
    heroImage: string;
}
interface CartItem {
    product: Product;
    color: ProductColor;
    size: number;
    quantity: number;
}
interface HeroSlide {
    id: string;
    subtitle: string;
    title: string;
    image: string;
    ctaLinks: {
        label: string;
        href: string;
    }[];
}

interface ShellProps {
    children: React.ReactNode;
    products?: Product[];
}
declare function Shell({ children, products }: ShellProps): react_jsx_runtime.JSX.Element;

interface HeaderProps {
    onCartOpen?: () => void;
    cartCount?: number;
    wishlistCount?: number;
    products?: Product[];
}
declare function Header({ onCartOpen, cartCount, wishlistCount, products }: HeaderProps): react_jsx_runtime.JSX.Element;

declare function Footer(): react_jsx_runtime.JSX.Element;

declare function AnnouncementBar(): react_jsx_runtime.JSX.Element;

interface ProductCardProps {
    product: Product;
    className?: string;
    seller?: Seller;
}
declare function ProductCard({ product, className, seller }: ProductCardProps): react_jsx_runtime.JSX.Element;

interface ProductGridProps {
    products: Product[];
    sellers?: Seller[];
}
declare function ProductGrid({ products, sellers }: ProductGridProps): react_jsx_runtime.JSX.Element;

interface ProductInfoProps {
    product: Product;
    seller?: Seller;
}
declare function ProductInfo({ product, seller }: ProductInfoProps): react_jsx_runtime.JSX.Element;

interface ProductDetailsAccordionProps {
    product: Product;
}
declare function ProductDetailsAccordion({ product }: ProductDetailsAccordionProps): react_jsx_runtime.JSX.Element;

interface ColorSwatchesProps {
    colors: ProductColor[];
    selectedColor: ProductColor;
    onSelect: (color: ProductColor) => void;
}
declare function ColorSwatches({ colors, selectedColor, onSelect }: ColorSwatchesProps): react_jsx_runtime.JSX.Element;

interface SizeSelectorProps {
    sizes: number[];
    selectedSize: number | null;
    onSelect: (size: number) => void;
}
declare function SizeSelector({ sizes, selectedSize, onSelect }: SizeSelectorProps): react_jsx_runtime.JSX.Element;

interface ImageGalleryProps {
    images: string[];
    productName: string;
    colorName?: string;
    colorHex?: string;
}
declare function ImageGallery({ images, productName, colorName, colorHex }: ImageGalleryProps): react_jsx_runtime.JSX.Element;

interface WishlistButtonProps {
    productId: string;
    className?: string;
}
declare function WishlistButton({ productId, className }: WishlistButtonProps): react_jsx_runtime.JSX.Element;

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onUpdateQuantity: (index: number, quantity: number) => void;
    onRemove: (index: number) => void;
}
declare function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemove, }: CartDrawerProps): react_jsx_runtime.JSX.Element;

declare function MegaMenuNav(): react_jsx_runtime.JSX.Element;
declare function MobileMegaMenuContent({ onLinkClick }: {
    onLinkClick: () => void;
}): react_jsx_runtime.JSX.Element;

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    products?: Product[];
}
declare function SearchModal({ isOpen, onClose, products }: SearchModalProps): react_jsx_runtime.JSX.Element | null;

interface CollectionHeroProps {
    collection: Collection;
}
declare function CollectionHero({ collection }: CollectionHeroProps): react_jsx_runtime.JSX.Element;

interface CollectionViewProps {
    products: Product[];
    collectionName: string;
    sellers?: Seller[];
    initialSellerSlug?: string;
}
declare function CollectionView({ products, collectionName, sellers, initialSellerSlug }: CollectionViewProps): react_jsx_runtime.JSX.Element;

type GenderFilter$1 = "all" | "men" | "women";
type SortOption = "featured" | "price-asc" | "price-desc" | "newest";
type PriceRange$1 = "all" | "under-100" | "100-130" | "over-130";
interface FilterBarProps {
    productCount: number;
    onFilterChange: (gender: GenderFilter$1) => void;
    onSortChange: (sort: SortOption) => void;
    onPriceRangeChange: (range: PriceRange$1) => void;
    onShoeTypeChange: (types: ShoeType[]) => void;
    onMaterialChange: (materials: ShoeMaterial[]) => void;
    activeFilterCount: number;
}
declare function FilterBar({ productCount, onFilterChange, onSortChange, onPriceRangeChange, onShoeTypeChange, onMaterialChange, activeFilterCount, }: FilterBarProps): react_jsx_runtime.JSX.Element;

type GenderFilter = "all" | "men" | "women";
type PriceRange = "all" | "under-100" | "100-130" | "over-130";
interface FilterSidebarProps {
    gender: GenderFilter;
    priceRange: PriceRange;
    shoeTypes: ShoeType[];
    materials: ShoeMaterial[];
    sizes: number[];
    availableTypes?: ShoeType[];
    sellerSlugs: string[];
    sellers?: Seller[];
    onGenderChange: (gender: GenderFilter) => void;
    onPriceRangeChange: (range: PriceRange) => void;
    onShoeTypeChange: (types: ShoeType[]) => void;
    onMaterialChange: (materials: ShoeMaterial[]) => void;
    onSizesChange: (sizes: number[]) => void;
    onSellerChange: (slugs: string[]) => void;
    onClearAll: () => void;
    activeFilterCount: number;
}
declare function FilterSidebar({ gender, priceRange, shoeTypes, materials, sizes, availableTypes, sellerSlugs, sellers, onGenderChange, onPriceRangeChange, onShoeTypeChange, onMaterialChange, onSizesChange, onSellerChange, onClearAll, activeFilterCount, }: FilterSidebarProps): react_jsx_runtime.JSX.Element;

interface RelatedProductsProps {
    products: Product[];
}
declare function RelatedProducts({ products }: RelatedProductsProps): react_jsx_runtime.JSX.Element | null;

declare function trackRecentlyViewed(productId: string): void;
interface RecentlyViewedProps {
    currentProductId: string;
    allProducts: Product[];
}
declare function RecentlyViewed({ currentProductId, allProducts }: RecentlyViewedProps): react_jsx_runtime.JSX.Element | null;

interface QuickViewModalProps {
    product: Product;
    onClose: () => void;
}
declare function QuickViewModal({ product, onClose }: QuickViewModalProps): react_jsx_runtime.JSX.Element;

interface IconProps {
    className?: string;
}
declare function LogoIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;
declare function SearchIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;
declare function UserIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;
declare function CartIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;
declare function HelpIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;
declare function ChevronLeftIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;
declare function ChevronRightIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;
declare function CloseIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;
declare function MenuIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;
declare function MinusIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;
declare function PlusIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;
declare function StarIcon({ className, filled }: IconProps & {
    filled?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function PauseIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;
declare function PlayIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;
declare function HeartIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;
declare function HeartFilledIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;
declare function ChevronDownIcon({ className }: IconProps): react_jsx_runtime.JSX.Element;

interface HeroCarouselProps {
    slides: HeroSlide[];
}
declare function HeroCarousel({ slides }: HeroCarouselProps): react_jsx_runtime.JSX.Element | null;

interface ProductCarouselProps {
    products: Product[];
}
declare function ProductCarousel({ products }: ProductCarouselProps): react_jsx_runtime.JSX.Element;

declare function CategoryRow(): react_jsx_runtime.JSX.Element;

declare function FeatureStory(): react_jsx_runtime.JSX.Element;

declare function PromoTiles(): react_jsx_runtime.JSX.Element;

declare function ValueProps(): react_jsx_runtime.JSX.Element;

interface CartContextType {
    items: CartItem[];
    addItem: (product: Product, color: ProductColor, size: number) => void;
    removeItem: (index: number) => void;
    updateQuantity: (index: number, quantity: number) => void;
    openCart: () => void;
    closeCart: () => void;
    itemCount: number;
}
declare function useCart(): CartContextType;
declare function CartProvider({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

interface WishlistContextType {
    wishlistItems: string[];
    toggleWishlist: (productId: string) => void;
    isWishlisted: (productId: string) => boolean;
}
declare function useWishlist(): WishlistContextType;
declare function WishlistProvider({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

interface User {
    email: string;
    firstName: string;
    lastName: string;
}
interface AuthContextValue {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (data: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    }) => Promise<void>;
    logout: () => void;
}
declare function AuthProvider({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function useAuth(): AuthContextValue;

interface QuickViewContextType {
    openQuickView: (product: Product) => void;
    closeQuickView: () => void;
}
declare function useQuickView(): QuickViewContextType;
declare function QuickViewProvider({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

export { AnnouncementBar, AuthProvider, Button, CartDrawer, CartIcon, type CartItem, CartProvider, CategoryRow, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon, type Collection, CollectionHero, CollectionView, ColorSwatches, FeatureStory, FilterBar, FilterSidebar, Footer, type GenderFilter$1 as GenderFilter, Header, HeartFilledIcon, HeartIcon, HelpIcon, HeroCarousel, type HeroSlide, ImageGallery, LogoIcon, MegaMenuNav, MenuIcon, MinusIcon, MobileMegaMenuContent, PauseIcon, PlayIcon, PlusIcon, type PriceRange$1 as PriceRange, type Product, ProductCard, ProductCarousel, type ProductCategory, type ProductColor, ProductDetailsAccordion, ProductGrid, ProductInfo, PromoTiles, QuickViewModal, QuickViewProvider, RecentlyViewed, RelatedProducts, SearchIcon, SearchModal, type Seller, Shell, type ShoeMaterial, type ShoeType, SizeSelector, type SortOption, StarIcon, UserIcon, ValueProps, WishlistButton, WishlistProvider, buttonVariants, cn, trackRecentlyViewed, useAuth, useCart, useQuickView, useWishlist };
