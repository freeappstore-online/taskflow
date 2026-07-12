import { useState } from "react";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskTable from "./components/TaskTable/TaskTable";
import Footer from "./components/Footer/Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const taskWithId = {
      id: Date.now(),
      ...newTask,
    };

    setTasks((previousTasks) => [...previousTasks, taskWithId]);
  };

  return (
    <>
      <Header />

      <div className="container">
        <Sidebar />

        <main>
          <Dashboard tasks={tasks} />

          <TaskForm addTask={addTask} />

          <TaskTable tasks={tasks} />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;