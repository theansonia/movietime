import React, { useState, useContext } from 'react'
import sun from './sun.svg'
import moon from './moon.svg'
import { ThemeContext } from '../../../contexts/ThemeContext'

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext)
  const [icon, setIcon] = useState(true)

  const iconChange = () => {
    let newIcon = !icon
    setIcon(newIcon)
  }

  return (
    <div className='toggle__box'>
      <span>
        {!icon ? (
          <img
            src={moon}
            alt='moon symbole for theme change'
            className='moon-icon'
          />
        ) : (
          <img
            src={sun}
            alt='sun symbole for theme change'
            className='sun-icon'
          />
        )}
      </span>
      <div className='toggle__btn' onClick={toggleTheme}>
        <input type='checkbox' className='checkbox' onChange={iconChange} />
        <div className='circle'></div>
        <div className='layer'></div>
      </div>
    </div>
  )
}

export default ToggleTheme
