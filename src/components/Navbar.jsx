import { Link } from 'react-router-dom'
import { FaTachometerAlt, FaPlus } from "react-icons/fa"
import { useEffect, useState } from 'react'

export default function Navbar() {

  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark" ? true : false);

  useEffect(() => {
    
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);


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

      <div className="dark-mood">
        <span className="txt">Dark Mode:</span>
        <label className="switch">
          <input type="checkbox" checked={isDarkMode} onClick={() => { setIsDarkMode(prev => !prev) }} />
          <span className="slider round"></span>
        </label>
      </div>

    </nav >
  )
}
