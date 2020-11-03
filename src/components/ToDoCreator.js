import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const ToDoCreator = () => {

  const [newToDoContent, setNewToDoContent] = useState('');

  const toDoItems = useSelector(state => state.toDoItemsReducer)

  const updateNewToDoValue = e => setNewToDoContent(e.target.value)

  const dispatch = useDispatch();

  const createNewToDo = toDoContent => {
    if (!toDoItems.find(t => t.content === toDoContent)) {
      const date = new Date()
      const todo = {
        content: toDoContent,
        favorite: false,
        done: false,
        date: date.toDateString()
      }
      dispatch({ type: 'INSERT', payload: todo })
      setNewToDoContent('')
    } else {
      alert('There is already a to-do with that name')
    }
  }


  return (
    <div className="my-2">
      <input
        type="text"
        className="form-control"
        value={newToDoContent}
        onChange={updateNewToDoValue}
        placeholder='Create new To-Do'
      />
      <button className="btn btn-primary mt-1 ml-auto d-block" onClick={() => createNewToDo(newToDoContent)}>
        Create
      </button>
    </div>
  )
}
