
import './Cweb1.css';
import React,{Component} from 'react';
const data=[
 
              {
                imgurl:"https://tse4.mm.bing.net/th?id=OIP.xqE452Fkj2P3Pxp33g7ZbAHaEo&pid=Api&P=0&h=180",
                title:"Carrie"
                } ,
                {
                 imgurl:"https://1.bp.blogspot.com/-gOQ1cp6p7-8/Xgv2g_3IEqI/AAAAAAAACaQ/8j5u-gaIpEIxp-_HJ_vQYpQeLizB1NviwCLcBGAsYHQ/s1600/2020%2BHollywood%2BHorror%2BMovies%2BList.jpg",
                 title:"A Quite Place 2"
                 } ,
                 {
                   imgurl:"https://i.ytimg.com/vi/dQaYnNfDbD0/maxresdefault.jpg",
                   title:"Malelasopa"
                   } ,
                   {
                     imgurl:"https://i.ytimg.com/vi/57m8iCCQ0Ls/maxresdefault.jpg",
                     title:"Mukhi"
                     } ,
                     {
                       imgurl:"https://tse2.mm.bing.net/th?id=OIP.tdiHOvMAUiJ5T7-9PCsXYQHaEK&pid=Api&P=0&h=180",
                       title:"Yaamirukka Bhayamey"
                       } ,
                       {
                         imgurl:"https://www.flickonclick.com/wp-content/uploads/2022/09/jessie-best-telugu-horror-movies-scaled.jpg",
                         title:"Jessi"
                         } ,
                         {
                           imgurl:"https://i.ytimg.com/vi/-xMx5n4lYEI/maxresdefault.jpg",
                           title:"Raakshasi"
                           } ,
                           {
                             imgurl:"https://tse2.mm.bing.net/th?id=OIP.e8xOrI_KVfQG6HgYEjg6QAHaEJ&pid=Api&P=0&h=180",
                             title:"Raju gaari gadhi 2"
                             }   
                   
     ]

const C6=()=>{
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
        <p className='s'> Horror Movies </p>
    )
}

export default C6;

