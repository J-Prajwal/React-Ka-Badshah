import React, { useState } from "react";
import { container, input, btn } from "./input.module.css";

const Input = ({ setTodoData }) => {
  const [addData, setAddData] = useState({
    id: new Date(),
    title: "",
    status: false,
  });
  const handleOnChange = (e) => {
    setAddData((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleAddTodoList = () => {
    setTodoData((prev) => [...prev, addData]);
    setAddData((prev) => ({ ...prev, title: "" }));
  };
  return (
    <div className={container}>
      <input
        onChange={handleOnChange}
        className={input}
        type='text'
        placeholder='Enter Todo Item'
        value={addData.title}
      />
      <button onClick={handleAddTodoList} className={btn}>
        +
      </button>
    </div>
  );
};

export default Input;
