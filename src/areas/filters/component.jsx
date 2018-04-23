import React from 'react'
import classNames from 'classnames'
import Toggle from './../../common/toggle/component'

import CONSTANTS from './../../constants'

const genres = CONSTANTS.BOOK.GENRES
const genders = [ CONSTANTS.GENDERS.MALE, CONSTANTS.GENDERS.FEMALE ]

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
      { genres.map(genre => (
        <Filter key={genre}
                isActive={checkActivity(filters.genres, genre)}
                onClick={onFilterByBookGenre}
                option={genre}
                label="genre" />
      ))}
      { genders.map(gender => (
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