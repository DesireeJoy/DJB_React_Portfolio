 
import React from 'react';

  import projectList from '../../constants/projectList';

import Project from '../Project/Project'
const projectLength = projectList.length;



     function Projects(props) {
         return(
         <div className='projects'>
         <h1 className='projects__heading'>Projects</h1>
  <h2 className='projects__subheading'>I build stuff. You can see that stuff here.</h2>
    
<div className='projects'> <div className="projects__cont">
<div className="projects__inner-cont"> 

  <div className='project'>

        {projectList
                    .slice(0,props.projectsShown)
                .map((proj, index) => (
<Project title={proj.title} image={proj.image} desc={proj.desc} live={proj.live} link={proj.link} video={proj.video} alt={proj.alt} />
                ))}
             

</div>



                </div>
                </div>
                    
</div>
     </div>
        )
}

export default Projects;
