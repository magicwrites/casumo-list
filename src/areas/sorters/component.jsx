import React from 'react'
import classNames from 'classnames'

import Toggle from './../../common/toggle/component'

const Sorter = ({ isDisabled, isActive, label, onClick }) => {
  return (
    <Toggle className={classNames({ active: isActive })} onClick={onClick} isDisabled={isDisabled}>
      <span className="type">sort :</span>
      <span> { label }</span>
    </Toggle>
  )
}

const Sorters = ({ sortBy, onSort, isUpdating }) => {
  return (
    <div className="sorters">
      <Sorter isDisabled={isUpdating} isActive={sortBy === 'name'} onClick={() => onSort('name')} label="book name" />
      <Sorter isDisabled={isUpdating} isActive={sortBy === 'author.name'} onClick={() => onSort('author.name')} label="author name" />
    </div>
  )
}

export default Sorters