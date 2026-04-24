"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AnnouncementBar: () => AnnouncementBar,
  AuthProvider: () => AuthProvider,
  Button: () => Button,
  CartDrawer: () => CartDrawer,
  CartIcon: () => CartIcon,
  CartProvider: () => CartProvider,
  CategoryRow: () => CategoryRow,
  ChevronDownIcon: () => ChevronDownIcon,
  ChevronLeftIcon: () => ChevronLeftIcon,
  ChevronRightIcon: () => ChevronRightIcon,
  CloseIcon: () => CloseIcon,
  CollectionHero: () => CollectionHero,
  CollectionView: () => CollectionView,
  ColorSwatches: () => ColorSwatches,
  FeatureStory: () => FeatureStory,
  FilterBar: () => FilterBar,
  FilterSidebar: () => FilterSidebar,
  Footer: () => Footer,
  Header: () => Header,
  HeartFilledIcon: () => HeartFilledIcon,
  HeartIcon: () => HeartIcon,
  HelpIcon: () => HelpIcon,
  HeroCarousel: () => HeroCarousel,
  ImageGallery: () => ImageGallery,
  LogoIcon: () => LogoIcon,
  MegaMenuNav: () => MegaMenuNav,
  MenuIcon: () => MenuIcon,
  MinusIcon: () => MinusIcon,
  MobileMegaMenuContent: () => MobileMegaMenuContent,
  PauseIcon: () => PauseIcon,
  PlayIcon: () => PlayIcon,
  PlusIcon: () => PlusIcon,
  ProductCard: () => ProductCard,
  ProductCarousel: () => ProductCarousel,
  ProductDetailsAccordion: () => ProductDetailsAccordion,
  ProductGrid: () => ProductGrid,
  ProductInfo: () => ProductInfo,
  PromoTiles: () => PromoTiles,
  QuickViewModal: () => QuickViewModal,
  QuickViewProvider: () => QuickViewProvider,
  RecentlyViewed: () => RecentlyViewed,
  RelatedProducts: () => RelatedProducts,
  SearchIcon: () => SearchIcon,
  SearchModal: () => SearchModal,
  Shell: () => Shell,
  SizeSelector: () => SizeSelector,
  StarIcon: () => StarIcon,
  UserIcon: () => UserIcon,
  ValueProps: () => ValueProps,
  WishlistButton: () => WishlistButton,
  WishlistProvider: () => WishlistProvider,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  trackRecentlyViewed: () => trackRecentlyViewed,
  useAuth: () => useAuth,
  useCart: () => useCart,
  useQuickView: () => useQuickView,
  useWishlist: () => useWishlist
});
module.exports = __toCommonJS(index_exports);

// src/components/ui/button.tsx
var import_button = require("@base-ui/react/button");
var import_class_variance_authority = require("class-variance-authority");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-8",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button(_a) {
  var _b = _a, {
    className,
    variant = "default",
    size = "default"
  } = _b, props2 = __objRest(_b, [
    "className",
    "variant",
    "size"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_button.Button,
    __spreadValues({
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className }))
    }, props2)
  );
}

// src/components/announcement-bar.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function AnnouncementBar() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bg-charcoal text-white text-center", style: { height: "36px", lineHeight: "36px" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-[11px] font-medium tracking-wide", children: "Free Shipping on Orders over 299 zl - Easy Returns." }) });
}

// src/components/header.tsx
var import_react4 = require("react");

// src/components/icons.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function LogoIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "svg",
    {
      viewBox: "0 0 120 24",
      fill: "currentColor",
      className: cn("h-6", className),
      "aria-label": "Sellflow",
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("text", { x: "0", y: "18", fontFamily: "inherit", fontSize: "16", fontWeight: "600", letterSpacing: "0.5", children: "Sellflow" })
    }
  );
}
function SearchIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: cn("h-5 w-5", className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ]
    }
  );
}
function UserIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: cn("h-5 w-5", className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "7", r: "4" })
      ]
    }
  );
}
function CartIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: cn("h-5 w-5", className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M16 10a4 4 0 0 1-8 0" })
      ]
    }
  );
}
function HelpIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: cn("h-5 w-5", className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
      ]
    }
  );
}
function ChevronLeftIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: cn("h-5 w-5", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("polyline", { points: "15 18 9 12 15 6" })
    }
  );
}
function ChevronRightIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: cn("h-5 w-5", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("polyline", { points: "9 18 15 12 9 6" })
    }
  );
}
function CloseIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: cn("h-5 w-5", className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
      ]
    }
  );
}
function MenuIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: cn("h-5 w-5", className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
      ]
    }
  );
}
function MinusIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      className: cn("h-4 w-4", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
    }
  );
}
function PlusIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      className: cn("h-4 w-4", className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
      ]
    }
  );
}
function StarIcon({ className, filled = false }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: filled ? "currentColor" : "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: cn("h-4 w-4", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
    }
  );
}
function PauseIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className: cn("h-4 w-4", className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "6", y: "4", width: "4", height: "16" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "14", y: "4", width: "4", height: "16" })
      ]
    }
  );
}
function PlayIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className: cn("h-4 w-4", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("polygon", { points: "5 3 19 12 5 21 5 3" })
    }
  );
}
function HeartIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: cn("h-5 w-5", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
    }
  );
}
function HeartFilledIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: cn("h-5 w-5", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
    }
  );
}
function ChevronDownIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: cn("h-4 w-4", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("polyline", { points: "6 9 12 15 18 9" })
    }
  );
}

// src/components/search-modal.tsx
var import_react = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function productGradient(hex) {
  return `radial-gradient(ellipse at 50% 60%, ${hex}33 0%, ${hex}11 40%, #ece9e2 70%)`;
}
function SearchModal({ isOpen, onClose, products = [] }) {
  const [query, setQuery] = (0, import_react.useState)("");
  const inputRef = (0, import_react.useRef)(null);
  const results = (0, import_react.useMemo)(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 6);
  }, [query, products]);
  (0, import_react.useEffect)(() => {
    var _a;
    if (isOpen) {
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      document.body.style.overflow = "hidden";
    } else {
      setQuery("");
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  (0, import_react.useEffect)(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "fixed inset-0 z-50", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute inset-0 bg-black/40 backdrop-blur-sm", onClick: onClose }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "relative bg-white shadow-lg w-full", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "max-w-3xl mx-auto px-4 py-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-3 border-b border-black/10 pb-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SearchIcon, { className: "h-5 w-5 text-warm-gray flex-shrink-0" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "input",
          {
            ref: inputRef,
            type: "text",
            value: query,
            onChange: (e) => setQuery(e.target.value),
            placeholder: "Search for products...",
            className: "flex-1 text-base text-charcoal placeholder:text-warm-gray outline-none bg-transparent"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { onClick: onClose, className: "p-1 hover:opacity-60 transition-opacity", "aria-label": "Close search", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CloseIcon, {}) })
      ] }),
      query.trim() && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "mt-4", children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "text-sm text-warm-gray py-4", children: [
        "No products found for \u201C",
        query,
        "\u201D"
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "space-y-2", children: results.map((product) => {
        const color = product.colors[0];
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "a",
          {
            href: `/products/${product.slug}`,
            onClick: onClose,
            className: "flex items-center gap-4 p-2 rounded hover:bg-cream transition-colors",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "div",
                {
                  className: "w-14 h-14 flex-shrink-0 rounded flex items-center justify-center",
                  style: { background: productGradient(color.hex) },
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "relative w-3/5 h-2/5", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "div",
                    {
                      className: "absolute inset-0 rounded-[50%]",
                      style: {
                        background: `${color.hex}66`,
                        transform: "rotate(-8deg) scaleX(1.4)"
                      }
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "text-[12px] font-medium uppercase tracking-[0.5px] truncate", children: product.name }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-[12px] text-warm-gray", children: color.name })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "text-[14px] font-medium", children: [
                product.price,
                " zl"
              ] })
            ]
          },
          product.id
        );
      }) }) })
    ] }) })
  ] });
}

