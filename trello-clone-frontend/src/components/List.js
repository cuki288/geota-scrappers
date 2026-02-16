// List.js
import React from 'react';
import './List.css';

const List = ({ list, cards }) => {
  return (
    <div className="list">
      <h3>{list.name}</h3>
      <ul>
        {cards.map(card => (
          <li key={card.id}>{card.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;