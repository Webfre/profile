import React from 'react';

import { motion } from 'framer-motion';

import { Experience } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { DataSkills } from '../../constants';
import './skills.scss';

function Skills() {
  return (
    <>
      <h2 className='head-text'>Навыки & Технологии</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {DataSkills.map(skill => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <a href={skill.linkCompony} target='_blank' rel='noreferrer'>
                <div className='app__flex'>
                  <img src={skill.icon} alt={skill.name} />
                </div>
              </a>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
          {Experience.map((work, index) => (
            <motion.div
              className='app__skills-exp-item'
              key={work.year + index}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{work.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='app__skills-exp-work'
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <div
                      className='link'
                      draggable='false'
                      data-tooltip={work.desc}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </div>
                  </motion.div>
                </>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'навыки',
  'app__whitebg',
);