// src/components/mega-menu.tsx
var import_react2 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var menMenu = [
  {
    heading: "SHOES",
    links: [
      { label: "Runners", href: "/collections/mens?type=runner" },
      { label: "Walkers", href: "/collections/mens?type=walker" },
      { label: "Trainers", href: "/collections/mens?type=trainer" },
      { label: "Slip-Ons", href: "/collections/mens?type=slip-on" },
      { label: "All Men's Shoes", href: "/collections/mens" }
    ]
  },
  {
    heading: "APPAREL",
    links: [
      { label: "Tees", href: "/collections/apparel?gender=men&type=tee" },
      { label: "Hoodies", href: "/collections/apparel?gender=men&type=hoodie" },
      { label: "Joggers", href: "/collections/apparel?gender=men&type=pant" },
      { label: "Jackets", href: "/collections/apparel?gender=men&type=jacket" },
      { label: "All Men's Apparel", href: "/collections/apparel?gender=men" }
    ]
  },
  {
    heading: "SOCKS",
    links: [
      { label: "Ankle Socks", href: "/collections/socks?gender=men" },
      { label: "Crew Socks", href: "/collections/socks?gender=men" },
      { label: "No-Show", href: "/collections/socks" },
      { label: "Performance", href: "/collections/socks" },
      { label: "All Men's Socks", href: "/collections/socks" }
    ]
  },
  {
    heading: "ACCESSORIES",
    links: [
      { label: "Bags", href: "/collections/accessories" },
      { label: "Beanies", href: "/collections/accessories" },
      { label: "Caps", href: "/collections/accessories" },
      { label: "Insoles", href: "/collections/accessories" }
    ]
  }
];
var womenMenu = [
  {
    heading: "SHOES",
    links: [
      { label: "Runners", href: "/collections/womens?type=runner" },
      { label: "Walkers", href: "/collections/womens?type=walker" },
      { label: "Trainers", href: "/collections/womens?type=trainer" },
      { label: "Flats", href: "/collections/womens?type=flat" },
      { label: "Slip-Ons", href: "/collections/womens?type=slip-on" },
      { label: "All Women's Shoes", href: "/collections/womens" }
    ]
  },
  {
    heading: "APPAREL",
    links: [
      { label: "Tees", href: "/collections/apparel?gender=women&type=tee" },
      { label: "Hoodies", href: "/collections/apparel?gender=women&type=hoodie" },
      { label: "Joggers", href: "/collections/apparel?gender=women&type=pant" },
      { label: "Cardigans", href: "/collections/apparel?gender=women&type=cardigan" },
      { label: "All Women's Apparel", href: "/collections/apparel?gender=women" }
    ]
  },
  {
    heading: "SOCKS",
    links: [
      { label: "Ankle Socks", href: "/collections/socks?gender=women" },
      { label: "Crew Socks", href: "/collections/socks?gender=women" },
      { label: "No-Show", href: "/collections/socks" },
      { label: "Performance", href: "/collections/socks" },
      { label: "All Women's Socks", href: "/collections/socks" }
    ]
  },
  {
    heading: "ACCESSORIES",
    links: [
      { label: "Bags", href: "/collections/accessories" },
      { label: "Beanies", href: "/collections/accessories" },
      { label: "Caps", href: "/collections/accessories" },
      { label: "Insoles", href: "/collections/accessories" }
    ]
  }
];
var menuData = {
  MEN: menMenu,
  WOMEN: womenMenu,
  SALE: null
};
function MegaMenuNav() {
  const [activeMenu, setActiveMenu] = (0, import_react2.useState)(null);
  const timeoutRef = (0, import_react2.useRef)(null);
  const handleMouseEnter = (0, import_react2.useCallback)((key) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(key);
  }, []);
  const handleMouseLeave = (0, import_react2.useCallback)(() => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  }, []);
  const handlePanelEnter = (0, import_react2.useCallback)(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);
  const triggers = [
    { label: "MEN", href: "/collections/mens" },
    { label: "WOMEN", href: "/collections/womens" },
    { label: "SALE", href: "/collections/sale" }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "hidden lg:flex items-center gap-6 flex-1", children: [
      triggers.map(({ label, href }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "div",
        {
          onMouseEnter: () => handleMouseEnter(label),
          onMouseLeave: handleMouseLeave,
          className: "relative",
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "a",
            {
              href,
              className: "text-[12px] font-medium uppercase tracking-[0.5px] text-charcoal hover:opacity-60 transition-opacity",
              children: label
            }
          )
        },
        label
      )),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "a",
        {
          href: "/collections/new-arrivals",
          className: "text-[12px] font-medium uppercase tracking-[0.5px] text-charcoal hover:opacity-60 transition-opacity",
          children: "NEW"
        }
      )
    ] }),
    activeMenu && menuData[activeMenu] && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "div",
      {
        className: "hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-black/5 shadow-lg z-50",
        onMouseEnter: handlePanelEnter,
        onMouseLeave: handleMouseLeave,
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "max-w-7xl mx-auto px-8 py-8", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "grid grid-cols-4 gap-10", children: menuData[activeMenu].map((col) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "text-[12px] font-medium uppercase tracking-[0.8px] text-charcoal mb-3", children: col.heading }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { className: "space-y-2", children: col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "a",
            {
              href: link.href,
              onClick: () => setActiveMenu(null),
              className: "text-[13px] text-charcoal/70 hover:text-charcoal transition-colors",
              children: link.label
            }
          ) }, link.label)) })
        ] }, col.heading)) }) })
      }
    )
  ] });
}
function MobileMegaMenuContent({ onLinkClick }) {
  const [expanded, setExpanded] = (0, import_react2.useState)(null);
  const triggers = [
    { label: "MEN", href: "/collections/mens" },
    { label: "WOMEN", href: "/collections/womens" },
    { label: "SALE", href: "/collections/sale" }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "space-y-1", children: [
    triggers.map(({ label, href }) => {
      const columns = menuData[label];
      if (!columns) {
        return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "a",
          {
            href,
            className: "block text-nav py-2",
            onClick: onLinkClick,
            children: label
          },
          label
        );
      }
      const isOpen = expanded === label;
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "button",
          {
            onClick: () => setExpanded(isOpen ? null : label),
            className: "flex items-center justify-between w-full text-nav py-2",
            children: [
              label,
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-[12px] text-warm-gray", children: isOpen ? "\u2212" : "+" })
            ]
          }
        ),
        isOpen && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "pl-4 pb-3 space-y-4", children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "text-[11px] font-medium uppercase tracking-[0.8px] text-warm-gray mb-1.5", children: col.heading }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { className: "space-y-1", children: col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "a",
            {
              href: link.href,
              onClick: onLinkClick,
              className: "block text-[13px] text-charcoal/70 hover:text-charcoal py-0.5",
              children: link.label
            }
          ) }, link.label)) })
        ] }, col.heading)) })
      ] }, label);
    }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "a",
      {
        href: "/collections/new-arrivals",
        className: "block text-nav py-2",
        onClick: onLinkClick,
        children: "NEW"
      }
    )
  ] });
}

// src/providers/auth-provider.tsx
var import_react3 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var AuthContext = (0, import_react3.createContext)(null);
var STORAGE_KEY = "sellflow_user";
function AuthProvider({ children }) {
  const [user, setUser] = (0, import_react3.useState)(null);
  (0, import_react3.useEffect)(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (e) {
    }
  }, []);
  const login = (0, import_react3.useCallback)(async (email, _password) => {
    const newUser = {
      email,
      firstName: email.split("@")[0],
      lastName: ""
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    setUser(newUser);
  }, []);
  const register = (0, import_react3.useCallback)(async (data) => {
    const newUser = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    setUser(newUser);
  }, []);
  const logout = (0, import_react3.useCallback)(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AuthContext.Provider, { value: { user, login, register, logout }, children });
}
function useAuth() {
  const ctx = (0, import_react3.useContext)(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

// src/components/header.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var secondaryLinks = [
  { label: "About", href: "/about" }
];
function Header({ onCartOpen, cartCount = 0, wishlistCount = 0, products = [] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react4.useState)(false);
  const [searchOpen, setSearchOpen] = (0, import_react4.useState)(false);
  const { user } = useAuth();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("header", { className: "bg-white sticky top-0 z-50 border-b border-black/5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("nav", { className: "mx-auto flex h-14 items-center px-4 lg:px-8 relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "button",
        {
          className: "lg:hidden p-1 mr-3",
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          "aria-label": mobileMenuOpen ? "Close menu" : "Open menu",
          children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CloseIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(MenuIcon, {})
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", { href: "/", className: "mr-8", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-xl font-semibold italic tracking-tight text-charcoal", children: "Sellflow" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(MegaMenuNav, {}),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-3 ml-auto", children: [
        secondaryLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "a",
          {
            href: link.href,
            className: "hidden lg:block text-[12px] text-charcoal hover:opacity-60 transition-opacity",
            children: link.label
          },
          link.href
        )),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "button",
          {
            "aria-label": "Search",
            className: "p-1 hover:opacity-60 transition-opacity",
            onClick: () => setSearchOpen(true),
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SearchIcon, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "a",
          {
            href: "/wishlist",
            "aria-label": "Wishlist",
            className: "hidden sm:block p-1 hover:opacity-60 transition-opacity relative",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(HeartIcon, { className: "h-5 w-5" }),
              wishlistCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center", children: wishlistCount })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "a",
          {
            href: user ? "/account" : "/account/login",
            "aria-label": "Account",
            className: "hidden sm:flex p-1 hover:opacity-60 transition-opacity items-center justify-center",
            children: user ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "w-5 h-5 rounded-full bg-charcoal text-white text-[11px] font-medium flex items-center justify-center", children: user.firstName.charAt(0).toUpperCase() }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(UserIcon, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "button",
          {
            "aria-label": "View Cart",
            className: "p-1 hover:opacity-60 transition-opacity relative",
            onClick: onCartOpen,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CartIcon, {}),
              cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "absolute -top-1 -right-1 bg-charcoal text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center", children: cartCount })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        className: cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          mobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "px-4 py-4 space-y-1 border-t border-black/5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(MobileMegaMenuContent, { onLinkClick: () => setMobileMenuOpen(false) }),
          secondaryLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "a",
            {
              href: link.href,
              className: "block text-sm py-2",
              onClick: () => setMobileMenuOpen(false),
              children: link.label
            },
            link.href
          ))
        ] })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SearchModal, { isOpen: searchOpen, onClose: () => setSearchOpen(false), products })
  ] });
}

// src/components/footer.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var footerSections = [
  {
    title: "HELP",
    links: [
      { label: "FAQ/Contact Us", href: "#" },
      { label: "Returns/Exchanges", href: "#" },
      { label: "Shipping Info", href: "#" },
      { label: "Order Status", href: "#" }
    ]
  },
  {
    title: "SHOP",
    links: [
      { label: "Men's Shoes", href: "/collections/mens" },
      { label: "Women's Shoes", href: "/collections/womens" },
      { label: "New Arrivals", href: "/collections/new-arrivals" },
      { label: "Best Sellers", href: "/collections/best-sellers" },
      { label: "Sale", href: "/collections/sale" }
    ]
  },
  {
    title: "COMPANY",
    links: [
      { label: "Our Story", href: "#" },
      { label: "Our Materials", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" }
    ]
  }
];
var socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X/Twitter", href: "#" }
];
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("footer", { className: "bg-footer-bg text-white mt-auto", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mx-auto max-w-7xl px-4 lg:px-8 py-16", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mb-12 pb-10 border-b border-white/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-[12px] font-medium uppercase tracking-[0.8px] text-white/50 mb-4", children: "FOLLOW THE FLOCK" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "flex gap-5", children: socialLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "a",
        {
          href: link.href,
          className: "text-sm text-white/70 hover:text-white transition-colors",
          children: link.label
        },
        link.label
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-[12px] font-medium uppercase tracking-[0.8px] text-white/50 mb-4", children: "JOIN THE FLOCK" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-sm text-white/60 mb-4 leading-relaxed", children: "Get the latest on new products, exclusive deals, and more." }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("form", { className: "flex flex-col gap-3", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "input",
            {
              type: "email",
              placeholder: "Email Address",
              className: "w-full bg-transparent border-b border-white/30 px-0 py-2 text-sm placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "button",
            {
              type: "submit",
              className: "self-start px-6 py-2 text-[11px] font-medium uppercase tracking-wider text-charcoal bg-white rounded-full hover:bg-white/90 transition-colors",
              children: "Sign Up"
            }
          )
        ] })
      ] }),
      footerSections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-[12px] font-medium uppercase tracking-[0.8px] text-white/50 mb-4", children: section.title }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("ul", { className: "space-y-2.5", children: section.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "a",
          {
            href: link.href,
            className: "text-sm text-white/70 hover:text-white transition-colors",
            children: link.label
          }
        ) }, link.label)) })
      ] }, section.title))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-lg font-semibold italic tracking-tight", children: "Sellflow" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-xs text-white/40 border border-white/20 px-3 py-1 rounded", children: "US ($)" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", { className: "text-xs text-white/30", children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Sellflow, Inc. All Rights Reserved."
      ] })
    ] })
  ] }) });
}

// src/providers/cart-provider.tsx
var import_react5 = require("react");

