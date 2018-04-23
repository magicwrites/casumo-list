import React from 'react';

import IconCross from './../icons/cross/component'

const Toggle = ({ children, className }) => {
  return (
    <div className={`toggle ${className}`}>
      <span>{ children }</span>
      <IconCross />
    </div>
  )
}

export default Toggle