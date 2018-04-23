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

const Sorters = ({ sortBy, onSort, update }) => {
  return (
    <div className="sorters">
      <Sorter isDisabled={update || sortBy === 'name'}
              isActive={sortBy === 'name'}
              onClick={() => onSort('name')}
              label="book name" />
      <Sorter isDisabled={update || sortBy === 'author.name'}
              isActive={sortBy === 'author.name'}
              onClick={() => onSort('author.name')}
              label="author name" />
    </div>
  )
}

export default Sorters