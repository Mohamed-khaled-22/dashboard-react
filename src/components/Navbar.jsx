import { Link } from 'react-router-dom'
import { FaTachometerAlt, FaPlus } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="sidebar">

      <Link to="/" className="nav-link">
        <FaTachometerAlt /> Dashboard
      </Link>

      <Link to="/add-project" className="nav-link">
        <FaPlus /> Add Project
      </Link>

      <Link to="/add-task" className="nav-link">
        <FaPlus /> Add Task
      </Link>

    </nav>
  )
}
