import React from 'react';

import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import dataImg from '../../constants/images';
import './header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

function Header() {
  return (
    <header className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Привет, я</p>
              <h1 className='head-text'>Роман</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Frontend web developer</p>
            <p className='p-text'>React, Redux, TypeScript</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7, delayChildren: 0.7 }}
        className='avatar'
      >
        <img
          className='avatar__image'
          src={dataImg.profile}
          alt='Фотография Роман'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circle'
      >
        {[dataImg.redux, dataImg.react, dataImg.typescript1].map(
          (circle, index) => (
            <div key={`circle-${index}`} className='circle-cmp app__flex'>
              <img src={circle} alt='circle' />
            </div>
          ),
        )}
      </motion.div>
    </header>
  );
}

export default AppWrap(Header, 'главная');
