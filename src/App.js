import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import HomePage from './pages/home/HomePage';

const App = () => {
  return (
    <Router>
      <div>
        <HeaderMenu/>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/speakers">
            <Speakers />
          </Route>
          <Redirect exact from="/" to="home" />
        </Switch>
      </div>
    </Router>
  );
}

function Speakers() {
  return <h2>Speakers</h2>;
}


export default App;
