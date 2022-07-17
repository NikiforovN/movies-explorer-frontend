import React from 'react'
import './Portfolio.css'
import arrowIcon from '../../images/portfolio__arrow.svg'

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' rel="noreferrer" href='https://nikiforovn.github.io/how-to-learn/' target='_blank'>
            <p className='portfolio__link-title'>Статичный сайт</p>
            <img className='portfolio__link-image' src={arrowIcon} alt='Стрелка' />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' rel="noreferrer" href='https://nikiforovn.github.io/russian-travel/index.html' target='_blank'>
            <p className='portfolio__link-title'>Адаптивный сайт</p>
            <img className='portfolio__link-image' src={arrowIcon} alt='Стрелка' />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__link ' rel="noreferrer" href='https://github.com/NikiforovN/react-mesto-api-full' target='_blank'>
            <p className='portfolio__link-title'>Одностраничное приложение</p>
            <img className='portfolio__link-image' src={arrowIcon} alt='Стрелка' />
          </a>
        </li>
      </ul>
    </section>
  )
}
