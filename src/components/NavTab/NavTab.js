import React from 'react'
import './NavTab.css'

export default function NavTab() {
  return (
    <div className='navtab'>
      <ul className='navtab__list'>
        <li className='navtab__list-item'>
          <a href='#about-project' className='navtab__link'>О проекте</a>
        </li>
        <li className='navtab__list-item'>
          <a href='#tech' className='navtab__link'>Технологии</a>
        </li>
        <li className='navtab__list-item'>
          <a href='#about-me' className='navtab__link'>Студент</a>
        </li>
      </ul>
    </div>
  )
}
