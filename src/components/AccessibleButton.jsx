export default function AccessibleButton({
  children,
  icon,
  onClick,
  type = 'button',
  variant = 'secondary',
  ariaPressed,
  ariaExpanded,
  ariaControls,
  ariaLabel,
  className = '',
  ...rest
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`.trim()}
      onClick={onClick}
      aria-pressed={ariaPressed}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      {...rest}
    >
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      <span>{children}</span>
    </button>
  )
}
