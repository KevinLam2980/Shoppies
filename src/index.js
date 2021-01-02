import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import { shoppiesReducer } from './state/reducers'
import NotificationsProvider from './components/notifications/NotificationsProvider'

const store = createStore(shoppiesReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <NotificationsProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NotificationsProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
