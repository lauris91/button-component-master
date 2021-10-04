import React from 'react'
import classnames from 'classnames'

import '../../styles/styles.scss'

const Input = ({
  label,
  error,
  size = 'md',
  helperText,
  startIcon,
  endIcon,
  fullWidth,
  multiline,
  row = 2,
  ...others
}) => {
  const classes = classnames({
    'input-block': true,
    [`input-block--${size}`]: size,
    'input-block--error': error && !others.disabled,
    'input-block--fullWidth': fullWidth,
  })
  const Component = multiline ? 'textarea' : 'input'
  const Icon = <span className='material-icons'>{startIcon || endIcon}</span>

  return (
    <div className={classes}>
      {helperText && !others.disabled && (
        <span className='helper-text'>{helperText}</span>
      )}
      <div className='input-field'>
        <Component
          rows={multiline ? row : null}
          className={
            (startIcon && 'input--startIcon') || (endIcon && 'input--endIcon')
          }
          {...others}
        />
        {(startIcon || endIcon) && Icon}
      </div>
      <label>{label}</label>
    </div>
  )
}

export default Input
