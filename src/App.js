import { BrowserRouter, Route } from 'react-router-dom'

// Components
import { Header } from './components/Header'
import { ToDoList } from './components/ToDoList'
import { FavoriteList } from './components/FavoriteList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AlertMessage } from './components/AlertMessage'

function App() {

  const dispatch = useDispatch()

  const toDoItems = useSelector(state => state.toDoItemsReducer)

  useEffect(() => {
    let data = localStorage.getItem('toDoItems')
    if (data != null) {
      console.log(JSON.parse(data))
      dispatch({ type: 'SET', payload: JSON.parse(data) })
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('toDoItems', JSON.stringify(toDoItems))
  }, [toDoItems])


  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <AlertMessage />
        <Route exact path='/' component={ToDoList} />
        <Route exact path='/favorites' component={FavoriteList} />
      </div>
    </BrowserRouter>
  );
}

export default App;
