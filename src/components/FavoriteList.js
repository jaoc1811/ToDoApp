import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DoneTableHead } from './DoneTableHead'

// Components
import { TableHead } from './TableHead'
import { ToDo } from './ToDo'

export const FavoriteList = () => {

  const toDoItems = useSelector(state => state.toDoItemsReducer)

  const dateRange = useSelector(state => state.dateRangeReducer)

  const dispatch = useDispatch()

  const favoriteRows = () => {

    let rows = toDoItems

    if (dateRange.startDate !== null && dateRange.endDate !== null) {
      rows = rows.filter(todo => todo.date >= dateRange.startDate && todo.date <= dateRange.endDate)
    }
    return rows.filter(todo => todo.done === false && todo.favorite === true).map(todo => (
      <ToDo key={todo.content} todo={todo} favorite={true} />
    ))
  }

  const doneFavoriteRows = () => (
    toDoItems.filter(todo => todo.done === true && todo.favorite === true).map(todo => (
      <ToDo key={todo.content} todo={todo} favorite={true} />
    ))
  )

  return (
    <div>
      <h1>Favorite list</h1>
      <div className='table-responsive'>
        <table className='table table-striped table-bordered mt-2'>
          <thead>
            <TableHead favorite={true} />
          </thead>
          <tbody>
            {favoriteRows()}
          </tbody>
        </table>
      </div>
      <h1>Done favorite list</h1>
      <div className='table-responsive'>
        <table className='table table-bordered'>
          <thead>
            <DoneTableHead favorite={true} />
          </thead>
          <tbody>
            {doneFavoriteRows()}
          </tbody>
        </table>
      </div>
    </div>
  )
}
