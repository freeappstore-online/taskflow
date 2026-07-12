import { useState } from "react";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskTable from "./components/TaskTable/TaskTable";
import Footer from "./components/Footer/Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");

  const addTask = (newTask) => {
    const task = {
      id: Date.now(),
      ...newTask,
    };

    setTasks((previousTasks) => [...previousTasks, task]);
  };

  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header search={search} setSearch={setSearch} />

      <div className="container">
        <Sidebar />

        <main className="main-content">
          <Dashboard tasks={tasks} />

          <TaskForm addTask={addTask} />

          <TaskTable
            tasks={filteredTasks}
            deleteTask={deleteTask}
          />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;