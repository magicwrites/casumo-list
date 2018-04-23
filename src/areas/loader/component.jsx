import React from 'react'
import classNames from 'classnames'
import { BarLoader } from 'react-spinners'

import './style.css'

const Loader = ({ isUpdating }) => {
  return (
    <aside className={classNames({ loader: true, visible: isUpdating })}>
      <div className="loader-bar">
        <BarLoader color="#ab8c71" loading={true} />
      </div>
      <div className="container">
        <div className="loader-message">
          <span className={classNames({ visible: isUpdating === 'add' })}>Creating book records</span>
          <span className={classNames({ visible: isUpdating === 'sort' })}>Sorting book records</span>
        </div>
      </div>
    </aside>
  )
}

export default Loader;