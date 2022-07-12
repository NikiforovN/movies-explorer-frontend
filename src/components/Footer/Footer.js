import React from 'react'
import { Route } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <Route exact path='/signup'></Route>
            <Route exact path='/signin'></Route>
            <Route exact path='/'>
                <footer className='footer'>
                    <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                    <div className='footer__box'>
                        <p className='footer__copyright'>&copy;2022</p>
                        <ul className='footer__list'>
                            <li className='footer__list-item'>
                                <a className='footer__link' href='https://practicum.yandex.ru' target='_blank'>Яндекс.Практикум</a>
                            </li>
                            <li className='footer__list-item'>
                                <a className='footer__link' href='https://github.com/NikiforovN' target='_blank'>Github</a>
                            </li>
                            <li className='footer__list-item'>
                                <a className='footer__link' href='https://t.me/nikiforovnd' target='_blank'>Telegram</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </Route>

        </>
    )
}
