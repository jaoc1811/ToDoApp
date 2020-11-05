import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

const ToDoCreator = () => {
  const [newToDoContent, setNewToDoContent] = useState('');

  const toDoItems = useSelector((state) => state.toDoItemsReducer);

  const updateNewToDoValue = (e) => setNewToDoContent(e.target.value);

  const dispatch = useDispatch();

  const createNewToDo = (toDoContent) => {
    if (toDoItems.some((t) => t.content === toDoContent)) {
      dispatch({
        type: 'SHOW',
        payload: {
          show: true,
          head: 'Couldn\'t create to-do ',
          body: 'There is already a to-do with that name',
          variant: 'danger',
        },
      });
    } else if (toDoContent === '') {
      dispatch({
        type: 'SHOW',
        payload: {
          show: true,
          head: 'Couldn\'t create to-do ',
          body: 'To-do needs content to be created',
          variant: 'danger',
        },
      });
    } else {
      const todo = {
        content: toDoContent,
        favorite: false,
        done: false,
        date: new Date(),
      };
      dispatch({ type: 'INSERT', payload: todo });
      dispatch({
        type: 'SHOW',
        payload: {
          show: true,
          head: 'To-do created succefully',
          body: '',
          variant: 'success',
        },
      });
      setNewToDoContent('');
    }
  };

  return (
    <div className="my-2">
      <input
        type="text"
        className="form-control"
        value={newToDoContent}
        onChange={updateNewToDoValue}
        placeholder="Create new To-Do"
      />
      <button type="button" className="btn btn-primary mt-1 ml-auto d-block" onClick={() => createNewToDo(newToDoContent)}>
        Create
      </button>
    </div>
  );
};

export default ToDoCreator;
