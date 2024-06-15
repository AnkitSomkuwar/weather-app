import React from 'react'
import './ToggleSwitch.css'

const ToggleSwitch = ({toggleTheme}) => {
  return (
    <div className="toggle-switch">
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default ToggleSwitch
