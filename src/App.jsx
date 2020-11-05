import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Header from './components/header/Header';
import ToDoList from './components/todo/ToDoList';
import FavoriteList from './components/todo/FavoriteList';
import AlertMessage from './components/alert/AlertMessage';

function App() {
  const dispatch = useDispatch();

  const toDoItems = useSelector((state) => state.toDoItemsReducer);

  // Checks localStorage, if there is data, set it in the todoItems state
  useEffect(() => {
    const data = localStorage.getItem('toDoItems');
    if (data != null) {
      dispatch({ type: 'SET', payload: JSON.parse(data) });
    }
  }, []);

  // Update localStorage
  useEffect(() => {
    localStorage.setItem('toDoItems', JSON.stringify(toDoItems));
  }, [toDoItems]);

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <AlertMessage />
        <Route exact path="/" component={ToDoList} />
        <Route exact path="/favorites" component={FavoriteList} />
      </div>
    </BrowserRouter>
  );
}

export default App;
