import React from 'react'

import IconCross from './../icons/cross/component'

import './style.css'

const Toggle = ({ children, className, onClick, isDisabled }) => {
  const onAction = isDisabled ? () => {} : onClick

  return (
    <div role="button" disabled={isDisabled} className={`toggle ${className || ''}`} onClick={onAction}>
      <span>{ children }</span>
      <IconCross />
    </div>
  )
}

export default Toggle