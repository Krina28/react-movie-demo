import "babel-polyfill";
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Routers from './routes';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

const App = () => (
  <Router>
    <Routers />
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'));
