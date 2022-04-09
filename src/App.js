import './App.css';
import Header from './Components/Header/Header';
import Movies from './Pages/Movies/Movies';
import NotFound from './Pages/NotFound/NotFound';
import MovieItem from './Pages/MovieItem/MovieItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import { useState } from 'react';
import Favorites from './Pages/Favorites/Favorites';

function App() {
  const [inputSearch, setInputValue] = useState('');
  const handleChange = (value) => {
    setInputValue(value)
  }
  return (
    <>
      <BrowserRouter>
        <Header inputSearch={inputSearch} change={handleChange} />
        <Switch>
          <Route path="/" exact >
            <Redirect to={"/movies"} />
          </Route>
          <Route path="/movies" exact  >
            <Movies search={inputSearch} />
          </Route>
          <Route exact path="/movies/:id" component={MovieItem} />
          <Route exact path="/favorites" component={Favorites} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
//7a1c19ea3c361a4d3cc53eb70ef8298c
export default App;
