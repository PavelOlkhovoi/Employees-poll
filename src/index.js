import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App";
import { createStore } from 'redux';
import middleware from './middleware';
import { Provider } from 'react-redux';
import { reducers } from './reducers';
import { BrowserRouter as Router } from "react-router-dom";
const store = createStore(reducers, middleware)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>
);
