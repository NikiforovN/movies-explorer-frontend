import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {

  const history = useHistory()

  return (
    <section className='not-found'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__subtitle'>Страница не найдена</p>
        <Link>
            <button type='button' className='not-found__back-button' onClick={()=> history.goBack()}>Назад</button>
        </Link>
    </section>
  )
}
