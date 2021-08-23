import { Route, Switch } from 'react-router-dom';
import Main from './components/page/main';
import './assets/css/main.css';
import Categories from './components/page/categories';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/categories" component={Categories} />
        <Route path="/" exact component={Main} />
      </Switch>
    </div>
  );
}

export default App;
