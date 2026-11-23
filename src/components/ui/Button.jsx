import Icon from './Icon'

// Botão padrão do site: mesmo visual e os mesmos atributos acessíveis em todo lugar.
// variant: 'primary' | 'secondary' | 'ghost' | 'quiet'
// size: 'md' | 'sm'. iconOnly esconde o texto visualmente, mas ele continua sendo o nome do botão.
export default function Button({
  children,
  icon,
  variant = 'secondary',
  size = 'md',
  iconOnly = false,
  pressed,
  expanded,
  controls,
  label,
  className = '',
  type = 'button',
  ...rest
}) {
  const classes = ['btn', `btn-${variant}`, size === 'sm' && 'btn-sm', iconOnly && 'btn-icon', className]
    .filter(Boolean)
    .join(' ')
  return (
    <button
      type={type}
      className={classes}
      aria-pressed={pressed}
      aria-expanded={expanded}
      aria-controls={controls}
      aria-label={label}
      {...rest}
    >
      {icon ? <Icon name={icon} size={size === 'sm' ? 16 : 18} /> : null}
      <span className={iconOnly ? 'sr-only' : undefined}>{children}</span>
    </button>
  )
}
