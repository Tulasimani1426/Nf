
import './Cweb1.css';
import React,{Component} from 'react';

const data=[
 
              {
                imgurl:"https://tse2.mm.bing.net/th?id=OIP.-pLW5cxUeKqCx1j26rLjTQAAAA&pid=Api&P=0&h=180",
                title:"The Nun 2"
                } ,
                {
                 imgurl:"https://tse1.explicit.bing.net/th?id=OIP.GZb9xAjcy77vVPV1eJo5vAAAAA&pid=Api&P=0&h=180",
                 title:"Gladiator"
                 } ,
                 {
                   imgurl:"https://i.ytimg.com/vi/Z4jp0oSQGwA/hqdefault.jpg",
                   title:"Terminator 5"
                   } ,
                   {
                     imgurl:"https://tse3.mm.bing.net/th?id=OIP.3rXAgT_tw_JTOZjzFJAjFQHaEK&pid=Api&P=0&h=180",
                     title:"Avatar 2"
                     } ,
                     {
                       imgurl:"https://tse4.mm.bing.net/th?id=OIP.TcviP_kNaY8hec0h5lw9lwHaEK&pid=Api&P=0&h=180",
                       title:"Avengers"
                       } ,
                       {
                         imgurl:"https://i.pinimg.com/originals/ef/ec/a4/efeca473ffcdf5a522bdda88baded6fc.jpg",
                         title:"Strom"
                         } ,
                         {
                           imgurl:"https://tse4.mm.bing.net/th?id=OIP.PQK3iBfResoIohcyW9E6NAHaEB&pid=Api&P=0&h=180",
                           title:"Jumanji 3"
                           } ,
                           {
                             imgurl:"https://tse1.mm.bing.net/th?id=OIP.bXy1H5RpZ2QHYLvJV8S2VAHaDt&pid=Api&P=0&h=180",
                             title:"Jurasic World"
                             }   
                   
     ]

const C4=()=>{
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
        <p className='s'> Hollywood Movies</p>
    )
}

export default C4;

