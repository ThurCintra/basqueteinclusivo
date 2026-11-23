import {
  Accessibility,
  AlertTriangle,
  Ban,
  BookOpen,
  CircleDot,
  Contrast,
  Crosshair,
  Handshake,
  Home,
  Menu,
  Moon,
  Palette,
  Pause,
  Play,
  RotateCcw,
  Ruler,
  ScrollText,
  Shield,
  Square,
  Sun,
  Target,
  Timer,
  Trophy,
  Users,
  Volume2,
  X,
} from 'lucide-react'

// Ícones do site num só lugar: os dados (navigation.js, rules.js) guardam só o nome.
// Todo ícone é decorativo (aria-hidden): o texto ao lado é que dá o significado.
const ICONS = {
  accessibility: Accessibility,
  alert: AlertTriangle,
  ban: Ban,
  book: BookOpen,
  close: X,
  contrast: Contrast,
  crosshair: Crosshair,
  dark: Moon,
  default: Sun,
  dribble: CircleDot,
  grayscale: Palette,
  handshake: Handshake,
  home: Home,
  menu: Menu,
  pause: Pause,
  play: Play,
  reset: RotateCcw,
  ruler: Ruler,
  scroll: ScrollText,
  shield: Shield,
  stop: Square,
  target: Target,
  timer: Timer,
  trophy: Trophy,
  users: Users,
  volume: Volume2,
}

export default function Icon({ name, size = 18, className = '' }) {
  const Component = ICONS[name] ?? CircleDot
  return <Component size={size} className={`icon ${className}`.trim()} aria-hidden="true" focusable="false" />
}