// src/components/cart-drawer.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove
}) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const freeShippingThreshold = 299;
  const remaining = Math.max(0, freeShippingThreshold - subtotal);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "div",
      {
        className: cn(
          "fixed inset-0 bg-black/40 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        ),
        onClick: onClose
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "div",
      {
        className: cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center justify-between px-4 py-4 border-b", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("h2", { className: "text-nav", children: [
              "CART (",
              items.length,
              ")"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { onClick: onClose, "aria-label": "Close cart", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CloseIcon, {}) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "px-4 py-3 bg-cream-light text-center", children: remaining > 0 ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "text-xs text-warm-gray", children: [
            "Spend ",
            remaining.toFixed(0),
            " zl more to earn free shipping!"
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-xs text-warm-gray", children: "You've earned free shipping!" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex-1 overflow-y-auto px-4 py-4", children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "text-center py-12", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-sm text-warm-gray mb-4", children: "Your cart is empty. Start shopping!" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", { href: "/collections/womens", className: "btn-cta block", children: "SHOP WOMENS" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", { href: "/collections/mens", className: "btn-cta-outline block", children: "SHOP MENS" })
            ] })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "space-y-4", children: items.map((item, index) => {
            const thumbSrc = item.color.image;
            const showThumb = thumbSrc.startsWith("/images/");
            return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-3 pb-4 border-b border-cream-dark", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "div",
                {
                  className: "w-20 h-20 rounded flex-shrink-0 overflow-hidden relative",
                  style: {
                    background: `radial-gradient(ellipse at 50% 55%, ${item.color.hex}44 0%, ${item.color.hex}22 35%, #ece9e2 65%)`
                  },
                  children: showThumb && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "img",
                    {
                      src: thumbSrc,
                      alt: `${item.product.name} - ${item.color.name}`,
                      className: "absolute inset-0 w-full h-full object-cover"
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "text-xs font-medium uppercase tracking-wide truncate", children: item.product.name }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "text-xs text-warm-gray", children: [
                  item.color.name,
                  " / Size ",
                  item.size
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center justify-between mt-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center border border-cream-dark", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                      "button",
                      {
                        className: "p-1 hover:bg-cream-light",
                        onClick: () => item.quantity <= 1 ? onRemove(index) : onUpdateQuantity(index, item.quantity - 1),
                        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(MinusIcon, {})
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "px-3 text-xs", children: item.quantity }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                      "button",
                      {
                        className: "p-1 hover:bg-cream-light",
                        onClick: () => onUpdateQuantity(index, item.quantity + 1),
                        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(PlusIcon, {})
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "text-sm font-medium", children: [
                    (item.product.price * item.quantity).toFixed(0),
                    " zl"
                  ] })
                ] })
              ] })
            ] }, index);
          }) }) }),
          items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "px-4 py-4 border-t", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex justify-between mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-sm font-medium", children: "Subtotal" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "text-sm font-medium", children: [
                subtotal.toFixed(0),
                " zl"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-xs text-warm-gray mb-3", children: "Shipping and taxes calculated at checkout." }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "a",
              {
                href: "/checkout",
                className: "btn-cta w-full block text-center",
                onClick: onClose,
                children: "CHECKOUT"
              }
            )
          ] })
        ]
      }
    )
  ] });
}

// src/providers/cart-provider.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var CartContext = (0, import_react5.createContext)(null);
function useCart() {
  const ctx = (0, import_react5.useContext)(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
function CartProvider({ children }) {
  const [items, setItems] = (0, import_react5.useState)([]);
  const [isOpen, setIsOpen] = (0, import_react5.useState)(false);
  const addItem = (0, import_react5.useCallback)(
    (product, color, size) => {
      setItems((prev) => {
        const existing = prev.findIndex(
          (item) => item.product.id === product.id && item.color.hex === color.hex && item.size === size
        );
        if (existing >= 0) {
          const next = [...prev];
          next[existing] = __spreadProps(__spreadValues({}, next[existing]), { quantity: next[existing].quantity + 1 });
          return next;
        }
        return [...prev, { product, color, size, quantity: 1 }];
      });
      setIsOpen(true);
    },
    []
  );
  const removeItem = (0, import_react5.useCallback)((index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []);
  const updateQuantity = (0, import_react5.useCallback)((index, quantity) => {
    setItems((prev) => {
      const next = [...prev];
      next[index] = __spreadProps(__spreadValues({}, next[index]), { quantity });
      return next;
    });
  }, []);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    CartContext.Provider,
    {
      value: {
        items,
        addItem,
        removeItem,
        updateQuantity,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        itemCount
      },
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          CartDrawer,
          {
            isOpen,
            onClose: () => setIsOpen(false),
            items,
            onUpdateQuantity: updateQuantity,
            onRemove: removeItem
          }
        )
      ]
    }
  );
}

// src/providers/wishlist-provider.tsx
var import_react6 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var WishlistContext = (0, import_react6.createContext)(null);
var STORAGE_KEY2 = "sellflow-wishlist";
function loadWishlist() {
  try {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(STORAGE_KEY2);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
}
function saveWishlist(items) {
  try {
    localStorage.setItem(STORAGE_KEY2, JSON.stringify(items));
  } catch (e) {
  }
}
function useWishlist() {
  const ctx = (0, import_react6.useContext)(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = (0, import_react6.useState)([]);
  (0, import_react6.useEffect)(() => {
    setWishlistItems(loadWishlist());
  }, []);
  const toggleWishlist = (0, import_react6.useCallback)((productId) => {
    setWishlistItems((prev) => {
      const next = prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId];
      saveWishlist(next);
      return next;
    });
  }, []);
  const isWishlisted = (0, import_react6.useCallback)(
    (productId) => wishlistItems.includes(productId),
    [wishlistItems]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(WishlistContext.Provider, { value: { wishlistItems, toggleWishlist, isWishlisted }, children });
}

// src/providers/quick-view-provider.tsx
var import_react9 = require("react");

// src/components/quick-view-modal.tsx
var import_react8 = require("react");

// src/components/color-swatches.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function ColorSwatches({ colors, selectedColor, onSelect }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flex gap-2 mb-2", children: colors.map((color) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "button",
      {
        onClick: () => onSelect(color),
        "aria-label": color.name,
        className: cn(
          "w-8 h-8 rounded-full border transition-all",
          selectedColor.hex === color.hex ? "ring-2 ring-charcoal ring-offset-2 ring-offset-cream border-transparent" : "border-black/10 hover:border-black/30"
        ),
        style: { backgroundColor: color.hex }
      },
      color.hex
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-xs text-warm-gray", children: selectedColor.name })
  ] });
}

// src/components/size-selector.tsx
var import_react7 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
function SizeSelector({ sizes, selectedSize, onSelect }) {
  const [sizeType, setSizeType] = (0, import_react7.useState)("men");
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex border-b border-border mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "button",
        {
          onClick: () => setSizeType("men"),
          className: cn(
            "text-[12px] font-medium uppercase tracking-[0.5px] pb-2 mr-6 border-b-2 transition-colors",
            sizeType === "men" ? "border-charcoal text-charcoal" : "border-transparent text-warm-gray hover:text-charcoal"
          ),
          children: "MEN'S SIZES"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "button",
        {
          onClick: () => setSizeType("women"),
          className: cn(
            "text-[12px] font-medium uppercase tracking-[0.5px] pb-2 border-b-2 transition-colors",
            sizeType === "women" ? "border-charcoal text-charcoal" : "border-transparent text-warm-gray hover:text-charcoal"
          ),
          children: "WOMEN'S SIZES"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "grid grid-cols-4 gap-2", children: sizes.map((size) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "button",
      {
        onClick: () => onSelect(size),
        className: cn(
          "py-2.5 text-[13px] font-medium rounded-sm transition-all",
          selectedSize === size ? "bg-charcoal text-white" : "bg-white border border-border text-charcoal hover:border-charcoal"
        ),
        children: sizeType === "women" ? size : size
      },
      size
    )) })
  ] });
}

// src/components/quick-view-modal.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function productGradient2(hex) {
  return `radial-gradient(ellipse at 50% 60%, ${hex}33 0%, ${hex}11 40%, #ece9e2 70%)`;
}
function QuickViewModal({ product, onClose }) {
  const [selectedColor, setSelectedColor] = (0, import_react8.useState)(product.colors[0]);
  const [selectedSize, setSelectedSize] = (0, import_react8.useState)(null);
  const { addItem } = useCart();
  const dialogRef = (0, import_react8.useRef)(null);
  (0, import_react8.useEffect)(() => {
    var _a;
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    (_a = dialogRef.current) == null ? void 0 : _a.focus();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  function handleAddToCart() {
    if (!selectedSize) return;
    addItem(product, selectedColor, selectedSize);
    onClose();
  }
  const imageSrc = selectedColor.image;
  const showImage = imageSrc.startsWith("/images/");
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "div",
      {
        className: "absolute inset-0 bg-black/40 backdrop-blur-sm",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
      "div",
      {
        ref: dialogRef,
        tabIndex: -1,
        className: "relative bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10 outline-none",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "button",
            {
              onClick: onClose,
              className: "absolute top-4 right-4 p-1 hover:opacity-60 transition-opacity z-10",
              "aria-label": "Close quick view",
              children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CloseIcon, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              "div",
              {
                className: "relative aspect-square",
                style: { background: productGradient2(selectedColor.hex) },
                children: showImage ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                  "img",
                  {
                    src: imageSrc,
                    alt: `${product.name} - ${selectedColor.name}`,
                    className: "absolute inset-0 w-full h-full object-cover"
                  }
                ) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "relative w-3/5 h-2/5", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                    "div",
                    {
                      className: "absolute inset-0 rounded-[50%]",
                      style: {
                        background: `linear-gradient(135deg, ${selectedColor.hex}88 0%, ${selectedColor.hex}44 100%)`,
                        transform: "rotate(-8deg) scaleX(1.6)"
                      }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                    "div",
                    {
                      className: "absolute top-[-20%] left-[10%] w-[50%] h-[70%] rounded-[40%_60%_30%_70%]",
                      style: {
                        background: `linear-gradient(180deg, ${selectedColor.hex}66 0%, ${selectedColor.hex}33 100%)`,
                        transform: "rotate(-15deg)"
                      }
                    }
                  )
                ] }) })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "p-6 flex flex-col gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-xl font-normal text-charcoal", children: product.name }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "text-lg font-medium text-charcoal", children: [
                  product.price,
                  " zl"
                ] }),
                product.originalPrice && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "text-sm text-warm-gray line-through", children: [
                  product.originalPrice,
                  " zl"
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                ColorSwatches,
                {
                  colors: product.colors,
                  selectedColor,
                  onSelect: setSelectedColor
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                SizeSelector,
                {
                  sizes: product.sizes,
                  selectedSize,
                  onSelect: setSelectedSize
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                "button",
                {
                  onClick: handleAddToCart,
                  disabled: !selectedSize,
                  className: "w-full py-3.5 bg-charcoal text-white text-[12px] font-medium uppercase tracking-[0.6px] rounded-full hover:bg-charcoal-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                  children: selectedSize ? "ADD TO CART - " + product.price + " zl" : "SELECT A SIZE"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                "a",
                {
                  href: `/products/${product.slug}`,
                  onClick: onClose,
                  className: "text-center text-[12px] font-medium uppercase tracking-[0.5px] text-charcoal underline underline-offset-4 hover:opacity-60 transition-opacity",
                  children: "VIEW FULL DETAILS"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}

// src/providers/quick-view-provider.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var QuickViewContext = (0, import_react9.createContext)(null);
function useQuickView() {
  const ctx = (0, import_react9.useContext)(QuickViewContext);
  if (!ctx) throw new Error("useQuickView must be used within QuickViewProvider");
  return ctx;
}
function QuickViewProvider({ children }) {
  const [product, setProduct] = (0, import_react9.useState)(null);
  const openQuickView = (0, import_react9.useCallback)((p) => setProduct(p), []);
  const closeQuickView = (0, import_react9.useCallback)(() => setProduct(null), []);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(QuickViewContext.Provider, { value: { openQuickView, closeQuickView }, children: [
    children,
    product && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(QuickViewModal, { product, onClose: closeQuickView })
  ] });
}

// src/components/shell.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function ShellInner({ children, products }) {
  const { openCart, itemCount } = useCart();
  const { wishlistItems } = useWishlist();
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AnnouncementBar, {}),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Header, { onCartOpen: openCart, cartCount: itemCount, wishlistCount: wishlistItems.length, products }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("main", { className: "flex-1", children }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Footer, {})
  ] });
}
function Shell({ children, products }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CartProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(WishlistProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(QuickViewProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ShellInner, { products, children }) }) }) }) });
}

