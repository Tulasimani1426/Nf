
import { Component } from 'react';
import './Cweb1.css';
const data=[
 
              {
                imgurl:"https://tse3.mm.bing.net/th?id=OIP.590HJx1gCHIIqzffl-QrlQHaEK&pid=Api&P=0&h=180",
                title:"Bhale Bhale magaadivoy"
                } ,
                {
                 imgurl:"https://tse1.mm.bing.net/th?id=OIP.fi3zFTDeKurjrDlJsV6QaAHaEK&pid=Api&P=0&h=180",
                 title:"Jaathi Ratnaalu"
                 } ,
                 {
                   imgurl:"https://tse1.mm.bing.net/th?id=OIP.8K-5d9k6xIYGg_QwTit_pQHaDf&pid=Api&P=0&h=180",
                   title:"MAD"
                   } ,
                   {
                     imgurl:"https://tse1.mm.bing.net/th?id=OIP.GhqvyRPope2_a5VhOvUAegHaFH&pid=Api&P=0&h=180",
                     title:"Save the Tigers"
                     } ,
                     {
                       imgurl:"https://i.ytimg.com/vi/arJu4Q7bEmc/maxresdefault.jpg",
                       title:"Ready"
                       } ,
                       {
                         imgurl:"https://tse3.mm.bing.net/th?id=OIP.sMsawu3OO538m8javFdutwHaF4&pid=Api&P=0&h=180",
                         title:"Sound Party"
                         } ,
                         {
                           imgurl:"https://tse1.mm.bing.net/th?id=OIP.uD4_7CsYOx9LBBAZoZptxwHaD4&pid=Api&P=0&h=180",
                           title:"Bheeshma"
                           } ,
                           {
                             imgurl:"https://www.filmibeat.com/wimgm/1366x70/desktop/2012/12/135583289921248.jpg",
                             title:"Sudigaadu"
                             }   
                   
     ]

const C5=()=>{
  return(
    <div className='body'>
    <Main />
   
   
    <div className='slide'>
    <a href="#" className="previous">&#8249;</a>
<a href="#" className="next"> &#8250;</a>
</div>
    <div className='movie'>
   
    {
      data.map((eachobj)=>{
        const {imgurl,title}=eachobj;
        
        return <Movie imgurl={imgurl} title={title} />
        
      })
    }
    
    </div>
  </div>
  )
  
}

const Movie=(props)=>{
  return(
    
    <section className="each-movie">
            
      <img src={props.imgurl} alt={props.title} />
      <sup><p> {props.title} </p> </sup>
    </section>
  )
}



const Main=()=>{
    return(
        <p className='s'> Comedy Movies </p>
    )
}

export default C5;

