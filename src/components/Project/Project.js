import imageOne from '../../images/project1.png'
import imageTwo from '../../images/project2.png'; 
import imageThree from '../../images/project3.png'; 
import noVideo from '../../images/video-off.svg';
import { Link , Code, Video} from 'react-feather';
import React from 'react';



     function Project(props) {

  return (


  <div className='project__card'>
      <div className='project__title'>{props.title}
</div>
<div className='project__image-cont'> 
{props.image === "imageOne" ? <img className='project__image' src={imageOne} alt='props.alt'/> : ""}
{props.image === "imageTwo" ? <img className='project__image' src={imageTwo} alt='props.alt'/> : ""}
{props.image === "imageThree" ? <img className='project__image' src={imageThree} alt='props.alt'/>: ""}
</div>

   <div className='project__desc'>{props.desc}
</div>
<div className='project__code'> 
{props.live === "" ? <div className='project__code-live disabled'> Here</div> : <a href={props.live} className='project__code-live'>
   <Link size={14} /> Live Site</a>}
<a href={props.link} className='project__code-link'><Code size={14} /> Code</a>
</div>
<div className='project__code'> 
{props.video === "" ? <img className='project__code-video disabled' src={noVideo} alt='no code your available' /> : <a href={props.vid} className='project__code-video'><Video size={14} /> Code Tour</a>}
</div>
  </div>
  )};
  export default Project;