// src/components/wishlist-button.tsx
var import_react10 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
function WishlistButton({ productId, className }) {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(productId);
  const [animating, setAnimating] = (0, import_react10.useState)(false);
  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    setAnimating(true);
    toggleWishlist(productId);
    setTimeout(() => setAnimating(false), 300);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "button",
    {
      onClick: handleClick,
      "aria-label": wishlisted ? "Remove from wishlist" : "Add to wishlist",
      className: cn(
        "transition-transform duration-200 ease-out",
        animating && "scale-125",
        className
      ),
      children: wishlisted ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(HeartFilledIcon, { className: "h-5 w-5 text-red-500" }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(HeartIcon, { className: "h-5 w-5" })
    }
  );
}

// src/components/product-card.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var BADGE_LABEL = {
  "new": "New",
  "new-color": "New color",
  "bestseller": "Bestseller",
  "sale": "Sale"
};
var CATEGORY_LABEL = {
  "shoes": "Shoes",
  "socks": "Socks",
  "apparel": "Apparel",
  "accessories": "Accessories"
};
function PlaceholderImage({ color }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "div",
    {
      className: "w-full h-full flex items-center justify-center",
      style: { background: "#ecebef" },
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("svg", { viewBox: "0 0 48 48", width: 48, height: 48, fill: "none", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("circle", { cx: "24", cy: "24", r: "20", fill: "#d1d0d8" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { d: "M24 4 A20 20 0 0 1 24 44 Z", fill: "#bebbc9" })
      ] })
    }
  );
}
function ProductCard({ product, className, seller }) {
  var _a, _b;
  const firstColor = product.colors[0];
  const { openQuickView } = useQuickView();
  const badgeLabel = product.badge ? BADGE_LABEL[product.badge] : null;
  const imageSrc = firstColor == null ? void 0 : firstColor.image;
  const hasImage = imageSrc && imageSrc.startsWith("/");
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    "div",
    {
      className: cn("group overflow-hidden", className),
      style: {
        borderRadius: 12,
        border: "1px solid #e8f0f0",
        background: "#fff",
        fontFamily: "inherit"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("a", { href: `/products/${product.slug}`, className: "block relative", style: { height: 240, overflow: "hidden" }, children: [
          hasImage ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "img",
            {
              src: imageSrc,
              alt: `${product.name} \u2014 ${firstColor.name}`,
              className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(PlaceholderImage, { color: (_a = firstColor == null ? void 0 : firstColor.hex) != null ? _a : "#ccc" }),
          badgeLabel && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "span",
            {
              style: {
                position: "absolute",
                top: 10,
                left: 10,
                background: "#00007D",
                color: "#fff",
                fontSize: 11,
                fontWeight: 600,
                padding: "5px 10px",
                borderRadius: 999,
                fontFamily: "inherit",
                letterSpacing: "0.01em"
              },
              children: badgeLabel
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "button",
            {
              onClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                openQuickView(product);
              },
              className: "absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden md:block",
              style: {
                background: "rgba(255,255,255,0.92)",
                border: "none",
                borderRadius: 8,
                padding: "7px 16px",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "inherit",
                color: "#000031"
              },
              children: "Quick view"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden md:block", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            WishlistButton,
            {
              productId: product.id,
              className: "rounded-full p-1.5 bg-white/90"
            }
          ) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("a", { href: `/products/${product.slug}`, className: "block", style: { padding: "12px 14px 14px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "p",
            {
              style: {
                fontSize: 11,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#234B6F",
                marginBottom: 5
              },
              children: (_b = CATEGORY_LABEL[product.productCategory]) != null ? _b : product.productCategory
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "p",
            {
              style: {
                fontSize: 15,
                fontWeight: 600,
                color: "#000031",
                lineHeight: 1.3,
                marginBottom: 4
              },
              children: product.name
            }
          ),
          seller && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("p", { style: { fontSize: 12, color: "#234B6F", marginBottom: 4 }, children: [
            seller.name,
            seller.rating >= 4.5 && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              "span",
              {
                style: {
                  marginLeft: 6,
                  fontSize: 9,
                  background: "#e6e6f2",
                  color: "#00007D",
                  padding: "2px 5px",
                  borderRadius: 4,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  fontWeight: 600
                },
                children: "Pro"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("p", { style: { fontSize: 13, fontWeight: 500, color: "#234B6F", margin: "6px 0" }, children: [
            product.rating,
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { style: { color: "#00007D" }, children: "\u2605" }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { children: [
              "(",
              product.reviewCount > 999 ? `${Math.floor(product.reviewCount / 100) * 100}+` : `${product.reviewCount}+`,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("p", { style: { fontSize: 15, fontWeight: 600, color: "#000031", marginTop: 8 }, children: [
            "From $",
            product.price
          ] }),
          product.originalPrice && discount && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("p", { style: { fontSize: 12, color: "#234B6F", marginTop: 2 }, children: [
            "$",
            product.originalPrice,
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { style: { color: "#C20099", fontWeight: 600 }, children: [
              "(-",
              discount,
              "%)"
            ] }),
            " ",
            "regular price"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 6, marginTop: 10 }, children: [
            product.colors.slice(0, 4).map((c) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              "span",
              {
                style: {
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: c.hex,
                  border: "1px solid rgba(0,0,0,0.1)",
                  display: "inline-block",
                  flexShrink: 0
                }
              },
              c.hex
            )),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { style: { fontSize: 12, fontWeight: 500, color: "#234B6F" }, children: [
              product.colors.length,
              " variant",
              product.colors.length !== 1 ? "s" : ""
            ] })
          ] })
        ] })
      ]
    }
  );
}

// src/components/product-grid.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function ProductGrid({ products, sellers = [] }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "max-w-7xl mx-auto px-4 py-8", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: products.map((product) => {
    const seller = sellers.find((s) => s.id === product.sellerId);
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ProductCard, { product, seller }, product.id);
  }) }) });
}

// src/components/product-info.tsx
var import_react11 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
function StarRating({ rating, count }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex gap-0.5", children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      StarIcon,
      {
        filled: i < fullStars || i === fullStars && hasHalf,
        className: "h-3.5 w-3.5 text-charcoal"
      },
      i
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "text-xs text-warm-gray", children: [
      "(",
      count,
      ")"
    ] })
  ] });
}
function getStockInfo(productId) {
  const hash = productId.charCodeAt(0) + (productId.charCodeAt(1) || 0);
  const quantity = hash % 20 + 1;
  return { inStock: true, lowStock: quantity <= 5, quantity };
}
function getEstimatedDelivery() {
  const now = /* @__PURE__ */ new Date();
  const startDate = new Date(now.getTime() + 5 * 864e5);
  const endDate = new Date(now.getTime() + 7 * 864e5);
  const fmt = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" });
  return `${fmt.format(startDate)} - ${fmt.format(endDate)}`;
}
function ProductInfo({ product, seller }) {
  const [selectedColor, setSelectedColor] = (0, import_react11.useState)(product.colors[0]);
  const [selectedSize, setSelectedSize] = (0, import_react11.useState)(null);
  const { addItem } = useCart();
  const stock = (0, import_react11.useMemo)(() => getStockInfo(product.id), [product.id]);
  const deliveryDate = (0, import_react11.useMemo)(() => getEstimatedDelivery(), []);
  const collectionName = product.category === "men" ? "Men's Shoes" : product.category === "women" ? "Women's Shoes" : "Shoes";
  const collectionSlug = product.category === "men" ? "mens" : product.category === "women" ? "womens" : "mens";
  function handleAddToCart() {
    if (!selectedSize) return;
    addItem(product, selectedColor, selectedSize);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-col gap-5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("nav", { className: "flex items-center gap-1.5 text-[11px] text-warm-gray/70", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("a", { href: "/", className: "hover:text-charcoal transition-colors", children: "Home" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "/" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("a", { href: `/collections/${collectionSlug}`, className: "hover:text-charcoal transition-colors", children: collectionName }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "/" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-charcoal/60", children: product.name })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h1", { className: "text-2xl md:text-3xl font-normal text-charcoal mb-2", children: product.name }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(WishlistButton, { productId: product.id, className: "mt-1 flex-shrink-0" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(StarRating, { rating: product.rating, count: product.reviewCount }),
      seller && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
        "a",
        {
          href: `/collections/all?seller=${seller.slug}`,
          className: "text-[12px] text-warm-gray hover:text-charcoal transition-colors mt-1 inline-block",
          children: [
            "Sold by ",
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "underline", children: seller.name }),
            seller.rating >= 4.5 && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "inline-block ml-1 text-[9px] bg-charcoal/10 text-charcoal/70 px-1 py-0.5 rounded uppercase tracking-wide no-underline", children: "Pro" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "text-lg font-medium text-charcoal", children: [
        product.price,
        " zl"
      ] }),
      product.originalPrice && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "text-sm text-warm-gray line-through", children: [
        product.originalPrice,
        " zl"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex items-center gap-2", children: stock.lowStock ? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "inline-block w-2 h-2 rounded-full bg-amber-500" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "text-xs text-amber-700 font-medium", children: [
        "Low Stock \u2014 Only ",
        stock.quantity,
        " left"
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "inline-block w-2 h-2 rounded-full bg-green-500" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-xs text-green-700 font-medium", children: "In Stock \u2014 Ready to Ship" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ColorSwatches, { colors: product.colors, selectedColor, onSelect: setSelectedColor }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SizeSelector, { sizes: product.sizes, selectedSize, onSelect: setSelectedSize }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "button",
      {
        onClick: handleAddToCart,
        disabled: !selectedSize,
        className: "w-full py-4 bg-charcoal text-white text-[12px] font-medium uppercase tracking-[0.6px] rounded-full hover:bg-charcoal-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
        children: selectedSize ? "ADD TO CART - " + product.price + " zl" : "SELECT A SIZE"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-col gap-2 pt-2 border-t border-border", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-xs text-warm-gray", children: "Free Shipping on Orders over 299 zl" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("p", { className: "text-xs text-warm-gray", children: [
        "Estimated delivery: ",
        deliveryDate
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-xs text-warm-gray", children: "Easy Returns" })
    ] })
  ] });
}

// src/components/product-details-accordion.tsx
var import_react12 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
function AccordionItem({
  section,
  isOpen,
  onToggle
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "border-b border-border", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
      "button",
      {
        onClick: onToggle,
        className: "w-full flex items-center justify-between py-4 text-left",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "text-nav", children: section.title }),
          isOpen ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MinusIcon, { className: "h-4 w-4 text-charcoal" }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(PlusIcon, { className: "h-4 w-4 text-charcoal" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "div",
      {
        className: cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-sm text-warm-gray leading-relaxed whitespace-pre-line", children: section.content })
      }
    )
  ] });
}
function ProductDetailsAccordion({ product }) {
  const [openId, setOpenId] = (0, import_react12.useState)(null);
  const sections = [
    {
      id: "description",
      title: "DESCRIPTION",
      content: product.description
    },
    {
      id: "features",
      title: "FEATURES",
      content: product.features.map((f) => `\u2022 ${f}`).join("\n")
    },
    {
      id: "materials",
      title: "MATERIALS",
      content: product.materials
    },
    {
      id: "care",
      title: "CARE",
      content: product.care
    }
  ];
  function handleToggle(id) {
    setOpenId((prev) => prev === id ? null : id);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "border-t border-border", children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    AccordionItem,
    {
      section,
      isOpen: openId === section.id,
      onToggle: () => handleToggle(section.id)
    },
    section.id
  )) });
}

