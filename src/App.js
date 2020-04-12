import React from 'react';
import ToDoList from './views/componets/ToDoList'
import ListContext from './views/componets/ListContext'
import NewToDoItem from './views/componets/NewToDoItem'

function App() {
  return (
    <div className="App">
      <ListContext >
        <NewToDoItem />
        <tr />
        <ToDoList />
      </ListContext>
    </div>
  );
}

export default App;
