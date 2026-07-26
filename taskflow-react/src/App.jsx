import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskTable from "./components/TaskTable/TaskTable";
import Footer from "./components/Footer/Footer";

function App() {
  // Load tasks from Local Storage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Search state
  const [search, setSearch] = useState("");

  // Editing state
  const [editingTask, setEditingTask] = useState(null);

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = (newTask) => {
    const task = {
      id: Date.now(),
      ...newTask,
    };

    setTasks((previousTasks) => [...previousTasks, task]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  // Select task for editing
  const editTask = (task) => {
    setEditingTask(task);
  };

  // Update task
  const updateTask = (updatedTask) => {
    // Cancel editing
    if (updatedTask === null) {
      setEditingTask(null);
      return;
    }

    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );

    setEditingTask(null);
  };

  // Clear all tasks
  const clearAllTasks = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all tasks?"
    );

    if (!confirmed) return;

    setTasks([]);
    setEditingTask(null);
  };

  // Search filter
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
      />

      <div className="container">
        <Sidebar />

        <main className="main-content">
          <Dashboard tasks={tasks} />

          <TaskForm
            addTask={addTask}
            updateTask={updateTask}
            editingTask={editingTask}
          />

          <TaskTable
            tasks={filteredTasks}
            deleteTask={deleteTask}
            editTask={editTask}
            clearAllTasks={clearAllTasks}
          />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;