import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HeaderMenu from './components/HeaderMenu/HeaderMenu';

const App = () => {
  return (
    <Router>
      <div class="col-md-12">
        <HeaderMenu/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
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

function Home() {
  return <h2>Home</h2>;
}

function Speakers() {
  return <h2>Speakers</h2>;
}


export default App;
