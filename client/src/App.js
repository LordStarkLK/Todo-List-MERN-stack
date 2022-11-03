import "./style/app.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import TaskComp from "./components/Task";

function App() {
  const [tasks,setTasks] = useState([]);

  const { register, handleSubmit } = useForm();

  //adding tasks
  const addTask = async (data) => {
    const task = data.task;
    const dataSet = {task};

    await axios
    .post("http://localhost:5000/api/v1/settings/addTask", dataSet)
    .then((response) => {
      console.log("Posting data", response);
      refreshPage();
    })
    .catch((err) => console.log(err));
  }

  //getting tasks
  useEffect(() => {
    getTasks();
  }, []);
  const getTasks = async () => {
    await axios
    .get("http://localhost:5000/api/v1/settings/getTasks")
    .then((response) => {
      const taskData = response.data.data;
      setTasks(taskData);
    })
    .catch((err) => console.log(err));
  }

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="app">
      <div className="container">
        <form className="form" onSubmit={handleSubmit(addTask)}>
          <input type="text" {...register("task", { required: true })} placeholder="task..." />
          <button type="submit" id="add-btn" className="btn">
            <i class="bi bi-plus-circle"></i>
          </button>
        </form>
        {tasks.map((e) => (
          <TaskComp task={e.task} complete={e.complete} id={e._id}/>
        ))}
    
      </div>
      <img className="logo" src={require('./images/Logo.png')} />
    </div>
  );
}

export default App;
