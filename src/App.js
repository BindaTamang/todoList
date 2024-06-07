// src/App.js
import './App.css';
import React, { useState } from 'react';
import TodoList from './listdata';

function App() {
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);

  const addToList1 = (item) => setList1([...list1, item]);
  const addToList2 = (item) => setList2([...list2, item]);

  const removeFromList1 = (index) => setList1(list1.filter((_,i) => i !== index));
  const removeFromList2 = (index) => setList2(list2.filter((_, i) => i !== index));

  const updateList1 = (index, newItem) => {
    const updatedList = list1.map((item, i) => i === index ? newItem : item);
    setList1(updatedList);
  };

  const updateList2 = (index, newItem) => {
    const updatedList = list2.map((item, i) => i === index ? newItem : item);
    setList2(updatedList);
  };

  const moveToSecondList = (index) => {
    const item = list1[index];
    removeFromList1(index);
    addToList2(item);
  };

  const moveToFirstList = (index) => {
    const item = list2[index];
    removeFromList2(index);
    addToList1(item);
  };

  const moveAllToFirstList = () => {
    setList1([...list1, ...list2]);
    setList2([]);
  };

  const moveAllToSecondList = () => {
    setList2([...list2, ...list1]);
    setList1([]);
  };

  return (
    <div className="App">
      <div className="list-container">
        <TodoList
          title="To-Do List 1"
          listData={list1}
          onAddActivity={addToList1}
          onRemoveActivity={removeFromList1}
          onUpdateActivity={updateList1}
          onMoveActivity={moveToSecondList}
          moveDirection="Move to List 2"
        />
        <div className="controls">
        <button onClick={moveAllToFirstList}>Move All to List 1</button>
        <button onClick={moveAllToSecondList}>Move All to List 2</button>
      </div>
        <TodoList
          title="To-Do List 2"
          listData={list2}
          onAddActivity={addToList2}
          onRemoveActivity={removeFromList2}
          onUpdateActivity={updateList2}
          onMoveActivity={moveToFirstList}
          moveDirection="Move to List 1"
        />
      </div>
    </div>
  );
}

export default App;
