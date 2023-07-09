import React from "react";
import {
  progressComplete,
  progressIncomplete,
  container,
  todoContainer,
} from "./data.module.css";
import deleteIcons from "../../Assets/deleteIcon.svg";

const Data = ({ TodoData, setTodoData }) => {
  const handleDelete = (todoId) => {
    let data = TodoData.filter((ele, i) => ele.id !== todoId);
    setTodoData(data);
  };
  return (
    <div className={container}>
      {TodoData.map((todo, ind) => (
        <div className={todoContainer} key={ind}>
          <h3 className={todo.status ? progressComplete : progressIncomplete}>
            {todo.title}
          </h3>
          <button onClick={() => handleDelete(todo.id)}>
            <img width={15} src={deleteIcons} alt='' />
          </button>
          {/* <h3 style={{ color: todo.status ? "green" : "red" }}>{todo.title}</h3> */}
        </div>
      ))}
    </div>
  );
};

export default Data;
