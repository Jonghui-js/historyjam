import React from 'react';
import { Card } from 'semantic-ui-react';

const Item = ({ year, name, des }) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          {name} [{year}~]
        </Card.Header>
        <Card.Description>{des}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Item;
