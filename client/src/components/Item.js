import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Item = ({ year, name, des }) => {
  return (
    <Card fluid>
      <Card.Content>
        <h3>
          <mark
            style={{ padding: '5px', backgroundColor: 'black', color: 'white' }}
          >
            {name} [{year}~]
          </mark>
        </h3>

        <Image
          size='small'
          floated='left'
          src={`https://koreanhistoryjam.s3.ap-northeast-2.amazonaws.com/${year}.jpg`}
        />
        <p style={{ textAlign: 'left' }}>{des}</p>
      </Card.Content>
    </Card>
  );
};

export default Item;
