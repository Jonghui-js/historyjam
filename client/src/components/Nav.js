import React, { useState } from 'react';
import korea from './korea.png';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const Nav = () => {
  const [age, setAge] = useState();
  const onClick = (e) => {
    setAge(e.target.innerText);
  };
  return (
    <>
      <div className='nav'>
        <Link to='/'>
          <img src={korea} alt='logo' style={{ width: '50px' }} />
        </Link>
        <h3 style={{ margin: '0' }}>Koean History Jam</h3>
        <p className='subnav'>한국사능력검정시험 대비 사이트</p>
        <div className='ages'>
          <Link to={`/search?age=age1`}>
            <div onClick={(event) => onClick(event)}>삼국시대</div>
          </Link>
          <Link to={`/search?age=age2`}>
            <div onClick={(event) => onClick(event)}>통일신라</div>
          </Link>
          <Link to={`/search?age=age3`}>
            <div onClick={(event) => onClick(event)}>고려</div>
          </Link>
          <Link to={`/search?age=age4`}>
            <div onClick={(event) => onClick(event)}>조선</div>
          </Link>
          <Link to={`/search?age=age5`}>
            <div onClick={(event) => onClick(event)}>개항기</div>
          </Link>
          <Link to={`/search?age=age6`}>
            <div onClick={(event) => onClick(event)}>현대</div>
          </Link>
          <Link to='/join'>
            <div onClick={(event) => onClick(event)}>
              <Icon name='chat' />
              채팅
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
