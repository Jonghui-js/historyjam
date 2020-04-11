import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('advanced');

  return (
    <div className='join-container'>
      <h3 className='heading'>닉네임과 방을 적어주세요</h3>
      <div>
        <input
          placeholder='Name'
          className='joinInput'
          type='text'
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className='room-select'>
        <select
          name='room'
          onChange={(e) => setRoom(e.target.value)}
          style={{
            width: '200px',
            height: '30px',
            display: 'block',
            justifyContent: 'center',
            margin: '10px auto',
            border: '1px solid black',
          }}
        >
          <option value='advanced'>심화</option>
          <option value='basic'>기본</option>
        </select>
      </div>

      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button className={'button mt-20'} type='submit'>
          참여하기
        </button>
      </Link>
    </div>
  );
}
