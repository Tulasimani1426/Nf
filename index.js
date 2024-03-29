import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

import reportWebVitals from './reportWebVitals.js';

import Join from './pages/Join.js';
import Navbar from './components/Navbar.js';
import Signin from './pages/Signin.js';
import C2 from './components/C2.js';
import C1 from './components/C1.js';

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Navbar />}>
      <Route  path="join-now" element= {<Join />} />
      <Route  path="signin" element= {<Signin />} />

      </Route>
     
    </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
