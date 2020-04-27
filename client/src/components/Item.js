import React from 'react';
import { Card, Image, Divider } from 'semantic-ui-react';

const Item = ({ year, name, des }) => {
  return (
    <Card fluid>
      <Card.Content>
        <h3>
          {name} [{year}~]
        </h3>
        <Divider />

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
