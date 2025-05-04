import ProjectCard from "./ProjectCard/ProjectCard"
import "./Projects.scss"
import data from './Projects.json'

type Project = {
  img: string,
  title: string,
  repo: string,
  site: string,
}

export default function Projects() {
  let items:Project[] = data

  return (
    <section className="projects">
      <h1>Projekty</h1>
      <div className="list">
        {items.map((item:Project, index:number) => (
          <ProjectCard key={index} title={item.title} repo={item.repo} site={item.site} image={item.img}/>
        ))}
      </div>
    </section>
  )
}
