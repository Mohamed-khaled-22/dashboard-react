import { Link } from 'react-router-dom'
import { FaTasks, FaEye } from "react-icons/fa"

export default function ProjectCard({ project, taskCount }) {
  return (
    <div className="card project-card">
      <div className="header">
        <FaTasks className="icon" />
        <h3>
          {project.title}
        </h3>
      </div>

      <p>{project.body.slice(0, 50)}...</p>
      <p><b>Tasks:</b> {taskCount}</p>
      <Link to={`/project/${project.id}`} className="view-tasks-link">
        <FaEye className="icon" /> View Tasks
      </Link>
    </div>
  )
}
