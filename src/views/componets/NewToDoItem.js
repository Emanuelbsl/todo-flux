import React, { useState, useContext } from 'react'
import { listData } from './ListContext'

export default function NewToDoItem() {
  const [description, setDescription] = useState('')
  const [state, dispatch ] = useContext(listData)

  const handleChange = ({target}) => setDescription(target.value)

  const submitForm = event => {
    event.preventDefault()
    if(description){
      setDescription('')
      dispatch(
        {
          type: 'insert', 
          value:{
            id: state.length + 1,
            description,
            isChecked: false
          }
        }
      )
    }
  }

  return (
    <form onSubmit={submitForm}>
      <input 
        className="tw-input"
        type="text"
        placeholder="Novo Item"
        name="description"
        value={description}
        onChange={handleChange}
      />
    <button className="bt-btn">Adicionar</button>
    </form>
  )
}
