import React from 'react'
import './button.scss'

const classNames = require('classnames')

const Button = ({ hover }) => {
  console.log('class ', classNames({ foo: true, bar: true }))
  const classes = classNames({
    btn: true,
    hover: hover,
  })

  return <button className={classes}>Default</button>
}

export default Button
