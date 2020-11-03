import { BrowserRouter, Route } from 'react-router-dom'
// import {useState, useEffect} from 'react'

// Components
import { Header } from './components/Header'
import { ToDoList } from './components/ToDoList'
import { FavoriteList } from './components/FavoriteList'

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={ToDoList} />
        <Route exact path='/favorites' component={FavoriteList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
