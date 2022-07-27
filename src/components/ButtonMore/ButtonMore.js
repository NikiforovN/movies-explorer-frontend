import React from 'react'
import './ButtonMore.css'

export default function ButtonMore({onClick}) {
  return (
    <button onClick={onClick} type='button' className='button'>Ещё</button>
  )
}
