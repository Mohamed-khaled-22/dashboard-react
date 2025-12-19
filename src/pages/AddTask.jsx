import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPlus, FaTasks, FaProjectDiagram, FaListAlt } from "react-icons/fa"

export default function AddTask() {
  const [projects, setProjects] = useState([])
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [projectId, setProjectId] = useState("")
  const [status, setStatus] = useState("To Do")
  const navigate = useNavigate()
  const localProjects = JSON.parse(localStorage.getItem("projects") || "[]");

  useEffect(() => {
    if (localProjects && localProjects.length > 0) {
      setProjects(localProjects);
    }
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      .then(res => res.json())
      .then(data => setProjects(prv => [...prv, ...data]))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    if (!projectId) return alert("Please select a project")
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]")
    tasks.push({
      id: Date.now(),
      title,
      description: desc,
      projectId: Number(projectId),
      status
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
    navigate(`/project/${projectId}`)
  }

  return (
    <div className="form-container">
      <h2><FaTasks className="icon-btn" /> Add Task</h2>
      <form onSubmit={submit}>
        <div className="form-group">
          <label><FaListAlt className="icon-btn" /> Task Title</label>
          <input
            className="form-control"
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label><FaListAlt className="icon-btn" /> Description</label>
          <textarea
            className="form-control"
            placeholder="Description"
            onChange={e => setDesc(e.target.value)}
            required
          />
        </div>

        <div className="form-group select-wrapper">
          <label><FaProjectDiagram className="icon-btn" /> Select Project</label>
          <select
            className="form-control"
            value={projectId}
            onChange={e => setProjectId(e.target.value)}
            required
          >
            <option value="">Select project</option>
            {projects.map(p => <option value={p.id} key={p.id}>{p.title}</option>)}
          </select>
        </div>

        <div className="form-group select-wrapper">
          <label><FaListAlt className="icon-btn" /> Status</label>
          <select
            className="form-control"
            value={status}
            onChange={e => setStatus(e.target.value)}
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          <FaPlus className="icon-btn" /> Add Task
        </button>
      </form>
    </div>
  )
}