// src/components/image-gallery.tsx
var import_react13 = require("react");
var import_jsx_runtime22 = require("react/jsx-runtime");
function galleryGradient(hex) {
  return `radial-gradient(ellipse at 50% 55%, ${hex}44 0%, ${hex}22 35%, #ece9e2 65%)`;
}
function hasRealImage(src) {
  return src.startsWith("/images/");
}
function ImageGallery({ images, productName, colorName, colorHex = "#8a7d6b" }) {
  const [selectedIndex, setSelectedIndex] = (0, import_react13.useState)(0);
  const [isZooming, setIsZooming] = (0, import_react13.useState)(false);
  const [zoomPos, setZoomPos] = (0, import_react13.useState)({ x: 50, y: 50 });
  const mainRef = (0, import_react13.useRef)(null);
  const currentImage = images[selectedIndex] || images[0];
  const handleMouseMove = (0, import_react13.useCallback)((e) => {
    if (!mainRef.current) return;
    const rect = mainRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    setZoomPos({ x, y });
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "div",
      {
        ref: mainRef,
        className: "relative aspect-square overflow-hidden cursor-zoom-in",
        onMouseEnter: () => setIsZooming(true),
        onMouseLeave: () => setIsZooming(false),
        onMouseMove: handleMouseMove,
        style: { background: galleryGradient(colorHex) },
        children: hasRealImage(currentImage) ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          "div",
          {
            className: "absolute inset-0 transition-transform duration-200 ease-out",
            style: {
              transform: isZooming ? "scale(2)" : "scale(1)",
              transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              "img",
              {
                src: currentImage,
                alt: `${productName}${colorName ? ` - ${colorName}` : ""}`,
                className: "w-full h-full object-cover"
              }
            )
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          "div",
          {
            className: "absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-out",
            style: {
              transform: isZooming ? "scale(2)" : "scale(1)",
              transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "relative w-3/5 h-2/5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                "div",
                {
                  className: "absolute inset-0 rounded-[50%]",
                  style: {
                    background: `linear-gradient(135deg, ${colorHex}88 0%, ${colorHex}44 100%)`,
                    transform: "rotate(-8deg) scaleX(1.6)"
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                "div",
                {
                  className: "absolute top-[-20%] left-[10%] w-[50%] h-[70%] rounded-[40%_60%_30%_70%]",
                  style: {
                    background: `linear-gradient(180deg, ${colorHex}66 0%, ${colorHex}33 100%)`,
                    transform: "rotate(-15deg)"
                  }
                }
              )
            ] })
          }
        )
      }
    ),
    images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "flex gap-2 overflow-x-auto", children: images.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "button",
      {
        onClick: () => setSelectedIndex(index),
        className: cn(
          "flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors relative",
          selectedIndex === index ? "border-charcoal" : "border-transparent hover:border-warm-gray/40"
        ),
        style: { background: galleryGradient(colorHex) },
        children: hasRealImage(image) ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          "img",
          {
            src: image,
            alt: `${productName} thumbnail ${index + 1}`,
            className: "w-full h-full object-cover"
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "relative w-3/5 h-2/5", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          "div",
          {
            className: "absolute inset-0 rounded-[50%] opacity-60",
            style: {
              background: `${colorHex}66`,
              transform: "rotate(-8deg) scaleX(1.4)"
            }
          }
        ) }) })
      },
      image
    )) })
  ] });
}

// src/components/collection-hero.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var collectionGradients = {
  mens: "linear-gradient(145deg, #4a5568 0%, #2d3748 50%, #1a202c 100%)",
  womens: "linear-gradient(145deg, #d4a5a5 0%, #c08080 50%, #9a5e5e 100%)",
  "new-arrivals": "linear-gradient(145deg, #5c6b4f 0%, #8a9a7a 50%, #c5cfbb 100%)",
  "best-sellers": "linear-gradient(145deg, #c4b59a 0%, #a89279 50%, #8a7d6b 100%)",
  sale: "linear-gradient(145deg, #9e4040 0%, #c06060 50%, #d48a8a 100%)"
};
function CollectionHero({ collection }) {
  const gradient = collectionGradients[collection.slug] || collectionGradients["new-arrivals"];
  const hasImage = collection.heroImage.startsWith("/images/");
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
    "section",
    {
      className: "relative w-full flex items-center justify-center",
      style: { background: gradient, minHeight: "220px" },
      children: [
        hasImage && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "img",
          {
            src: collection.heroImage,
            alt: collection.name,
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "absolute inset-0 bg-black/40" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "relative z-10 text-center px-4 py-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("nav", { className: "mb-3", "aria-label": "Breadcrumb", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("ol", { className: "flex items-center justify-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.6px] text-white/70", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("a", { href: "/", className: "hover:underline", children: "Home" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("li", { "aria-hidden": "true", children: "/" }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("li", { className: "text-white", children: collection.name })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h1", { className: "text-3xl md:text-4xl font-normal tracking-tight mb-2 text-white", children: collection.name }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-sm md:text-base max-w-lg mx-auto text-white/70", children: collection.description })
        ] })
      ]
    }
  );
}

// src/components/collection-view.tsx
var import_react14 = require("react");

