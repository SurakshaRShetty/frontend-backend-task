import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // Fetch all tasks for logged-in user
  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Failed to fetch tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add new task
  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await api.post("/tasks", { title });
      setTitle("");
      fetchTasks();
    } catch (error) {
      console.error("Failed to add task");
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Failed to delete task");
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
        />

        {/* Add Task */}
        <form onSubmit={addTask} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="New task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 border p-2 rounded"
          />
          <button className="bg-blue-600 text-white px-4 rounded">Add</button>
        </form>

        {/* Task List */}
        <ul className="space-y-2">
          {tasks
            .filter((task) =>
              task.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((task) => (
              <li
                key={task._id}
                className="flex justify-between items-center border p-2 rounded"
              >
                <span>{task.title}</span>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>

        {/* Empty State */}
        {tasks.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No tasks added yet</p>
        )}
      </div>
    </div>
  );
}
