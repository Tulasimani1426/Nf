
import './Cweb1.css';
import React,{Component} from 'react';

const data=[
 
              {
                imgurl:"https://tse3.mm.bing.net/th?id=OIP.1wzZSWb1I5TlpbGQbcTEdwAAAA&pid=Api&P=0&h=180",
                title:"Fighter"
                } ,
                {
                 imgurl:"https://tse1.mm.bing.net/th?q=New%20Movies%202024%20Netflix%20Sci-Fi&w=1280&h=720&c=5&rs=1&p=0",
                 title:"Cloud Atlas"
                 } ,
                 {
                   imgurl:"https://i1.wp.com/www.newsbugz.com/wp-content/uploads/2021/06/kirathaka-movie-1.jpg?resize=768%2C491&ssl=1",
                   title:"Kirathaka"
                   } ,
                   {
                     imgurl:"https://tse2.mm.bing.net/th?id=OIP.ZnvaeI-Uy0HxGt7PCzR0YAAAAA&pid=Api&P=0&h=180",
                     title:"Lets get married (LGM)"
                     } ,
                     {
                       imgurl:"https://i.ytimg.com/vi/91qE88qRRRs/maxresdefault.jpg",
                       title:"Insha Allah"
                       } ,
                       {
                         imgurl:"https://tse3.mm.bing.net/th?id=OIP.sMsawu3OO538m8javFdutwHaF4&pid=Api&P=0&h=180",
                         title:"Sound Party"
                         } ,
                         {
                           imgurl:"https://tse4.mm.bing.net/th?id=OIP.Zg-qGvCQRooX3tuq28VbWwAAAA&pid=Api&P=0&h=180",
                           title:"Skanda"
                           } ,
                           {
                             imgurl:"https://imgproxy.newswav.com/1000x0,q50=/https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/04/hanu-man-featured.jpg",
                             title:"Hanuman"
                             }   
                   
     ]

const App3=()=>{
  
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
        <p className='s'>  New Releases </p>
    )
}

export default App3;

