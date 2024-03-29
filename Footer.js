import { Component } from 'react';
import React from 'react';
import './Footer.css'

const Box=()=>{
    return (
        <>
        
        <div className='row'>

            <div className='col1'>
              <ul style={ {listStyle:"none"}} >
              <a> <li>FAQ</li> </a>
              <a>  <li>Investor Relations</li>  </a>
              <a> <li>Privacy</li> </a>
              <a> <li>Speed Test</li> </a>
                </ul> 
            </div>

            <div className='col2'>
             <ul style={ {listStyle:"none"}}>
             <a>   <li>Help Center</li> </a>
               <a>  <li>Jobs</li> </a>
               <a>   <li>Cookie Preferences</li> </a>
               <a>    <li> Legal Notices</li> </a>
                </ul>  
</div>
                <div className='col3'>
              <ul style={ {listStyle:"none"}}>
              <a>   <li>Account</li> </a>
              <a>     <li>Ways to Watch</li> </a>
              <a>    <li>Corporate Information</li> </a>
              <a>   <li>Only on Netflix</li> </a>
                </ul>   
            </div>

            <div className='col4'>
             <ul style={ {listStyle:"none"}}>
             <a> <li>Media Centre</li> </a>
             <a> <li>Terms Of use</li>  </a>
             <a> <li>Contact Us</li> </a>
             
                </ul>  
            </div>

            </div>
      
        
        
        </>
        
    )
}

export default Box;