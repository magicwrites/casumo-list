import React from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import Toggle from './../../common/toggle/component'

import CONSTANTS from './../../constants'

const checkActivity = (optionsActive, option) => !optionsActive.find(x => x === option)

const Filter = ({ isActive, onClick, label, option }) => {
  return (
    <Toggle className={classNames({ active: isActive })}
            onClick={() => onClick(option)}>
      <span className="type">{ label } :</span>
      <span> { option }</span>
    </Toggle>
  )
}

const Filters = ({ filters, onFilterByBookGenre, onFilterByAuthorGender }) => {
  return (
    <div className="filters">
      { _.values(CONSTANTS.GENRES).map(genre => (
        <Filter key={genre}
                isActive={checkActivity(filters.genres, genre)}
                onClick={onFilterByBookGenre}
                option={genre}
                label="genre" />
      ))}
      { _.values(CONSTANTS.GENDERS).map(gender => (
        <Filter key={gender}
                isActive={checkActivity(filters.genders, gender)}
                onClick={onFilterByAuthorGender}
                option={gender}
                label="gender" />
      ))}
    </div>
  )
}

export default Filters;