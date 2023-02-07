import React, { useState } from 'react';

import dataImg from '../../constants/images';
import { AppWrap, MotionWrap } from '../../wrapper';
import './footer.scss';

function Footer() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const copyrightDate = new Date();
  const { name, email, message } = formData;

  const handleChangeInput = e => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    // submit form Data
  };

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
          <a href='tel:+7 (999) 997-138' className='p-text'>
            +7 (999) 99 71 38
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Имя'
              name='name'
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Сообщение...'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button
            style={{ letterSpacing: '0.1rem' }}
            className='p-text'
            type='button'
            onClick={handleSubmit}
          >
            {loading ? 'Отправка' : 'Отправить'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Спасибо вам за то, что связались 🙏</h3>
        </div>
      )}
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
