import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './assets/css/main.css';
import BookList from './components/page/bookList';
import Categories from './components/page/categories';
import Header from './components/header';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/categories" component={Categories} />
          <Route path="/" exact component={BookList} />
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
