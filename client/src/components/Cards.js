import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';
import { Loader } from 'semantic-ui-react';

const Cards = ({ location }) => {
  const [cards, setCards] = useState([]);
  const [skip, setSkip] = useState(0);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/search${location.search}&skip=${skip}`);
        setCards([...cards, ...res.data.currentAge]);
        setLoading(res.data.loading);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [skip]);

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;
    if (offsetHeight + scrollTop === scrollHeight) {
      setSkip(cards.length);
    }
  };

  return loading ? (
    <Loader active size='large'>
      Loading...
    </Loader>
  ) : (
    <div className='cards' onScroll={handleScroll}>
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
