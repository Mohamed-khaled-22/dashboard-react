import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import ProjectTasks from './pages/ProjectTasks'
import Dashboard from './pages/Dashboard'
import AddProject from './pages/AddProject'
import AddTask from './pages/AddTask'

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/project/:id" element={<ProjectTasks />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </main>
    </div>
  )
}