import React from 'react';
import korea from './korea.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
      <Link to='/'>
        <img src={korea} alt='logo' style={{ width: '50px' }} />
      </Link>
      <h1>Koean History Jam</h1>
      <p className='subnav'>한국사능력검정시험 대비 사이트</p>
    </div>
  );
};

export default Nav;
