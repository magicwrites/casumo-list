import React from 'react';
import classNames from 'classnames';

const Sorter = ({ isActive, onChange, children }) => {
  const classes = {
    'cl-button': true,
    'cl-inactive': !isActive
  }

  return (
    <div
      className={classNames(classes)}
      onClick={onChange}
      disabled={isActive}
      style={{ marginRight: '5px' }}>{children}</div>
  )
}

export default Sorter