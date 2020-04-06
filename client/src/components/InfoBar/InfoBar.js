import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

const InfoBar = ({ room, users }) => (
  <div className='infoBar'>
    <div className='leftInnerContainer'>
      <img className='onlineIcon' src={onlineIcon} alt='online icon' />
      <span style={{ fontSize: '20px' }}>
        {room === 'basic' ? '기본' : '심화'}[{users}명]
      </span>
    </div>
    <div className='rightInnerContainer'>
      <a href='/'>
        <img src={closeIcon} alt='close icon' />
      </a>
    </div>
  </div>
);

export default InfoBar;
