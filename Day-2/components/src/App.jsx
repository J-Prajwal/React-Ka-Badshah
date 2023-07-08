import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import DataScreen from "./Components/DataScreen";
import Header from "./Components/Header";

function App() {
  const [value, setValue] = useState(10);

  const handleIncrease = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setValue((prev) => prev - 1);
  };
  return (
    <div>
      <Header variant={"large"} title={"Counter Application"} />
      <hr />
      <DataScreen title={value} />
      <Button currentValue={value} onClickHandler={handleDecrease} title={"-"} />
      <Button currentValue={value} onClickHandler={handleIncrease} title={"+"} />
    </div>
  );
}

export default App;
