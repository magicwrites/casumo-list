import React from 'react'
import AnimatedNumber from 'react-animated-number'
import formatNumber from 'simple-format-number'

import './style.css'

const Header = ({ onAdd, onAddThenSort, booksAmount, isSorted, update }) => {
  const addMethod = isSorted ? onAddThenSort : onAdd
  const increment = booksAmount

  const isDisabled = update
  const onAction = isDisabled ? () => {} : addMethod

  return (
    <header className="header">
      <h1 className="title">
        <AnimatedNumber
          value={booksAmount}
          duration={2000}
          formatValue={x => formatNumber(x, { fractionDigits: 0 })}
        />
      </h1>
      <div className="subtitle">book records</div>
      <button disabled={isDisabled} onClick={() => onAction(increment)}>double that!</button>
    </header>
  )
}

export default Header