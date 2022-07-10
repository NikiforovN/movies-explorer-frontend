import React from 'react'
import './AboutMe.css'
import myPhoto from '../../images/my-photo.jpg'
export default function AboutMe() {
  return (
    <div className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__box'>
          <h3 className='about-me__name'>Никита</h3>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 22 года</p>
          <p className='about-me__text'>
            Я родился в Иркутске. Живу в Новосибирске, закончил ИрНИТУ по специальности "Автоматизация Технологических Процессов и Производств".
            Люблю слушать музыку, а ещё увлекаюсь бегом.
            Последний год увлекся Фронтендом. С 2021 года работал в компании «Машзавод Труд».
          </p>
          <ul className='about-me__list'>
            <li className='about-me__list-item'>
              <a className='about-me__link' href='https://t.me/nikiforovnd' target='_blank'>Telegram</a>
            </li>
            <li className='about-me__list-item'>
              <a className='about-me__link' href='https://github.com/NikiforovN' target='_blank'>Github</a>
            </li>
          </ul>
        </div>
        <img className='about-me__image' src={myPhoto} alt='Фотокарточка' />
      </div>
    </div>
  )
}
