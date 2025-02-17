import React from 'react'
import { useFetchProjects } from './fetchProjects'
const Projects = () => {
  const {loading,projects}=useFetchProjects();
  console.log(projects);
  if(loading)
  {
    return <section className='projects'>
      <h2>Loading..</h2>
    </section>
  }
  return (
    <section className='projects'>
      <div className='title'>
        <h2>projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((item)=>{
          const {title,url,id,img}=item;
          return <a key={id} href={url} className='project' target='_blank' rel='noreferrer'>
            <img src={img} alt={title} className='img'/>
            <h5>{title}</h5>
          </a>
        })}
      </div>
    </section>
  )
}

export default Projects