
import ParentClass from '../App';
import './Cweb1.css';
import React,{Component} from 'react';


const data=[
 {
 imgurl:"https://imgeng.jagran.com/images/2023/may/Hanuman1683291840149.jpg",
 title:"Hanuman"
 } ,
 {
  imgurl:"https://castartists.com/wp-content/uploads/2023/06/guntur-karam-release-date-768x432.jpg",
  title:"Guntur Karam"
  } ,
  {
    imgurl:"https://tse3.mm.bing.net/th?id=OIP.HmulQupYfdnj4PGWuHergQHaDt&pid=Api&P=0&h=180",
    title:"Eagle"
    } ,
    {
      imgurl:"https://d37e65yvvsthcl.cloudfront.net/wp-content/uploads/2024/03/Valari-Movie-Review-and-Rating2.jpg",
      title:"Valari"
      } ,
      {
        imgurl:"https://www.thelivemirror.com/wp-content/uploads/2020/10/radhe-shyam_TLM.jpg",
        title:"Radhe Shayam"
        } ,
        {
          imgurl:"https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_auto,q_auto/resources/0-0-akhil/list/00akhillist550677586.jpg",
          title:"Akhil"
          } ,
          {
            imgurl:"https://assets.thehansindia.com/h-upload/feeds/2019/04/20/166274-jersy-2.jpg",
            title:"Jersey"
            } ,
            {
              imgurl:"https://telugu.filmibeat.com/img/2021/10/varudu-kavalenu-review-11-1635490640.jpg",
              title:"Varudu Kavalenu"
              }   ,
             
                                         
     ]

const C1=()=>{
 
  return(
      <div className='body'>
     

    <Head /> 
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

const Head=()=>{
  return(
    <div className='Head'>
    <p className='sub'><span id='m-h'> Movies </span> <br />
     Movies move us like nothing else can, whether they are scary ,funny,<br />dramastic,romantic, or anywhere in-between. So many titles, so much to <br /> experience.</p>
 </div>
  )

}

const Main=()=>{
  return(
      <p className='s'> Tollywood Movies</p>
  )
}

export default C1;


