import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Tournaments from './pages/Tournaments';
import Series from './pages/Series';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bayes Esports - Challenge</h1>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/tournaments">Tournaments</NavLink>
          <NavLink to="/series">Series</NavLink>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tournaments" component={Tournaments} />
          <Route exact path="/series" component={Series} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}

export default App;
