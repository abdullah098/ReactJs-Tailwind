import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainHeadingHome from './MainHeadingHime';
import Nev from "./Nev";
import Footer from "./Footer"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


ReactDOM.render(
  <>

    
   
    <Nev/>
    <MainHeadingHome/>
    <Footer/>
    


    

    



  </>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
