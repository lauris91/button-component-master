import React from 'react'
import classnames from 'classnames'

import './button.scss'

const Button = ({
  variant = 'default',
  color,
  disableShadow,
  children,
  startIcon,
  endIcon,
  size = 'md',
  hover,
  ...others
}) => {
  const classes = classnames({
    btn: true,
    [`btn--${variant}`]: variant,
    [`btn--color-default`]: !color,
    [`btn--color-${color}`]: color,
    'btn--disableShadow': disableShadow,
    'btn--disabled': others.disabled,
    'btn--startIcon': startIcon,
    'btn--endIcon': endIcon,
    [`btn--${size}`]: size,
    hover: hover,
  })

  const Icon = <span className='material-icons'>{startIcon || endIcon}</span>

  return (
    <button className={classes} {...others}>
      {startIcon && Icon}
      {children}
      {endIcon && Icon}
    </button>
  )
}

export default Button
