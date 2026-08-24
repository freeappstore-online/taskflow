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
  //
  const [sortBy, setSortBy] = useState("default");
  // Editing state
  const [editingTask, setEditingTask] = useState(null);

  // 🌙 Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  //Advance filtering
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save Theme
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Export tasks as JSON
const exportTasks = () => {
  const data = JSON.stringify(tasks, null, 2);

  const blob = new Blob([data], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "taskflow-backup.json";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};


// Import tasks from JSON
const importTasks = (event) => {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const importedTasks = JSON.parse(e.target.result);

      if (!Array.isArray(importedTasks)) {
        alert("Invalid TaskFlow backup file.");
        return;
      }

      const validTasks = importedTasks.filter(
        (task) =>
          task &&
          typeof task.title === "string" &&
          typeof task.id !== "undefined"
      );

      if (validTasks.length === 0 && importedTasks.length > 0) {
        alert("No valid tasks found in this backup file.");
        return;
      }

      setTasks(validTasks);

      alert(
        `${validTasks.length} task(s) imported successfully!`
      );
    } catch (error) {
      alert(
        "Unable to import this file. Please select a valid JSON backup."
      );
    }

    // Reset file input so the same file can be imported again
    event.target.value = "";
  };

  reader.readAsText(file);
};

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
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
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
        task.id === updatedTask.id ? updatedTask : task,
      ),
    );

    setEditingTask(null);
  };

  //change task status
  const changeTaskStatus = (id, newStatus) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  };

  // Clear all tasks
  const clearAllTasks = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all tasks?",
    );

    if (!confirmed) return;

    setTasks([]);
    setEditingTask(null);
  };
  //clear filters
  const clearFilters = () => {
    setSearch("");
    setCategoryFilter("All");
    setStatusFilter("All");
    setPriorityFilter("All");
    setSortBy("default");
  };
  const getPriorityValue = (priority) => {
    switch (priority) {
      case "High":
        return 3;

      case "Medium":
        return 2;

      case "Low":
        return 1;

      default:
        return 0;
    }
  };
  // Search filter
  const filteredTasks = tasks
    .filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        categoryFilter === "All" || task.category === categoryFilter;

      const matchesStatus =
        statusFilter === "All" || task.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All" || task.priority === priorityFilter;

      return (
        matchesSearch && matchesCategory && matchesStatus && matchesPriority
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "title-asc":
          return a.title.localeCompare(b.title);

        case "title-desc":
          return b.title.localeCompare(a.title);

        case "due-asc":
          return (
            new Date(a.dueDate || "9999-12-31") -
            new Date(b.dueDate || "9999-12-31")
          );

        case "due-desc":
          return (
            new Date(b.dueDate || "0000-01-01") -
            new Date(a.dueDate || "0000-01-01")
          );

        case "priority-high":
          return getPriorityValue(b.priority) - getPriorityValue(a.priority);

        case "priority-low":
          return getPriorityValue(a.priority) - getPriorityValue(b.priority);

        default:
          return 0;
      }
    });

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
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
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
            clearFilters={clearFilters}
            changeTaskStatus={changeTaskStatus}
             exportTasks={exportTasks}
  importTasks={importTasks}
          />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
