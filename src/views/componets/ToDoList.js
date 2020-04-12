import React, { useContext } from 'react'

import ToDoItem from './ToDoItem'
import { listData } from '../componets/ListContext'

export default function ToDoList(props) {
  const [item] = useContext(listData)

  if(item.length === 0) return <span>No Items</span>
console.log('list', item)
  return (
    <ul className="todo-list">
      {item.map(item => 
          <ToDoItem  key={item.id} item={item}/>
      )}
    </ul>
  );
}
