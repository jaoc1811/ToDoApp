import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const ToDo = props => {

  const [edit, setEdit] = useState(false)

  const [newToDoContent, setNewToDoContent] = useState(props.todo.content)

  const dispatch = useDispatch();

  const deleteList = useSelector(state => state.deleteListReducer)

  const toDoItems = useSelector(state => state.toDoItemsReducer)

  const toggleFavorite = () => {
    dispatch({ type: 'TOGGLE-FAVORITE', payload: props.todo.content })
  }

  const toggleDone = () => {
    dispatch({ type: 'TOGGLE-DONE', payload: props.todo.content })
  }

  const addToDeleteList = () => {
    dispatch({ type: 'DELETE/INSERT', payload: props.todo })
  }

  const removeFromDeleteList = () => {
    dispatch({ type: 'DELETE/REMOVE', payload: props.todo.content })
  }

  const editToDo = () => {
    if (toDoItems.some(todo => todo.content === newToDoContent)) {
      alert('There is already a to-do with that name')
    } else if (newToDoContent === '') {
      alert('To-do needs content to be updated')
    } else {
      dispatch({ type: 'EDIT', payload: { old: props.todo.content, new: newToDoContent } })
      dispatch({
        type: 'SHOW', payload: {
          show: true,
          head: 'To-do edited succefully',
          body: '',
          variant: 'success'
        }
      })
      setEdit(false)
    }
  }

  const showEdit = () => (
    edit ?
      <i className='fas fa-edit text-info' style={{ cursor: "pointer" }} onClick={handleEdit} /> :
      <i className='fas fa-edit' style={{ cursor: "pointer" }} onClick={handleEdit} />
  )

  const handleEdit = () => (
    setEdit(!edit)
  )

  const updateNewToDoValue = e => setNewToDoContent(e.target.value)

  const showDelete = () => (
    deleteList.some(e => e.content === props.todo.content) ?
      <i className='fas fa-trash-alt text-danger' style={{ cursor: "pointer" }} onClick={removeFromDeleteList} /> :
      <i className='fas fa-trash-alt' style={{ cursor: "pointer" }} onClick={addToDeleteList} />
  )

  return (
    <tr>
      {!props.favorite && (
        <td><div className='d-flex justify-content-around'>{showEdit()}{showDelete()}</div></td>
      )}
      <td>
        {edit ?
          <div className='d-flex'>
            <input type="text" className='form-control mr-2' placeholder='Enter new description' value={newToDoContent} onChange={updateNewToDoValue} />
            <button className='btn btn-primary' onClick={editToDo}>Update</button>
          </div> :
          props.todo.done ? <del>{props.todo.content}</del> :
            props.todo.content
        }
      </td>
      <td>
        {props.todo.done ? <del>{props.todo.date.toDateString()}</del> :
          props.todo.date.toDateString()
        }
      </td>
      <td className='text-center'>
        {props.todo.favorite ? <i className="fas fa-heart text-danger" style={{ cursor: "pointer" }} onClick={toggleFavorite} /> : <i className="far fa-heart" style={{ cursor: "pointer" }} onClick={toggleFavorite} />}
      </td>
      <td>
        <input type="checkbox" className='mt-3 ml-4 d-block' checked={props.todo.done} onChange={toggleDone} />
      </td>
    </tr>
  )
}