import { useState } from "react";
import SearchInput from "./SearchInput";
import Counter from "./Counter";
import Timer from "./Timer";

const RefactoringDone = ()=> {

  const [showCounter, setShowCounter] = useState(true);
  const [showTimer, setShowTimer] = useState(true);

  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  const toggleTimer = () => {
    setShowTimer(!showTimer);
  };


  return (
    <div>
      <h1>App</h1>
        <button onClick={toggleCounter}>Toggle Counter</button>
        <button onClick={toggleTimer}>Toggle Timer</button>
        <SearchInput />
        { showCounter && <Counter />}
        { showTimer && <Timer />}
    </div>
)}

export default RefactoringDone;
