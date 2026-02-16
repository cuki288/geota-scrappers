// App.js
import React, { useState, useEffect } from 'react';
import { fetchUsers, fetchBoards, fetchLists, fetchCards, fetchComments } from './api';
import BoardList from './components/BoardList';
import List from './components/List';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [boards, setBoards] = useState([]);
  const [lists, setLists] = useState([]);
  const [cards, setCards] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        setUsers(await fetchUsers());
        setBoards(await fetchBoards());
        setLists(await fetchLists());
        setCards(await fetchCards());
        setComments(await fetchComments());
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="App">
      <h1>Trello Clone</h1>
      
      <BoardList boards={boards} />
      
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {lists.map(list => (
          <List 
            key={list.id} 
            list={list} 
            cards={cards.filter(card => card.listId === list.id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;