import React from 'react'
import { useSelector } from 'react-redux'
import { ToDo } from './ToDo'
import {ToDoCreator} from './ToDoCreator'


export const ToDoList = () => {


  const toDoItems = useSelector(state => state.toDoItemsReducer)

  const toDoRows = () => (
    toDoItems.map(todo => (
      <ToDo todo={todo} />
    ))
  )

  return (
    <div>
      <ToDoCreator />
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th style={{width: '45%'}}>Description</th>
            <th style={{width: '45%'}}>Date</th>
            <th className='mx-auto' style={{width: '5%'}}>Favorite</th>
            <th className='mx-auto' style={{width: '5%'}}>Done</th>
          </tr>
        </thead>
        <tbody>
          {toDoRows()}
        </tbody>
      </table>
    </div>
  )
}
