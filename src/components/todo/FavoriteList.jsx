import React from 'react';
import { useSelector } from 'react-redux';

// Components
import TableHead from './TableHead';
import ToDo from './ToDo';
import DoneTableHead from './DoneTableHead';

/**
 * Render favorite todo list
 */
const FavoriteList = () => {
  const toDoItems = useSelector((state) => state.toDoItemsReducer);

  const dateRange = useSelector((state) => state.dateRangeReducer);

  /**
   * Function that render a row for every favorite todo in toDoItems
   */
  const favoriteRows = () => {
    let rows = toDoItems;

    // Filter by date range
    if (dateRange.startDate !== null && dateRange.endDate !== null) {
      rows = rows
        .filter((todo) => todo.date >= dateRange.startDate && todo.date <= dateRange.endDate);
    }
    return rows.filter((todo) => todo.done === false && todo.favorite === true).map((todo) => (
      <ToDo key={todo.content} todo={todo} favorite />
    ));
  };

  /**
   * Function that render a row for every done favorite todo in toDoItems
   */
  const doneFavoriteRows = () => (
    toDoItems.filter((todo) => todo.done === true && todo.favorite === true).map((todo) => (
      <ToDo key={todo.content} todo={todo} favorite />
    ))
  );

  return (
    <div>
      <h1>Favorite list</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-2">
          <thead>
            <TableHead favorite />
          </thead>
          <tbody>
            {favoriteRows()}
          </tbody>
        </table>
      </div>
      <h1>Done favorite list</h1>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <DoneTableHead favorite />
          </thead>
          <tbody>
            {doneFavoriteRows()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavoriteList;
