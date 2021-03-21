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
import SpeakersPage from './pages/speakers/SpeakersPage';

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
            <SpeakersPage />
          </Route>
          <Redirect exact from="/" to="home" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
