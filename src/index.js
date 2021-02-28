import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'

// import store from store.js inside the redux folder
import store from './redux/store.js'

// router
// import BroswerRouter from react as Router
import { BrowserRouter as Router } from 'react-router-dom'
// Wrap App component in BrowserRouter tags
  // <BrowserRouter>...</BrowserRouter>
  // make sure to import Route into App file as well, to define routes

// redux
// import store from appropriate file
  // import store from 'file_path'
// import { Provider } from 'react-redux'
// pass store into Provider to give access to store from anywhere in app
  // <Provider store={store}>...</Provider>
  // does not matter if Provider is wrapped or wrapping BrowserRouter

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
