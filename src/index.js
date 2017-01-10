import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import App from './App';
import Home from './components/Home'
import About from './components/About'
import Faq from './components/Faq'
import Boxes from './components/boxes/Boxes'
import Random from './Random';
import CurrencyCounter from './CurrencyCounter'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="faq" component={Faq} />
      <Route path="box" component={Boxes} />
      <Route path="random" component={Random} />
      <Route path="currency" component={CurrencyCounter} />
  <App />
    </Route>
  </Router>,
  document.getElementById('root')
);
