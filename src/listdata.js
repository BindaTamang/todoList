// src/components/TodoList.js
import React, { useState } from 'react';
import './TodoList.css';

const TodoList = ({ title, listData, onAddActivity, onRemoveActivity, onUpdateActivity, onMoveActivity, moveDirection }) => {
  const [activity, setActivity] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (activity.trim()) {
      if (editIndex === null) {
        onAddActivity(activity);
      } else {
        onUpdateActivity(editIndex, activity);
        setEditIndex(null);
      }
      setActivity('');
    }
  };

  const handleEdit = (index) => {
    setActivity(listData[index]);
    setEditIndex(index);
  };

  return (
    <div className='container'>
      <div className='header'>
        {title}
      </div>
      <input
        type='text'
        placeholder='Add activity'
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button onClick={handleAddOrUpdate}>{editIndex === null ? "Add" : "Update"}</button>
      <p className='list-heading'>Here is your List :{")"}</p>
      {listData.length > 0 && listData.map((data, index) => (
        <div key={index} className='list-item'>
          <div className='list-data'>{data}</div>
          <div className='btn-position'>
            <button onClick={() => onRemoveActivity(index)}>Remove</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => onMoveActivity(index)}>{moveDirection}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
