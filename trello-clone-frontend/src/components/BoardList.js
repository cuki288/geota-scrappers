// BoardList.js
import React from 'react';
import './BoardList.css';

const BoardList = ({ boards }) => {
  return (
    <div className="board-list">
      <h2>Boards</h2>
      <ul>
        {boards.map(board => (
          <li key={board.id}>{board.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BoardList;