// src/components/filter-sidebar.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var allSizes = [5, 6, 7, 8, 9, 10, 11, 12, 13];
var allTypeOptions = [
  { value: "runner", label: "Runner" },
  { value: "walker", label: "Walker" },
  { value: "slip-on", label: "Slip-On" },
  { value: "trainer", label: "Trainer" },
  { value: "flat", label: "Flat" },
  { value: "hiker", label: "Hiker" },
  { value: "slide", label: "Slide" },
  { value: "loafer", label: "Loafer" },
  { value: "sock", label: "Sock" },
  { value: "tee", label: "Tee" },
  { value: "hoodie", label: "Hoodie" },
  { value: "pant", label: "Jogger" },
  { value: "jacket", label: "Jacket" },
  { value: "cardigan", label: "Cardigan" },
  { value: "bag", label: "Bag" },
  { value: "beanie", label: "Beanie" },
  { value: "cap", label: "Cap" },
  { value: "insole", label: "Insole" }
];
var materialOptions = [
  { value: "mesh", label: "Mesh" },
  { value: "wool", label: "Wool" },
  { value: "tree-fiber", label: "Tree Fiber" },
  { value: "knit", label: "Knit" }
];
var priceOptions = [
  { value: "under-100", label: "Under 199 zl" },
  { value: "100-130", label: "199 - 399 zl" },
  { value: "over-130", label: "Over 399 zl" }
];
function FilterSection({ title, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "py-5 border-b border-black/10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("h4", { className: "text-[11px] font-medium uppercase tracking-[0.8px] text-charcoal mb-3", children: title }),
    children
  ] });
}
function Checkbox({ checked, label, onChange }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("label", { className: "flex items-center gap-2.5 py-1 cursor-pointer group", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "span",
      {
        className: cn(
          "w-4 h-4 rounded-sm border flex items-center justify-center transition-colors flex-shrink-0",
          checked ? "bg-charcoal border-charcoal" : "border-black/20 group-hover:border-black/40"
        ),
        children: checked && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("svg", { viewBox: "0 0 12 12", fill: "none", className: "w-2.5 h-2.5", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M2 6l3 3 5-5", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "text-[13px] text-charcoal/80 group-hover:text-charcoal transition-colors", children: label })
  ] });
}
function FilterSidebar({
  gender,
  priceRange,
  shoeTypes,
  materials,
  sizes,
  availableTypes,
  sellerSlugs,
  sellers = [],
  onGenderChange,
  onPriceRangeChange,
  onShoeTypeChange,
  onMaterialChange,
  onSizesChange,
  onSellerChange,
  onClearAll,
  activeFilterCount
}) {
  const shoeTypeOptions2 = availableTypes ? allTypeOptions.filter((opt) => availableTypes.includes(opt.value)) : allTypeOptions;
  function toggleShoeType(type) {
    onShoeTypeChange(shoeTypes.includes(type) ? shoeTypes.filter((t) => t !== type) : [...shoeTypes, type]);
  }
  function toggleMaterial(mat) {
    onMaterialChange(materials.includes(mat) ? materials.filter((m) => m !== mat) : [...materials, mat]);
  }
  function toggleSize(size) {
    onSizesChange(sizes.includes(size) ? sizes.filter((s) => s !== size) : [...sizes, size]);
  }
  function toggleSeller(slug) {
    onSellerChange(sellerSlugs.includes(slug) ? sellerSlugs.filter((s) => s !== slug) : [...sellerSlugs, slug]);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("aside", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex items-center justify-between pb-4 border-b border-black/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("h3", { className: "text-[12px] font-medium uppercase tracking-[0.5px]", children: "Filters" }),
      activeFilterCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("button", { onClick: onClearAll, className: "text-[11px] text-warm-gray underline hover:text-charcoal transition-colors", children: [
        "Clear all (",
        activeFilterCount,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FilterSection, { title: "Gender", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex flex-col gap-0.5", children: ["all", "men", "women"].map((g) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Checkbox, { checked: gender === g, label: g === "all" ? "All" : g === "men" ? "Men" : "Women", onChange: () => onGenderChange(g) }, g)) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FilterSection, { title: "Size", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "grid grid-cols-4 gap-1.5", children: allSizes.map((size) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "button",
      {
        onClick: () => toggleSize(size),
        className: cn(
          "h-9 text-[12px] font-medium border rounded transition-colors",
          sizes.includes(size) ? "bg-charcoal text-white border-charcoal" : "bg-white text-charcoal border-black/15 hover:border-charcoal"
        ),
        children: size
      },
      size
    )) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FilterSection, { title: "Price", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex flex-col gap-0.5", children: priceOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Checkbox, { checked: priceRange === opt.value, label: opt.label, onChange: () => onPriceRangeChange(priceRange === opt.value ? "all" : opt.value) }, opt.value)) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FilterSection, { title: "Product Type", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex flex-col gap-0.5", children: shoeTypeOptions2.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Checkbox, { checked: shoeTypes.includes(opt.value), label: opt.label, onChange: () => toggleShoeType(opt.value) }, opt.value)) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FilterSection, { title: "Material", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex flex-col gap-0.5", children: materialOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Checkbox, { checked: materials.includes(opt.value), label: opt.label, onChange: () => toggleMaterial(opt.value) }, opt.value)) }) }),
    sellers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FilterSection, { title: "Seller", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex flex-col gap-0.5", children: sellers.map((seller) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Checkbox, { checked: sellerSlugs.includes(seller.slug), label: seller.name, onChange: () => toggleSeller(seller.slug) }, seller.slug)) }) })
  ] });
}

// src/components/collection-view.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var sortLabels = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  newest: "Newest"
};
function CollectionView({ products, collectionName, sellers = [], initialSellerSlug }) {
  const [gender, setGender] = (0, import_react14.useState)("all");
  const [sort, setSort] = (0, import_react14.useState)("featured");
  const [priceRange, setPriceRange] = (0, import_react14.useState)("all");
  const [shoeTypes, setShoeTypes] = (0, import_react14.useState)([]);
  const [materials, setMaterials] = (0, import_react14.useState)([]);
  const [sizes, setSizes] = (0, import_react14.useState)([]);
  const [sellerSlugs, setSellerSlugs] = (0, import_react14.useState)(
    initialSellerSlug ? [initialSellerSlug] : []
  );
  const [sortOpen, setSortOpen] = (0, import_react14.useState)(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = (0, import_react14.useState)(false);
  const filtered = (0, import_react14.useMemo)(() => {
    let result = products;
    if (gender !== "all") result = result.filter((p) => p.category === gender || p.category === "unisex");
    if (priceRange === "under-100") result = result.filter((p) => p.price < 199);
    else if (priceRange === "100-130") result = result.filter((p) => p.price >= 199 && p.price <= 399);
    else if (priceRange === "over-130") result = result.filter((p) => p.price > 399);
    if (shoeTypes.length > 0) result = result.filter((p) => shoeTypes.includes(p.type));
    if (materials.length > 0) result = result.filter((p) => materials.includes(p.material));
    if (sizes.length > 0) result = result.filter((p) => p.sizes.some((s) => sizes.includes(s)));
    if (sellerSlugs.length > 0) {
      const sellerIds = sellers.filter((s) => sellerSlugs.includes(s.slug)).map((s) => s.id);
      result = result.filter((p) => sellerIds.includes(p.sellerId));
    }
    switch (sort) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result = [...result].sort((a, b) => {
          const aNew = a.badge === "new" || a.badge === "new-color" ? 1 : 0;
          const bNew = b.badge === "new" || b.badge === "new-color" ? 1 : 0;
          return bNew - aNew;
        });
        break;
    }
    return result;
  }, [products, gender, sort, priceRange, shoeTypes, materials, sizes, sellerSlugs, sellers]);
  const activeFilterCount = (gender !== "all" ? 1 : 0) + (priceRange !== "all" ? 1 : 0) + (shoeTypes.length > 0 ? 1 : 0) + (materials.length > 0 ? 1 : 0) + (sizes.length > 0 ? 1 : 0) + (sellerSlugs.length > 0 ? 1 : 0);
  function clearAll() {
    setGender("all");
    setPriceRange("all");
    setShoeTypes([]);
    setMaterials([]);
    setSizes([]);
    setSellerSlugs([]);
  }
  const availableTypes = (0, import_react14.useMemo)(() => {
    const types = new Set(products.map((p) => p.type));
    return Array.from(types);
  }, [products]);
  const sidebarProps = {
    gender,
    priceRange,
    shoeTypes,
    materials,
    sizes,
    availableTypes,
    sellerSlugs,
    sellers,
    onGenderChange: setGender,
    onPriceRangeChange: setPriceRange,
    onShoeTypeChange: setShoeTypes,
    onMaterialChange: setMaterials,
    onSizesChange: setSizes,
    onSellerChange: setSellerSlugs,
    onClearAll: clearAll,
    activeFilterCount
  };
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "max-w-7xl mx-auto px-4 lg:px-8 py-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "lg:hidden mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      "button",
      {
        onClick: () => setMobileFiltersOpen(true),
        className: "flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.5px] border border-black/15 px-4 py-2.5 rounded hover:border-charcoal transition-colors",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("svg", { viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.5", className: "w-4 h-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("line", { x1: "1", y1: "4", x2: "15", y2: "4" }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("line", { x1: "1", y1: "8", x2: "10", y2: "8" }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("line", { x1: "1", y1: "12", x2: "6", y2: "12" })
          ] }),
          "Filters ",
          activeFilterCount > 0 && `(${activeFilterCount})`
        ]
      }
    ) }),
    mobileFiltersOpen && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "fixed inset-0 bg-black/40 z-50 lg:hidden", onClick: () => setMobileFiltersOpen(false) }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "fixed top-0 left-0 h-full w-full max-w-xs bg-white z-50 overflow-y-auto p-5 lg:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h2", { className: "text-[14px] font-medium uppercase tracking-[0.5px]", children: "Filters" }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("button", { onClick: () => setMobileFiltersOpen(false), "aria-label": "Close filters", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CloseIcon, {}) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(FilterSidebar, __spreadValues({}, sidebarProps))
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex gap-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "hidden lg:block w-[220px] flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "sticky top-[93px] max-h-[calc(100vh-110px)] overflow-y-auto scrollbar-hide", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(FilterSidebar, __spreadValues({}, sidebarProps)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex items-center justify-between mb-6 pb-4 border-b border-black/10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h2", { className: "text-2xl font-light text-charcoal", children: collectionName }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("p", { className: "text-[12px] text-warm-gray mt-0.5", children: [
              filtered.length,
              " product",
              filtered.length !== 1 ? "s" : ""
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "relative hidden sm:block", children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
              "button",
              {
                onClick: () => setSortOpen(!sortOpen),
                className: "flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.5px] text-charcoal hover:opacity-60 transition-opacity",
                children: [
                  sortLabels[sort],
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ChevronDownIcon, { className: "h-3 w-3" })
                ]
              }
            ),
            sortOpen && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "absolute right-0 top-full mt-2 bg-white border border-black/10 shadow-lg rounded z-30 min-w-[180px]", children: Object.keys(sortLabels).map((s) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
              "button",
              {
                onClick: () => {
                  setSort(s);
                  setSortOpen(false);
                },
                className: `block w-full text-left px-4 py-2.5 text-[12px] tracking-wide transition-colors ${sort === s ? "bg-cream font-medium text-charcoal" : "text-warm-gray hover:bg-cream-light hover:text-charcoal"}`,
                children: sortLabels[s]
              },
              s
            )) })
          ] })
        ] }),
        sellerSlugs.length === 1 && (() => {
          const activeSeller = sellers.find((s) => s.slug === sellerSlugs[0]);
          if (!activeSeller) return null;
          const sellerProductCount = products.filter((p) => p.sellerId === activeSeller.id).length;
          return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "mb-6 p-4 bg-cream-light rounded-lg flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h3", { className: "text-sm font-medium text-charcoal", children: activeSeller.name }),
              /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("p", { className: "text-[11px] text-warm-gray mt-0.5", children: [
                sellerProductCount,
                " products \xB7 Joined ",
                activeSeller.joinedYear,
                activeSeller.rating > 0 && ` \xB7 ${activeSeller.rating} rating`
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("button", { onClick: () => setSellerSlugs([]), className: "text-[11px] text-warm-gray underline hover:text-charcoal transition-colors", children: "View all sellers" })
          ] });
        })(),
        filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "py-20 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-warm-gray text-sm mb-4", children: "No products match your filters." }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("button", { onClick: clearAll, className: "btn-cta-outline text-[11px]", children: "CLEAR ALL FILTERS" })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8", children: filtered.map((product) => {
          const seller = sellers.find((s) => s.id === product.sellerId);
          return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ProductCard, { product, seller }, product.id);
        }) })
      ] })
    ] })
  ] });
}

