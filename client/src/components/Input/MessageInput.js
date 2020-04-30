import React from 'react';
import { Icon } from 'semantic-ui-react';

const MessageInput = ({ setMessage, sendMessage, message }) => (
  <form className='form'>
    <input
      className='input'
      type='text'
      placeholder='메세지를 입력하세요'
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === 'Enter' ? sendMessage(event) : null
      }
    />
    <div className='sendButton' onClick={(e) => sendMessage(e)}>
      <Icon name='send' fitted={true} />
    </div>
  </form>
);

export default MessageInput;
