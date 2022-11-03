import React from "react";
import axios from "axios";

function Task(props) {
  const status = props.complete;
  const deleteTask = async () => {
    await axios
      .delete("http://localhost:5000/api/v1/settings/deleteTask/" + props.id)
      .then((response) => {
        refreshPage();
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const markCompleted = async () => {
    await axios
      .put("http://localhost:5000/api/v1/settings/markTask/" + props.id)
      .then((response) => {
        refreshPage();
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <div className="task">
        <div className="left">
          <button className="btn" onClick={() => markCompleted()}>
            <i class="bi bi-check-circle"></i>
          </button>
          
          <p id="temp-task" className={status ? 'task-text strike': 'task-text'}  >
            {props.task}
          </p>
        </div>
        <button className="btn" onClick={() => deleteTask()}>
          <i class="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  );
}

export default Task;
