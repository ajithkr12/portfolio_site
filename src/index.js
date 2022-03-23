import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <Navigation/>
    <App/>
    {/* <Home/>
    <About/>
    <Footer/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
