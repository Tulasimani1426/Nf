import React from 'react';
import ReactDOM from 'react-dom/client';
import './index1.css';
import App1 from './App1';
import reportWebVitals from './reportWebVitals';
import Signup from './pages/Signup';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/*
const router = createBrowserRouter([
  
  {
    path: "/signup",
    element: <Signup />,

  },
]); */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <App1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
