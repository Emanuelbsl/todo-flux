import React, { useContext } from 'react';
import { listData } from './ListContext'

export default function ToDoItem(props) {
  const [, dispatch] = useContext(listData)
  const { item } = props

  const handleRemover = id => {
    dispatch({
      type: 'remove', 
      value: id
    })
  }

  const handleUpdate = item => {
    dispatch({
      type: 'update', 
      value: {
        id: item.id,
        description: item.description,
        isChecked: false
      }
    })
  }

  const handleCheck = item => {
    dispatch({
      type: 'update', 
      value: {
        id: item.id,
        description: item.description,
        isChecked: !item.isChecked
      }
    })
  }

  return (
   <li className="todo-list-item">
     <input onClick={() => handleCheck(item)} className="tw-check" type="checkbox" checked={item.isChecked} />
     <input onBlur={handleUpdate} className="tw-input" type="text" disabled={item.isChecked} defaultValue={item.description}/>
     <button className="tw-btn" onClick={() => handleRemover(item)} >X</button>
   </li>
  );
}
