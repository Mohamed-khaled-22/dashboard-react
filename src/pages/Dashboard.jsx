import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Dashboard() {

  const [projects, setProjects] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const localProjects = JSON.parse(localStorage.getItem("projects") || "[]");

  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  useEffect(() => {

    let allProjects = [...localProjects];

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(res => res.json())
      .then(data => {
        allProjects = [...allProjects, ...data];
        setProjects(allProjects);
      });

  }, []);

  return (
    <div className="dashboard">

      <div className="search-box">
        <input type="search" placeholder="Search projects..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      <h2>Projects Dashboard</h2>

      <div className="projects-grid">

        {projects.filter(p => p.title?.toLowerCase().includes(searchTerm.toLowerCase())).length > 0 ? (



          projects.filter(p => p.title?.toLowerCase().includes(searchTerm.toLowerCase()))

            .map((p, index) => {

              const count = tasks.filter(t => t.projectId === p.id).length;

              return <ProjectCard key={`${p.id}-${index}`} project={p} taskCount={count} />;

            })
        ) : (<p className="no-projects">No projects found.</p>)}

      </div>
    </div>
  );
}


