import { Route, Switch } from 'react-router-dom';
import './assets/css/main.css';
import BookList from './components/page/bookList';
import Categories from './components/page/categories';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/categories" component={Categories} />
        <Route path="/" exact component={BookList} />
      </Switch>
    </div>
  );
}

export default App;
