import React from 'react';

const MessageInput = ({ setMessage, sendMessage, message }) => (
  <form className='form'>
    <input
      className='input'
      type='text'
      placeholder='메세지를 입력하세요'
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => (event.key === 'Enter' ? sendMessage(event) : null)}
    />
    <button className='sendButton' onClick={e => sendMessage(e)}>
      보내기
    </button>
  </form>
);

export default MessageInput;
