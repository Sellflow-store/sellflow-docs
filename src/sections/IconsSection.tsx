import {
  LogoIcon,
  SearchIcon,
  UserIcon,
  CartIcon,
  HelpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  MinusIcon,
  PlusIcon,
  StarIcon,
  PauseIcon,
  PlayIcon,
  HeartIcon,
  HeartFilledIcon,
} from '@sellflow/design-system'

const icons = [
  { name: 'LogoIcon', component: <LogoIcon /> },
  { name: 'SearchIcon', component: <SearchIcon /> },
  { name: 'UserIcon', component: <UserIcon /> },
  { name: 'CartIcon', component: <CartIcon /> },
  { name: 'HelpIcon', component: <HelpIcon /> },
  { name: 'ChevronLeftIcon', component: <ChevronLeftIcon /> },
  { name: 'ChevronRightIcon', component: <ChevronRightIcon /> },
  { name: 'ChevronDownIcon', component: <ChevronDownIcon /> },
  { name: 'CloseIcon', component: <CloseIcon /> },
  { name: 'MenuIcon', component: <MenuIcon /> },
  { name: 'MinusIcon', component: <MinusIcon /> },
  { name: 'PlusIcon', component: <PlusIcon /> },
  { name: 'StarIcon', component: <StarIcon /> },
  { name: 'StarIcon (filled)', component: <StarIcon filled /> },
  { name: 'PauseIcon', component: <PauseIcon /> },
  { name: 'PlayIcon', component: <PlayIcon /> },
  { name: 'HeartIcon', component: <HeartIcon /> },
  { name: 'HeartFilledIcon', component: <HeartFilledIcon /> },
]

export function IconsSection() {
  return (
    <section id="icons" className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-1">Icons</h2>
        <p className="text-muted-foreground">
          Custom SVG icon set. All icons accept a <code className="font-mono text-sm bg-muted px-1 rounded">className</code> prop for sizing and color.
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {icons.map(({ name, component }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
          >
            <div className="text-foreground">{component}</div>
            <span className="text-xs text-muted-foreground text-center leading-tight font-mono">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
