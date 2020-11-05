import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import TableHead from './TableHead';
import ToDo from './ToDo';
import ToDoCreator from './ToDoCreator';
import DoneTableHead from './DoneTableHead';

const ToDoList = () => {
  const toDoItems = useSelector((state) => state.toDoItemsReducer);

  const deleteList = useSelector((state) => state.deleteListReducer);

  const dateRange = useSelector((state) => state.dateRangeReducer);

  const favoriteCheck = useSelector((state) => state.favoriteCheckReducer);

  const dispatch = useDispatch();

  const toDoRows = () => {
    let rows = toDoItems;

    if (dateRange.startDate !== null && dateRange.endDate !== null) {
      rows = rows
        .filter((todo) => todo.date >= dateRange.startDate && todo.date <= dateRange.endDate);
    }
    if (favoriteCheck) {
      rows = rows.filter((todo) => todo.favorite === true);
    }
    return rows.filter((todo) => todo.done === false).map((todo) => (
      <ToDo key={todo.content} todo={todo} favorite={false} />
    ));
  };

  const doneToDoRows = () => (
    toDoItems.filter((todo) => todo.done === true).map((todo) => (
      <ToDo key={todo.content} todo={todo} favorite={false} />
    ))
  );

  const deleteToDos = () => {
    dispatch({ type: 'DELETE', payload: deleteList });
    dispatch({ type: 'DELETE-RESTART' });
    dispatch({
      type: 'SHOW',
      payload: {
        show: true,
        head: 'To-do deleted succefully',
        body: '',
        variant: 'success',
      },
    });
  };

  return (
    <div>
      <ToDoCreator />
      <h1>To-do list</h1>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <TableHead favorite={false} />
          </thead>
          <tbody>
            {toDoRows()}
          </tbody>
        </table>
      </div>
      <h1>Done list</h1>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <DoneTableHead favorite={false} />
          </thead>
          <tbody>
            {doneToDoRows()}
          </tbody>
        </table>
      </div>
      {deleteList.length > 0 && (
        <button type="button" className="btn btn-danger ml-3" onClick={deleteToDos}>
          Delete
        </button>
      )}
    </div>
  );
};

export default ToDoList;
