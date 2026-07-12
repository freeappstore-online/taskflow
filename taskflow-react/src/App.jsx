import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskTable from "./components/TaskTable/TaskTable";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <div className="container">
        <Sidebar />

        <main>
          <Dashboard />
          <TaskForm />
          <TaskTable />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;