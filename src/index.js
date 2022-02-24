import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//this below is accepting 2 params; this is the method that makes react work; reactdom.render looks for the entry point (index.html) and injects into it.
ReactDOM.render(
  //this is the piece of the javascript that you want to render; "i want to inject APP into the virtual index.html file where the id of root exists
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
);


reportWebVitals();
