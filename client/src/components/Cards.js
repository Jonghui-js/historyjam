import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';
import { Loader } from 'semantic-ui-react';

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
  }, [location]);

  return loading ? (
    <Loader active size='large'>
      Loading...
    </Loader>
  ) : (
    <div className='card-container'>
      {cards.map((card) => (
        <Item
          year={card.year}
          name={card.name}
          des={card.description}
          key={card._id}
        />
      ))}
    </div>
  );
};

export default Cards;
