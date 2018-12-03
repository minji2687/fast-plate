import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import PostDetailPage from './pages/PostDetailPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/search/:searchKeyword" component={SearchPage} />
            <Route path="/restaurant/:rKeyword" component={PostDetailPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
