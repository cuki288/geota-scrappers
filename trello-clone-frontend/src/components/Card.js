// Card.js
import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  return (
    <div className="card">
      <h4>{card.title}</h4>
      <p>{card.description}</p>
    </div>
  );
};

export default Card;