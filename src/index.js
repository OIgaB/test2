import { App } from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Context } from './components/Header/Elements/Context';
import './index.css';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/test2">
      <Provider store={store}>
        <Context>
          <App />
        </Context>
      </Provider>
    </Router>
  </React.StrictMode>
);
