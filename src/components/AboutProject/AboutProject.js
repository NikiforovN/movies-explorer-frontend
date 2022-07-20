import React from 'react'
import './AboutProject.css'

export default function AboutProject() {
  return (
    <section className='about-project' id={'about-project'}>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__box'>
        <div className='about-project__box-item'>
          <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__box-content'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__box-item'>
          <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__box-content'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-project__graph'>
        <div className='about-project__graph-cell about-project__graph-cell_difference_first'>1 неделя</div>
        <div className='about-project__graph-cell about-project__graph-cell_difference_second'>4 недели</div>
        <div className='about-project__graph-cell about-project__graph-cell_difference_other'>Back-end</div>
        <div className='about-project__graph-cell about-project__graph-cell_difference_other'>Front-end</div>
      </div>
    </section>
  )
}
