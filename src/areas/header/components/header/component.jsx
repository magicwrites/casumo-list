import React from 'react';
import AnimatedNumber from 'react-animated-number';
import formatNumber from 'simple-format-number';

const Header = ({ onAdd, booksAmount = 0 }) => {
  return (
    <div className="row">
      <div className="col-8">
        <h1>Javascript challenge</h1>
        <p>Buttons in header allow you to pick sorting of your choice, or filter out certain genres or gender. Horror books on halloween are marked with red <span className="label error upper">HORROR</span> label and finance books on a last friday of the month have <span className="label success upper">finance</span> label.</p>
        <p>Enjoy!</p>
      </div>
    
      <div className="col-4" style={{ textAlign: 'right' }}>
        <div style={{ marginTop: '45px', marginBottom: '10px', letterSpacing: '2px' }}>
          <AnimatedNumber
            value={booksAmount}
            style={{
              fontSize: 32,
              transitionProperty: 'background-color, color, opacity'
            }}
            duration={2000}
            formatValue={x => formatNumber(x, { fractionDigits: 0 })}
          />
        </div>

        <div>books in play</div>

        <button onClick={() => onAdd(booksAmount * 2)}>double that!</button>
      </div>
    </div>
  )
}

export default Header