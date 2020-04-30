import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';
import { Loader } from 'semantic-ui-react';
import { Card, Image, Divider } from 'semantic-ui-react';

const Cards = ({ location }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setCards([]);
      const res = await axios.get(`/search${location.search}`);
      setCards(res.data.currentAge);
      setLoading(res.data.loading);
    };
    fetchData();
  }, []);

  localStorage.setItem('age', location.search.slice(5, 9));

  return loading ? (
    <Loader active size='large'>
      Loading...
    </Loader>
  ) : (
    <div className='card-container'>
      {cards.map((card) => (
        <Card fluid key={card._id}>
          <Card.Content>
            <h3>
              {card.name} [{card.year}~]
            </h3>
            <Divider />

            <Image
              size='small'
              floated='left'
              src={`https://koreanhistoryjam.s3.ap-northeast-2.amazonaws.com/${card.year}.jpg`}
            />
            <p style={{ textAlign: 'left' }}>{card.description}</p>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