// src/components/filter-bar.tsx
var import_react15 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
var sortLabels2 = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  newest: "Newest"
};
var priceLabels = {
  all: "All Prices",
  "under-100": "Under 199 zl",
  "100-130": "199 - 399 zl",
  "over-130": "Over 399 zl"
};
var shoeTypeLabels = {
  runner: "Runner",
  walker: "Walker",
  "slip-on": "Slip-On",
  trainer: "Trainer",
  flat: "Flat",
  hiker: "Hiker",
  slide: "Slide",
  loafer: "Loafer",
  sock: "Sock",
  tee: "Tee",
  hoodie: "Hoodie",
  pant: "Jogger",
  jacket: "Jacket",
  cardigan: "Cardigan",
  bag: "Bag",
  beanie: "Beanie",
  cap: "Cap",
  insole: "Insole"
};
var materialLabels = {
  mesh: "Mesh",
  wool: "Wool",
  "tree-fiber": "Tree Fiber",
  knit: "Knit",
  leather: "Leather"
};
var shoeTypeOptions = ["runner", "walker", "slip-on", "trainer", "flat"];
var materialOptions2 = ["mesh", "wool", "tree-fiber", "knit"];
function FilterBar({
  productCount,
  onFilterChange,
  onSortChange,
  onPriceRangeChange,
  onShoeTypeChange,
  onMaterialChange,
  activeFilterCount
}) {
  const [activeGender, setActiveGender] = (0, import_react15.useState)("all");
  const [activeSort, setActiveSort] = (0, import_react15.useState)("featured");
  const [activePriceRange, setActivePriceRange] = (0, import_react15.useState)("all");
  const [activeShoeTypes, setActiveShoeTypes] = (0, import_react15.useState)([]);
  const [activeMaterials, setActiveMaterials] = (0, import_react15.useState)([]);
  const [sortOpen, setSortOpen] = (0, import_react15.useState)(false);
  const sortRef = (0, import_react15.useRef)(null);
  function handleGenderChange(gender) {
    setActiveGender(gender);
    onFilterChange(gender);
  }
  function handleSortChange(sort) {
    setActiveSort(sort);
    onSortChange(sort);
    setSortOpen(false);
  }
  function handlePriceRangeChange(range) {
    const next = activePriceRange === range ? "all" : range;
    setActivePriceRange(next);
    onPriceRangeChange(next);
  }
  function toggleShoeType(type) {
    const next = activeShoeTypes.includes(type) ? activeShoeTypes.filter((t) => t !== type) : [...activeShoeTypes, type];
    setActiveShoeTypes(next);
    onShoeTypeChange(next);
  }
  function toggleMaterial(material) {
    const next = activeMaterials.includes(material) ? activeMaterials.filter((m) => m !== material) : [...activeMaterials, material];
    setActiveMaterials(next);
    onMaterialChange(next);
  }
  (0, import_react15.useEffect)(() => {
    function handleClickOutside(e) {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "sticky top-0 z-20 bg-cream border-b border-black/10", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "max-w-7xl mx-auto px-4 py-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("span", { className: "text-label", children: [
        "FILTER",
        activeFilterCount > 0 ? ` (${activeFilterCount})` : "",
        " (",
        productCount,
        " products)"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "flex items-center gap-2", children: ["all", "men", "women"].map((gender) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "button",
        {
          onClick: () => handleGenderChange(gender),
          className: `px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-full border transition-colors ${activeGender === gender ? "bg-charcoal text-white border-charcoal" : "bg-transparent text-charcoal border-charcoal/30 hover:border-charcoal"}`,
          children: gender === "all" ? "ALL" : gender === "men" ? "MEN" : "WOMEN"
        },
        gender
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { ref: sortRef, className: "relative hidden sm:block", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
          "button",
          {
            onClick: () => setSortOpen(!sortOpen),
            className: "text-label flex items-center gap-1 cursor-pointer hover:opacity-60 transition-opacity",
            children: [
              sortLabels2[activeSort].toUpperCase(),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(ChevronDownIcon, { className: "h-3 w-3" })
            ]
          }
        ),
        sortOpen && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "absolute right-0 top-full mt-1 bg-white border border-black/10 shadow-lg rounded z-30 min-w-[180px]", children: Object.keys(sortLabels2).map((sort) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          "button",
          {
            onClick: () => handleSortChange(sort),
            className: `block w-full text-left px-4 py-2 text-xs tracking-wide transition-colors ${activeSort === sort ? "bg-cream font-medium text-charcoal" : "text-warm-gray hover:bg-cream-light hover:text-charcoal"}`,
            children: sortLabels2[sort]
          },
          sort
        )) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "flex items-center gap-2 mt-3", children: ["under-100", "100-130", "over-130"].map((range) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "button",
      {
        onClick: () => handlePriceRangeChange(range),
        className: `px-3 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full border transition-colors ${activePriceRange === range ? "bg-charcoal text-white border-charcoal" : "bg-transparent text-charcoal border-charcoal/30 hover:border-charcoal"}`,
        children: priceLabels[range]
      },
      range
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex items-center gap-2 mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "text-[10px] font-medium uppercase tracking-wider text-warm-gray mr-1", children: "Type:" }),
      shoeTypeOptions.map((type) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "button",
        {
          onClick: () => toggleShoeType(type),
          className: `px-3 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full border transition-colors ${activeShoeTypes.includes(type) ? "bg-charcoal text-white border-charcoal" : "bg-transparent text-charcoal border-charcoal/30 hover:border-charcoal"}`,
          children: shoeTypeLabels[type]
        },
        type
      ))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex items-center gap-2 mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "text-[10px] font-medium uppercase tracking-wider text-warm-gray mr-1", children: "Material:" }),
      materialOptions2.map((material) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "button",
        {
          onClick: () => toggleMaterial(material),
          className: `px-3 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full border transition-colors ${activeMaterials.includes(material) ? "bg-charcoal text-white border-charcoal" : "bg-transparent text-charcoal border-charcoal/30 hover:border-charcoal"}`,
          children: materialLabels[material]
        },
        material
      ))
    ] })
  ] }) });
}

// src/components/related-products.tsx
var import_react16 = require("react");
var import_jsx_runtime27 = require("react/jsx-runtime");
function RelatedProducts({ products }) {
  const scrollRef = (0, import_react16.useRef)(null);
  function scroll(direction) {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
  }
  if (products.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "py-12", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h2", { className: "text-lg font-medium text-charcoal", children: "You May Also Like" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          "button",
          {
            onClick: () => scroll("left"),
            className: "w-9 h-9 flex items-center justify-center border border-border rounded-full hover:border-charcoal transition-colors",
            "aria-label": "Previous",
            children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(ChevronLeftIcon, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          "button",
          {
            onClick: () => scroll("right"),
            className: "w-9 h-9 flex items-center justify-center border border-border rounded-full hover:border-charcoal transition-colors",
            "aria-label": "Next",
            children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(ChevronRightIcon, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { ref: scrollRef, className: "flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4 snap-x snap-mandatory", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "flex-shrink-0 w-[220px] md:w-[260px] snap-start", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(ProductCard, { product }) }, product.id)) })
  ] });
}

// src/components/recently-viewed.tsx
var import_react17 = require("react");
var import_jsx_runtime28 = require("react/jsx-runtime");
var STORAGE_KEY3 = "sellflow-recently-viewed";
var MAX_ITEMS = 8;
function loadRecentlyViewed() {
  try {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(STORAGE_KEY3);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
}
function saveRecentlyViewed(ids) {
  try {
    localStorage.setItem(STORAGE_KEY3, JSON.stringify(ids));
  } catch (e) {
  }
}
function trackRecentlyViewed(productId) {
  const ids = loadRecentlyViewed();
  const next = [productId, ...ids.filter((id) => id !== productId)].slice(0, MAX_ITEMS);
  saveRecentlyViewed(next);
}
function RecentlyViewed({ currentProductId, allProducts }) {
  const [recentProducts, setRecentProducts] = (0, import_react17.useState)([]);
  const scrollRef = (0, import_react17.useRef)(null);
  (0, import_react17.useEffect)(() => {
    const ids = loadRecentlyViewed().filter((id) => id !== currentProductId);
    const resolved = ids.map((id) => allProducts.find((p) => p.id === id)).filter((p) => !!p);
    setRecentProducts(resolved);
  }, [currentProductId, allProducts]);
  function scroll(direction) {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
  }
  if (recentProducts.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("section", { className: "py-12", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("h2", { className: "text-lg font-medium text-charcoal", children: "Recently Viewed" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
          "button",
          {
            onClick: () => scroll("left"),
            className: "w-9 h-9 flex items-center justify-center border border-border rounded-full hover:border-charcoal transition-colors",
            "aria-label": "Previous",
            children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ChevronLeftIcon, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
          "button",
          {
            onClick: () => scroll("right"),
            className: "w-9 h-9 flex items-center justify-center border border-border rounded-full hover:border-charcoal transition-colors",
            "aria-label": "Next",
            children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ChevronRightIcon, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { ref: scrollRef, className: "flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4 snap-x snap-mandatory", children: recentProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "flex-shrink-0 w-[220px] md:w-[260px] snap-start", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ProductCard, { product }) }, product.id)) })
  ] });
}

// src/components/sections/hero-carousel.tsx
var import_react18 = require("react");
var import_jsx_runtime29 = require("react/jsx-runtime");
var slideGradients = [
  "linear-gradient(135deg, #c4b59a 0%, #8a7d6b 40%, #5c6b4f 100%)",
  "linear-gradient(160deg, #2a3a5c 0%, #4a6fa5 50%, #8aabcf 100%)",
  "linear-gradient(145deg, #6b5b4a 0%, #a89279 40%, #d4cfc5 100%)"
];
function HeroCarousel({ slides }) {
  const [current, setCurrent] = (0, import_react18.useState)(0);
  const [playing, setPlaying] = (0, import_react18.useState)(true);
  const next = (0, import_react18.useCallback)(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);
  (0, import_react18.useEffect)(() => {
    if (!playing) return;
    const id = setInterval(next, 5e3);
    return () => clearInterval(id);
  }, [playing, next]);
  if (slides.length === 0) return null;
  const slide = slides[current];
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "relative w-full overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
      "div",
      {
        className: "relative transition-all duration-700 flex items-end px-6 md:px-16 pb-16 md:pb-24",
        style: {
          background: slideGradients[current % slideGradients.length],
          minHeight: "70vh"
        },
        children: [
          slide.image.startsWith("/images/") && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            "img",
            {
              src: slide.image,
              alt: slide.title,
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "absolute inset-0 bg-black/30" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "relative z-10 max-w-xl", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "text-[11px] font-medium uppercase tracking-[0.6px] text-white/70 mb-3", children: slide.subtitle }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h1", { className: "text-3xl md:text-5xl lg:text-6xl font-normal tracking-[0.6px] text-white mb-8 leading-tight", children: slide.title }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex gap-3", children: slide.ctaLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
              "a",
              {
                href: link.href,
                className: "inline-flex items-center justify-center px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.6px] text-white border border-white rounded-full hover:bg-white hover:text-charcoal transition-all duration-200",
                children: link.label
              },
              link.href
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3", children: [
      slides.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        "button",
        {
          onClick: () => setCurrent(i),
          className: `w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`,
          "aria-label": `Go to slide ${i + 1}`
        },
        i
      )),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        "button",
        {
          onClick: () => setPlaying((p) => !p),
          className: "ml-2 p-1 text-white/60 hover:text-white transition-colors",
          "aria-label": playing ? "Pause carousel" : "Play carousel",
          children: playing ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(PauseIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(PlayIcon, {})
        }
      )
    ] })
  ] });
}

