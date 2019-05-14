import "babel-polyfill";
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Routers from './routes';
import 'antd/dist/antd.css';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from './redux/store';

//configuring store
const reduxStore = configureStore();

//main app module binded with redux provider store
const App = () => (
  <ReduxProvider store={reduxStore}>
    <Router>
      <Routers />
    </Router>
  </ReduxProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'));
