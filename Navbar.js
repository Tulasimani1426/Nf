import { Link } from 'react-router-dom';
import './Navbar.css';
import netflix from './images/nflimg.jpg' 
import App from './C1';
import App2 from './C2';
import App3 from './C3';
import { Component } from 'react';
import Join from '../pages/Join';


const Navbar=()=>{

    return(
      <nav className='main'>
       
       <sup> <img className="logo" src={netflix} alt='netflix-logo' /> </sup>
        <Btn />
      
      </nav>
      
    )
  }


  const Btn=()=>{
    return(
        <div>
           <p id='line' style={{color:'white',}}>  UNLIMITED TV SHOWS AND MOVIES</p>
           <Link to='/join-now'> <button id='join'>  <strong>   JOIN NOW </strong> </button> </Link>
           <Link to='/signin'>     <button id='sign'> Sign out </button></Link>
   

    </div>
    )
  }


  export default Navbar;