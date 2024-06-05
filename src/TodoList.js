import React, { useState } from 'react'
import './TodoList.css';

const TodoList = () => {
  const [activity, setActivity] = useState("")
  const [listData, setListData] = useState([])
  const [editData, setEditData] = useState(null)
  const addActivity = () => {
    if (editData === null) {
      setListData((listData) => {
        const updatedList = [...listData, activity];
        console.log(updatedList);
        setActivity('');
        return updatedList;
      });
    } else {
      const updatedList = listData.map((item, index) => 
        index === editData ? activity : item
      );
      setListData(updatedList);
      setActivity('');
      setEditData(null);
    }
    
  }
  const removeActivity = (i) => {
    const updatedListData = listData.filter((element, id) => {
      return i!=id
    })
    setListData(updatedListData)

  }
  const updateData = (i) => {
    setActivity(listData[i])
    setEditData(i)

  }
  const removeAll = () => {
    setListData([])
  }

  return (
    <div className='container'>
      <div className='header'>
        To Do List
      </div>
      <input type='text' placeholder='Add activity' value={activity} onChange={(e) => setActivity(e.target.value)}/>
      <button onClick={addActivity} >Add</button>
      <p className='list-heading'>Here is your List :{")"}</p>
      { listData!=[] && listData.map((data, i) => {
        return <>
        <p key={i}>
          <div className='list-data'>{data}</div>
         <div className='btn-position'>
          <button onClick={() => removeActivity(i)}>Remove</button>
          <button onClick={() => updateData(i)}>Update</button>
          </div>

        </p>
        </>
      })}
      {listData.length >= 1 && 
      <button onClick={removeAll}>Remove All</button>}
    </div>
  )
}

export default TodoList;