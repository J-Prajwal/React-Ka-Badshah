import { useState, useEffect } from "react";
import "./App.css";
import Data from "./Components/Data/Data";
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import { TodoData } from "./Data/TodoData";

function App() {
  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    setTodoData(TodoData);
  }, []);
  return (
    <div>
      <Header />
      <hr />
      <Input setTodoData={setTodoData} TodoData={todoData} />
      <Data setTodoData={setTodoData} TodoData={todoData} />
    </div>
  );
}

export default App;
