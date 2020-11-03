import React from 'react'
import { useSelector } from 'react-redux'
import { ToDo } from './ToDo'

export const FavoriteList = () => {

  const toDoItems = useSelector(state => state.toDoItemsReducer)

  const favoriteRows = () => (
    toDoItems.filter(todo => todo.favorite === true).map(todo => (
      <ToDo todo={todo} />
    ))
  )

  return (
    <table className='table table-striped table-bordered mt-2'>
      <thead>
        <tr>
          <th style={{ width: '45%' }}>Description</th>
          <th style={{ width: '45%' }}>Date</th>
          <th className='mx-auto' style={{ width: '5%' }}>Favorite</th>
          <th className='mx-auto' style={{ width: '5%' }}>Done</th>
        </tr>
      </thead>
      <tbody>
        {favoriteRows()}
      </tbody>
    </table>
  )
}
