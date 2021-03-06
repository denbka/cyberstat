import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './configure-store'
import { BrowserRouter } from 'react-router-dom'
import Moment from 'react-moment'
import 'moment-timezone'
import 'moment/locale/ru'

Moment.globalTimezone = 'America/Los_Angeles'
Moment.globalLocale = 'ru'
Moment.globalLocal = true

Moment.globalFilter = (d:any) => {
  return d
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
