import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Ages = () => {
  const [age, setAge] = useState(null);
  const onClick = (e) => {
    setAge(e.target.value);
  };
  return (
    <Button.Group widths='7' className='ages' size='tiny'>
      >
      <Link to={`/search?age=age1`}>
        <Button
          onClick={(event) => onClick(event)}
          value='age1'
          style={
            age === 'age1'
              ? { backgroundColor: 'black', color: 'white' }
              : { backgroundColor: 'white' }
          }
        >
          삼국시대
        </Button>
      </Link>
      <Link to={`/search?age=age2`}>
        <Button
          onClick={(event) => onClick(event)}
          value='age2'
          active={age === 'age2'}
          style={
            age === 'age2'
              ? { backgroundColor: 'black', color: 'white' }
              : { backgroundColor: 'white' }
          }
        >
          통일신라
        </Button>
      </Link>
      <Link to={`/search?age=age3`}>
        <Button
          onClick={(event) => onClick(event)}
          value='age3'
          style={
            age === 'age3'
              ? { backgroundColor: 'black', color: 'white' }
              : { backgroundColor: 'white' }
          }
        >
          고려
        </Button>
      </Link>
      <Link to={`/search?age=age4`}>
        <Button
          onClick={(event) => onClick(event)}
          value='age4'
          style={
            age === 'age4'
              ? { backgroundColor: 'black', color: 'white' }
              : { backgroundColor: 'white' }
          }
        >
          조선
        </Button>
      </Link>
      <Link to={`/search?age=age5`}>
        <Button
          onClick={(event) => onClick(event)}
          value='age5'
          style={
            age === 'age5'
              ? { backgroundColor: 'black', color: 'white' }
              : { backgroundColor: 'white' }
          }
        >
          개항기
        </Button>
      </Link>
      <Link to={`/search?age=age6`}>
        <Button
          onClick={(event) => onClick(event)}
          value='age6'
          style={
            age === 'age6'
              ? { backgroundColor: 'black', color: 'white' }
              : { backgroundColor: 'white' }
          }
        >
          현대
        </Button>
      </Link>
      <Link to='/join'>
        <Button
          onClick={(event) => onClick(event)}
          value='chat'
          style={
            age === 'chat'
              ? { backgroundColor: 'black', color: 'white' }
              : { backgroundColor: 'white' }
          }
        >
          <Icon name='chat' />
          시험후기
        </Button>
      </Link>
    </Button.Group>
  );
};

export default Ages;
