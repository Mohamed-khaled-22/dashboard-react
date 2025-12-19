import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPlus, FaListAlt } from "react-icons/fa"

export default function AddProject() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    if (!title.trim()) return alert("Title is required")
    const projects = JSON.parse(localStorage.getItem("projects") || "[]")
    projects.push({ id: Date.now(), title, body: desc })
    localStorage.setItem("projects", JSON.stringify(projects))
    navigate("/")
  }

  return (
    <div className="form-container">
      <h2><FaPlus className="icon-btn" /> Add Project</h2>
      <form onSubmit={submit}>
        <div className="form-group">
          <label><FaListAlt className="icon-btn" /> Project Title</label>
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
          />
        </div>

        <button type="submit" className="submit-btn">
          <FaPlus className="icon-btn" /> Add Project
        </button>
      </form>
    </div>
  )
}
