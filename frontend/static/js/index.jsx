import React from "react"
import ReactDOM from "react-dom";
import { Route, Switch, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './components/comp_style/main.scss';
import './components/comp_style/greeting_page.scss';
import './components/comp_style/static_page.scss';

import Header from './components/Header';
import GreetingPage from './components/GreetingPage';
import StatisticPg from './components/StatisticPg'
import Socket from './components/Socket'



const Main = () => (
  <Switch>
    <Route exact path="/" component={GreetingPage} />
    <Route path="/video_feed" component={StatisticPg} />
    <Route path="/profile" component={GreetingPage} />
    <Route path="/login" component={GreetingPage} />
    <Route path="/registration" component={GreetingPage} />
    <Route path="/test" component={Socket} />
  </Switch>
);


const App = () => (
  <div>
    <Header />
      <Main />
  </div>
);

ReactDOM.render(
 <HashRouter>
      <App />
  </HashRouter>,

  document.getElementById('content')
);
