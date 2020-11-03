import React from 'react'
import { useDispatch} from 'react-redux'

export const ToDo = props => {

  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch({type: 'TOGGLE-FAVORITE', payload: props.todo.content})
  }

  const toggleDone = () => {
    dispatch({type: 'TOGGLE-DONE', payload: props.todo.content})
  }

  return (
    <tr>
      <td>{props.todo.content}</td>
      <td>{props.todo.date}</td>
      <td className='text-center'>
        {props.todo.favorite ? <i className="fas fa-heart" style={{cursor: "pointer"}} onClick={toggleFavorite}/> : <i className="far fa-heart" style={{cursor: "pointer"}} onClick={toggleFavorite}/>}
      </td>
      <td>
        <input
          type="checkbox"
          className='mx-auto d-block'
          checked={props.todo.done}
          onChange={toggleDone}
        />
      </td>
    </tr>
  )
}