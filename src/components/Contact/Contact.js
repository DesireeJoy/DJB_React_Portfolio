import linkedIn from '../../images/linkedin-black.svg';
import twitter from '../../images/twitter-black.svg';
import github from '../../images/github-black.svg';
import youtube from '../../images/youtube-black.svg'
import illustrationImg from '../../images/MostAlive.jpeg';
import designImg from '../../images/flyingLFarms.jpeg';
import React from 'react';
import { Mail} from 'react-feather';

function Contact(props) {

  return (
      <>
        <div className="object">

<h2>Get in touch</h2>
<p>If you wanna get in touch, talk to me about a project, or just say hi,<br />
send an email <Mail size='12'/> to <strong>DesireeBradish@gmail.com</strong>.</p>
</div>


          <div className="object">
<h2>Or find me on socials</h2>
   <div className="object__list">

  <a className='object__list-social' href="https://www.linkedin.com/in/desireejoy/" > <img className='object__list-icon' src={linkedIn}/></a>
  <a className='object__list-social' href="https://twitter.com/DesireeJoy" ><img className='object__list-icon' src={twitter}/></a>
  <a className='object__list-social' href="https://github.com/DesireeJoy" ><img className='object__list-icon' src={github}/></a>
  <a className='object__list-social' href="https://www.youtube.com/channel/UCStVcTDdQlRSzzcnjCcMLqQ"><img className='object__list-icon' src={youtube}/></a>


     </div>   </div>


     <h2>Some of my other stuff</h2>
   <div className="otherWork__cont">
      
        <div class='otherWork__card '>
            <div className='otherWork__title'>Illustration Work</div>
           <div className='otherWork__cont'>
               <img className='otherWork-illus' src={illustrationImg} alt='Illustration Image that links to Facebook Illustration Page'/>
            </div>
            <a className='otherWork__link' href='https://www.facebook.com/AnimatorDesi'>Check it out</a>
        </div>



        <div class='otherWork__card design'>
            <div className='otherWork__title'>Design Work</div>
                 <div className='otherWork__cont'>
            <img className='otherWork-design' src={designImg} alt='Airplane Logo that links to Facebook Design Page'/> 
            </div>
        <a className='otherWork__link' href='https://www.facebook.com/DesireeJoyDesign'>Check it out</a>
        </div>
        </div>

     </>                   
  )};             
  export default Contact;