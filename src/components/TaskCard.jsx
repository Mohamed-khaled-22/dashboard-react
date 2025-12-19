import { FaArrowRight, FaCheck, FaTrash, FaClock } from "react-icons/fa";

export default function TaskCard({ task, move, remove }) {

  const getStatusIcon = (status) => {
    if (status === "Done") return <FaCheck className="icon-status" />;
    if (status === "In Progress") return <FaArrowRight className="icon-status" />;
    return <FaClock className="icon-status" />; // To Do
  }

  return (
    <div className="card task-card">
      <div className="header">
        {getStatusIcon(task.status)}
        <h4> {task.title}</h4>
      </div>

      <p>{task.description}</p>

      <div className="task-buttons">

        <button className="todo-btn" onClick={() => move(task.id, "To Do")}>
          <FaClock className="icon-btn" /> <span>To Do</span>
        </button>

        <button className="inprogress-btn" onClick={() => move(task.id, "In Progress")}>
          <FaArrowRight className="icon-btn" /> <span>In Progress</span>
        </button>

        <button className="done-btn" onClick={() => move(task.id, "Done")}>
          <FaCheck className="icon-btn" /> <span>Done</span>
        </button>

        <button className="delete-btn" onClick={() => remove(task.id)}>
          <FaTrash className="icon-btn" /> <span>Delete</span>
        </button>

      </div>
    </div>
  )
}
