import React from 'react';
import classNames from 'classnames';

import Cross from './component-cross';

const checkActivity = (optionsActive, option) => optionsActive.find(x => x === option)

const Discriminators = ({ onChange, optionsActive, options, disabled, style }) => {
  const discriminatorClasses = {
    'cl-button': true
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', ...style }}>
      { options.map((option, i) => 
        <div key={option}
             disabled={disabled}
             className={classNames({ ...discriminatorClasses, 'cl-inactive': checkActivity(optionsActive, option) })}
             onClick={() => onChange(option)}
             style={{ marginRight: options.length === i + 1 ? 0 : '5px' }}>
          { option }
          <Cross fill={checkActivity(optionsActive, option) ? '#ccc' : 'white'} style={{ width: '10px', marginLeft: '10px' }} />
        </div>
      ) }
    </div>
  )
}

export default Discriminators