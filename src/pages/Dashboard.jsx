import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Dashboard() {
  const [projects, setProjects] = useState([])

  const localProjects = JSON.parse(localStorage.getItem("projects") || "[]");

  useEffect(() => {
    if (localProjects && localProjects.length > 0) {
      setProjects(localProjects);
    }

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(res => res.json())
      .then(data => setProjects(prv => [...prv, ...data]))
  }, [])

  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]")

  return (
    <div className="dashboard">
      <h2>Projects Dashboard</h2>

      <div className="projects-grid">
        {projects.map(p => {
          const count = tasks.filter(t => t.projectId === p.id).length
          return <ProjectCard key={p.id} project={p} taskCount={count} />
        })}
      </div>
    </div>
  )
}
