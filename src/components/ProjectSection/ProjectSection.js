import React from 'react'
import Projects from './Projects';
import Card from './Card';
import '../../styles/Project/section.scss';

const ProjectSection = () =>(

   <div className="section">
       <h2>Projects</h2>
       <div className="project-cards">
        {Projects.map(project =>(
             <Card title = {project.name} desc={project.desc} photo={project.image}/>
        ))}
       </div>
   </div>

);

export default ProjectSection;