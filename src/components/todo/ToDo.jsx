import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const ToDo = (props) => {
  const { favorite, todo } = props;

  const [edit, setEdit] = useState(false);

  const [newToDoContent, setNewToDoContent] = useState(todo.content);

  const dispatch = useDispatch();

  const deleteList = useSelector((state) => state.deleteListReducer);

  const toDoItems = useSelector((state) => state.toDoItemsReducer);

  const toggleFavorite = () => {
    dispatch({ type: 'TOGGLE-FAVORITE', payload: props.todo.content });
  };

  const toggleDone = () => {
    dispatch({ type: 'TOGGLE-DONE', payload: props.todo.content });
  };

  const addToDeleteList = () => {
    dispatch({ type: 'DELETE-INSERT', payload: props.todo });
  };

  const removeFromDeleteList = () => {
    dispatch({ type: 'DELETE-REMOVE', payload: props.todo.content });
  };

  const editToDo = () => {
    if (toDoItems.some((t) => t.content === newToDoContent)) {
      dispatch({
        type: 'SHOW',
        payload: {
          show: true,
          head: 'Couldn\'t edit to-do ',
          body: 'There is already a to-do with that name',
          variant: 'danger',
        },
      });
    } else if (newToDoContent === '') {
      dispatch({
        type: 'SHOW',
        payload: {
          show: true,
          head: 'Couldn\'t edit to-do ',
          body: 'To-do needs content to be edited',
          variant: 'danger',
        },
      });
    } else {
      dispatch({ type: 'EDIT', payload: { old: props.todo.content, new: newToDoContent } });
      dispatch({
        type: 'SHOW',
        payload: {
          show: true,
          head: 'To-do edited succefully',
          body: '',
          variant: 'success',
        },
      });
      setEdit(false);
    }
  };

  const handleEdit = () => (
    setEdit(!edit)
  );

  const showEdit = () => (
    edit ? <i className="fas fa-edit text-info" style={{ cursor: 'pointer' }} onClick={handleEdit} />
      : <i className="fas fa-edit" style={{ cursor: 'pointer' }} onClick={handleEdit} />
  );

  const updateNewToDoValue = (e) => setNewToDoContent(e.target.value);

  const showDelete = () => (
    deleteList.some((e) => e.content === props.todo.content)
      ? <i className="fas fa-trash-alt text-danger" style={{ cursor: 'pointer' }} onClick={removeFromDeleteList} />
      : <i className="fas fa-trash-alt" style={{ cursor: 'pointer' }} onClick={addToDeleteList} />
  );

  return (
    <tr>
      {!favorite && (
        <td>
          <div className="d-flex justify-content-around">
            {showEdit()}
            {showDelete()}
          </div>
        </td>
      )}
      <td>
        {edit
          ? (
            <div className="d-flex">
              <input type="text" className="form-control mr-2" placeholder="Enter new description" value={newToDoContent} onChange={updateNewToDoValue} />
              <button type="button" className="btn btn-primary" onClick={editToDo}>Update</button>
            </div>
          )
          : todo.done ? <del>{todo.content}</del>
            : todo.content}
      </td>
      <td>
        {todo.done ? <del>{todo.date.toDateString()}</del>
          : todo.date.toDateString()}
      </td>
      <td className="text-center">
        {todo.favorite ? <i className="fas fa-heart text-danger" style={{ cursor: 'pointer' }} onClick={toggleFavorite} /> : <i className="far fa-heart" style={{ cursor: 'pointer' }} onClick={toggleFavorite} />}
      </td>
      <td>
        <input type="checkbox" className="mt-3 ml-4 d-block" checked={todo.done} onChange={toggleDone} />
      </td>
    </tr>
  );
};

ToDo.propTypes = {
  todo: PropTypes.shape({
    content: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
    done: PropTypes.bool.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  favorite: PropTypes.bool.isRequired,
};

export default ToDo;
