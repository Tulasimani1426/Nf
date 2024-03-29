
import './D1.css';
import { Link } from 'react-router-dom';

const D1=()=> {
  return (
   <body>
    <div className='box-cover'>
    <nav> 
      <img id='logo' src='https://tse2.mm.bing.net/th?id=OIP.I9cvYdJTPAHPFgk7z4wj7QAAAA&pid=Api&P=0&h=180'></img>
      <button id='sign'> Sign up</button>
    </nav>
    <div >
    <p className="p1"> Unlimited movies, TV shows and more </p>
<p className="p2">Watch anywhere. Cancel anytime.</p>

<p className="p3"> Ready to watch? Enter your email to create or restart your membership.</p>
<div className='myform'>
  <input id='mail' type='email' placeholder={'Email address'} ></input>

<button id="gs"> Get Started   </button> </div>
</div>

</div>

   </body>
  );
}

export default D1;