// src/components/sections/product-carousel.tsx
var import_react19 = require("react");
var import_jsx_runtime30 = require("react/jsx-runtime");
var tabs = [
  { label: "NEW ARRIVALS", value: "new-arrivals" },
  { label: "BEST SELLERS", value: "best-sellers" }
];
function ProductCarousel({ products }) {
  const [activeTab, setActiveTab] = (0, import_react19.useState)("new-arrivals");
  const scrollRef = (0, import_react19.useRef)(null);
  const filtered = products.filter((p) => p.collections.includes(activeTab));
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("section", { className: "py-12", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("h2", { className: "text-[40px] font-normal text-charcoal text-center mb-2", children: "Our Favorites" }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "flex justify-center gap-6 mb-8", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "button",
      {
        onClick: () => setActiveTab(tab.value),
        className: `text-[12px] font-medium uppercase tracking-[0.5px] pb-1 border-b-2 transition-colors ${activeTab === tab.value ? "border-charcoal text-charcoal" : "border-transparent text-warm-gray hover:text-charcoal"}`,
        children: tab.label
      },
      tab.value
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "relative px-4 md:px-8 lg:px-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        "button",
        {
          onClick: () => scroll("left"),
          className: "absolute left-2 top-1/3 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-sm hidden md:flex items-center justify-center",
          "aria-label": "Scroll left",
          children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ChevronLeftIcon, {})
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { ref: scrollRef, className: "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2", children: filtered.map((product) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ProductCard, { product, className: "min-w-[220px] max-w-[220px] flex-shrink-0" }, product.id)) }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        "button",
        {
          onClick: () => scroll("right"),
          className: "absolute right-2 top-1/3 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-sm hidden md:flex items-center justify-center",
          "aria-label": "Scroll right",
          children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ChevronRightIcon, {})
        }
      )
    ] })
  ] });
}

// src/components/sections/category-row.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
var categories = [
  {
    title: "New Arrivals",
    slug: "new-arrivals",
    gradient: "linear-gradient(145deg, #a8c0a0 0%, #6b8a5e 40%, #4a6b3d 100%)",
    image: "/images/hero/collection-hero-1.jpg",
    links: [{ label: "SHOP NOW", href: "/collections/new-arrivals" }]
  },
  {
    title: "Men's",
    slug: "mens",
    gradient: "linear-gradient(145deg, #4a5568 0%, #2d3748 50%, #1a202c 100%)",
    image: "/images/hero/collection-hero-2.jpg",
    links: [{ label: "SHOP MEN", href: "/collections/mens" }]
  },
  {
    title: "Women's",
    slug: "womens",
    gradient: "linear-gradient(145deg, #d4a5a5 0%, #c08080 50%, #9a5e5e 100%)",
    image: "/images/hero/collection-hero-1.jpg",
    links: [{ label: "SHOP WOMEN", href: "/collections/womens" }]
  },
  {
    title: "Best Sellers",
    slug: "best-sellers",
    gradient: "linear-gradient(145deg, #c4b59a 0%, #a89279 50%, #8a7d6b 100%)",
    image: "/images/hero/collection-hero-2.jpg",
    links: [{ label: "SHOP NOW", href: "/collections/best-sellers" }]
  }
];
function CategoryRow() {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("section", { className: "px-4 md:px-8 lg:px-12 py-10", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    "div",
    {
      className: "relative flex flex-col items-center justify-end overflow-hidden group",
      style: { background: cat.gradient, aspectRatio: "3 / 4" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "img",
          {
            src: cat.image,
            alt: cat.title,
            className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "relative z-10 text-center pb-8 px-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("h3", { className: "text-xl font-normal text-white mb-4 tracking-wide", children: cat.title }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "flex gap-3 justify-center", children: cat.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
            "a",
            {
              href: link.href,
              className: "inline-flex items-center justify-center px-5 py-2 text-[11px] font-medium uppercase tracking-[0.6px] text-white border border-white rounded-full hover:bg-white hover:text-charcoal transition-all duration-200",
              children: link.label
            },
            link.href
          )) })
        ] })
      ]
    },
    cat.slug
  )) }) });
}

// src/components/sections/feature-story.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
var spotlights = [
  {
    gradient: "linear-gradient(160deg, #8a7d6b 0%, #c4b59a 40%, #e8dfd0 100%)",
    image: "/images/products/product-9.jpg",
    label: "NATURALLY EASY",
    name: "Cloud Runner",
    tagline: "Our lightest shoe ever. Knit from recycled materials for all-day ease.",
    href: "/products/cloud-runner"
  },
  {
    gradient: "linear-gradient(160deg, #5c6b4f 0%, #8a9a7a 40%, #c5cfbb 100%)",
    image: "/images/products/product-15.jpg",
    label: "LIGHT ON YOUR FEET",
    name: "Breeze Slip-On",
    tagline: "Slip in and go. Eucalyptus fiber keeps things cool, naturally.",
    href: "/products/breeze-slip-on"
  }
];
function FeatureStory() {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("section", { className: "px-4 md:px-8 lg:px-12 py-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h2", { className: "text-[40px] font-normal text-charcoal text-center mb-10 leading-tight", children: "Your Easy, Breezy MVP" }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: spotlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
      "div",
      {
        className: "relative overflow-hidden group",
        style: { background: item.gradient, minHeight: "520px" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
            "img",
            {
              src: item.image,
              alt: item.name,
              className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "absolute bottom-0 left-0 right-0 p-8 z-10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "text-[11px] font-medium uppercase tracking-[0.8px] text-white/70 mb-2", children: item.label }),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h3", { className: "text-2xl font-normal text-white mb-2", children: item.name }),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "text-sm text-white/80 mb-6 max-w-xs leading-relaxed", children: item.tagline }),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
              "a",
              {
                href: item.href,
                className: "inline-flex items-center justify-center px-5 py-2 text-[11px] font-medium uppercase tracking-[0.6px] text-white border border-white rounded-full hover:bg-white hover:text-charcoal transition-all duration-200",
                children: "EXPLORE MORE"
              }
            )
          ] })
        ]
      },
      item.name
    )) })
  ] });
}

// src/components/sections/promo-tiles.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
var promos = [
  {
    title: "Trail Collection",
    gradient: "linear-gradient(170deg, #3d5a3d 0%, #5c7a5c 40%, #8a9a7a 100%)",
    image: "/images/products/product-3.jpg",
    links: [
      { label: "SHOP MEN", href: "/collections/mens" },
      { label: "SHOP WOMEN", href: "/collections/womens" }
    ]
  },
  {
    title: "Everyday Essentials",
    gradient: "linear-gradient(170deg, #6b5b4a 0%, #a89279 40%, #c4b59a 100%)",
    image: "/images/products/product-4.jpg",
    links: [
      { label: "SHOP MEN", href: "/collections/mens" },
      { label: "SHOP WOMEN", href: "/collections/womens" }
    ]
  },
  {
    title: "Sale",
    gradient: "linear-gradient(170deg, #9e4040 0%, #c06060 40%, #d48a8a 100%)",
    image: "/images/products/product-7.jpg",
    links: [
      { label: "SHOP MEN", href: "/collections/sale" },
      { label: "SHOP WOMEN", href: "/collections/sale" }
    ]
  }
];
function PromoTiles() {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("section", { className: "px-4 md:px-8 lg:px-12 py-10", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: promos.map((promo) => /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    "div",
    {
      className: "relative overflow-hidden group",
      style: { background: promo.gradient, aspectRatio: "3 / 4" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          "img",
          {
            src: promo.image,
            alt: promo.title,
            className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "absolute bottom-0 left-0 right-0 p-6 z-10 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h3", { className: "text-xl font-normal text-white mb-4 tracking-wide", children: promo.title }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "flex gap-3 justify-center", children: promo.links.map((link, i) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "a",
            {
              href: link.href,
              className: "inline-flex items-center justify-center px-5 py-2 text-[11px] font-medium uppercase tracking-[0.6px] text-white border border-white rounded-full hover:bg-white hover:text-charcoal transition-all duration-200",
              children: link.label
            },
            i
          )) })
        ] })
      ]
    },
    promo.title
  )) }) });
}

// src/components/sections/value-props.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
var props = [
  {
    label: "DISCOVERY",
    title: "Thousands Of Sellers, One Search",
    description: "From top brands to independent designers - find exactly what you're looking for across thousands of curated sellers."
  },
  {
    label: "TRUST",
    title: "Verified Sellers, Real Reviews",
    description: "Every seller on Sellflow is vetted. Real customer reviews and our Pro seller program help you shop with confidence."
  },
  {
    label: "VARIETY",
    title: "From Streetwear To Sustainable",
    description: "Premium brands, vintage finds, handmade originals, everyday basics. Whatever your style, it's here."
  }
];
function ValueProps() {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("section", { className: "px-4 md:px-8 lg:px-12 py-16 bg-cream-light", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center", children: props.map((prop) => /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-[11px] font-medium uppercase tracking-[0.8px] text-warm-gray mb-2", children: prop.label }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h3", { className: "text-lg font-normal text-charcoal mb-3", children: prop.title }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-sm text-warm-gray leading-relaxed", children: prop.description })
  ] }, prop.label)) }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnnouncementBar,
  AuthProvider,
  Button,
  CartDrawer,
  CartIcon,
  CartProvider,
  CategoryRow,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  CollectionHero,
  CollectionView,
  ColorSwatches,
  FeatureStory,
  FilterBar,
  FilterSidebar,
  Footer,
  Header,
  HeartFilledIcon,
  HeartIcon,
  HelpIcon,
  HeroCarousel,
  ImageGallery,
  LogoIcon,
  MegaMenuNav,
  MenuIcon,
  MinusIcon,
  MobileMegaMenuContent,
  PauseIcon,
  PlayIcon,
  PlusIcon,
  ProductCard,
  ProductCarousel,
  ProductDetailsAccordion,
  ProductGrid,
  ProductInfo,
  PromoTiles,
  QuickViewModal,
  QuickViewProvider,
  RecentlyViewed,
  RelatedProducts,
  SearchIcon,
  SearchModal,
  Shell,
  SizeSelector,
  StarIcon,
  UserIcon,
  ValueProps,
  WishlistButton,
  WishlistProvider,
  buttonVariants,
  cn,
  trackRecentlyViewed,
  useAuth,
  useCart,
  useQuickView,
  useWishlist
});
