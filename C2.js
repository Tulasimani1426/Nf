
import './Cweb1.css';
import React,{Component} from 'react';

const data=[
 
              {
                imgurl:"http://4.bp.blogspot.com/-2hdT22mjlgU/VjxLBqgWDmI/AAAAAAAADTo/MSwvZDjxbzA/s1600/Ek-Villain-Bollywood-Movie-Poster-Wallpaper.jpg",
                title:"Villain"
                } ,
                {
                 imgurl:"http://2.bp.blogspot.com/-vPuIuBQ0ZUk/VcxuBb2xEVI/AAAAAAAATb8/blH5YH69Gec/s1600/Shaandaar-Poster.jpg",
                 title:"ShaanDaar"
                 } ,
                 {
                   imgurl:"https://bollywoodmascot.com/wp-content/uploads/Jawan-Teaser-Release-Date-768x431.jpg",
                   title:"Jawan"
                   } ,
                   {
                     imgurl:"http://webneel.com/daily/sites/default/files/images/daily/08-2018/2-india-movie-poster-design-hindi-bjirao-mastani.jpg",
                     title:"Bajirao Mastani"
                     } ,
                     {
                       imgurl:"https://i.ytimg.com/vi/JNbG5jWmPyo/maxresdefault.jpg",
                       title:"Fighter"
                       } ,
                       {
                         imgurl:"https://tse3.mm.bing.net/th?id=OIP.cTLIMj_hOZTFoSw9kou2dgHaEK&pid=Api&P=0&h=180",
                         title:"Pathan"
                         } ,
                         {
                           imgurl:"https://wallpapercave.com/wp/wp8807385.jpg",
                           title:"2 States"
                           } ,
                           {
                             imgurl:"https://www.moviecanny.com/wp-content/uploads/2019/12/Bhangra-Paa-Le-1024x1024.jpg",
                             title:"Bhangra Paa le"
                             }   
                   
     ]

const C2=()=>{
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
        <p className='s'> Bollywood Movies</p>
    )
}

export default C2;

