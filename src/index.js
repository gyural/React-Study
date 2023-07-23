import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './chap04/Clock';
import CommentList from './chap05/CommentList'
import NotificationList from './chap06/NotificationList';
import Accomodate from './chap07/Accommodate';
import ConfirmButton from './chap08/ConfirmButton';
import LandingPage from './chap09/LandingPage';
import AttendanceBook from './chap10/AttendanceBook';
import SignUp from './chap11/SignUp';
import Calculator from './chap12/Calculator';
  ReactDOM.render(
    <React.StrictMode>
      <Calculator/>
    </React.StrictMode>,
    document.getElementById('root')
  );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();