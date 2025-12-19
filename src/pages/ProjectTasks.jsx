import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TaskCard from '../components/TaskCard'

export default function ProjectTasks() {
  const { id } = useParams()
  const [project, setProject] = useState({})
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.id) {
          setProject(data)
        } else {
          const localProjects = JSON.parse(localStorage.getItem("projects") || "[]")
          const localProject = localProjects.find(p => p.id === Number(id))
          if (localProject) setProject(localProject)
        }
      })
      .catch(() => {
        const localProjects = JSON.parse(localStorage.getItem("projects") || "[]")
        const localProject = localProjects.find(p => p.id === Number(id))
        if (localProject) setProject(localProject)
      })

    setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"))
  }, [id])

  const updateTasks = (newTasks) => {
    setTasks(newTasks)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
  }

  const move = (taskId, status) => {
    updateTasks(tasks.map(t => t.id === taskId ? { ...t, status } : t))
  }

  const remove = (taskId) => {
    updateTasks(tasks.filter(t => t.id !== taskId))
  }

  const projectTasks = tasks.filter(t => t.projectId == id)

  return (
    <div className="container">
      <h2>{project.title}</h2>

      <div className="columns">
        {["To Do", "In Progress", "Done"].map(col => (
          <div key={col} className="column">
            <h3>{col}</h3>
            <div className="tasks">
              {projectTasks
                .filter(t => t.status === col)
                .map(t => (
                  <TaskCard key={t.id} task={t} move={move} remove={remove} />
                ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
