import React from 'react';

import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { Info } from '../../constants';
import './about.scss';

function About() {
  return (
    <>
      <h2 className='head-text'>
        Знаю, что
        <span> Хорошая команда</span>
        <br />
        Означает
        <span> Хороший бизнес</span>
      </h2>

      <div className='app__profiles'>
        {Info.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'обо мне',
  'app__whitebg',
);
