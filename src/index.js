import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Features from "./components/features/features"
import ContactUs from "./components/contactUs/contactUs"
import "./scroll.css"
import About from './components/about/about';
ReactDOM.render(
  <React.Fragment>
    <Navbar/>
    <Home/>
    <About/>
    <Features/>
    <ContactUs/>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
