import React from 'react';

import dataImg from '../../constants/images';
import { AppWrap, MotionWrap } from '../../wrapper';
import './footer.scss';

function Footer() {
  const copyrightDate = new Date();

  return (
    <>
      <h2 className='head-text'>Связаться со мной</h2>
      <h3 className='head-text-small'>
        Остались <span style={{ color: 'blueviolet' }}>вопросы?</span>{' '}
        Обращайтесь, буду рад вам помочь!
      </h3>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={dataImg.email} alt='email' />
          <a href='mailto:romain.muhametschin@yandex.ru' className='p-text'>
            Напиши мне
          </a>
        </div>

        <div className='app__footer-card'>
          <img src={dataImg.mobile} alt='mobile' />
          <a href='tel:+7 (999) 979-71-38' className='p-text'>
            +7 (999) 979 71 38
          </a>
        </div>
      </div>

      <div className='app__footer-form app__flex'>
        <form
          target='_blank'
          action='https://formspree.io/f/mgebazpo'
          method='POST'
        >
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Имя'
              name='name'
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              placeholder='Почта'
              name='email'
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Сообщение'
              name='message'
            />
          </div>
          <button
            style={{ letterSpacing: '0.1rem' }}
            className='p-text'
            type='submit'
          >
            Отправить
          </button>
        </form>
      </div>
      <div className='copyright'>
        <p className='p-text'>&#169; Мухаметшин Р. М.</p>
        <p className='p-text'>2022 — {copyrightDate.getFullYear()}</p>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'контакты',
  'app__primarybg',
);
