import React from 'react';

import { BsWhatsapp, BsTelegram, BsGithub } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';

function SocialMedia() {
  return (
    <div className='app__social'>
      <div>
        <a href='https://github.com/Webfre' target='_blank' rel='noreferrer'>
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href='https://telegram.im/romanwebfree'
          target='_blank'
          rel='noreferrer'
        >
          <BsTelegram />
        </a>
      </div>
      <div>
        <a
          href='https://wa.clck.bar/79999797138?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD.%20%D0%AF%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83...'
          target='_blank'
          rel='noreferrer'
        >
          <BsWhatsapp />
        </a>
      </div>
      <div>
        <a href='https://vk.com/id367096719' target='_blank' rel='noreferrer'>
          <SlSocialVkontakte />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
