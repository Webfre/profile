import React from 'react';

function NavigationDots({ active }) {
  return (
    <div className='app__navigation'>
      {['главная', 'обо мне', 'проекты', 'навыки', 'контакты'].map(
        (item, index) => (
          <a
            key={item + index}
            href={`#${item}`}
            className='app__navigation-dot'
            style={active === item ? { backgroundColor: '#313BAC' } : {}}
          >
            {' '}
          </a>
        ),
      )}
    </div>
  );
}

export default NavigationDots;
