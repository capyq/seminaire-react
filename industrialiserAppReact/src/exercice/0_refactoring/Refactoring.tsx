import { useEffect, useState } from "react";

  const App = () => {
    const [showCounter, setShowCounter] = useState(true);
    const [showTimer, setShowTimer] = useState(true);
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState('');
    const [timer, setTimer] = useState(0);

    const toggleCounter = () => {
      setShowCounter(!showCounter);
    };

    const toggleTimer = () => {
      setShowTimer(!showTimer);
    };

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    const reset = () => {
      setCount(0);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    };

    useEffect(() => {
      const interval = setInterval(() => {
        setTimer(t=>t + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, []);

    return (
      <div>
        <h1>App</h1>
        <button onClick={toggleCounter}>Toggle Counter</button>
        <button onClick={toggleTimer}>Toggle Timer</button>
        <input type="text" value={search} onChange={handleSearchChange} placeholder="Search" />
        {showCounter && (
          <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
          </div>
        )}
        {showTimer && <h1>Timer: {timer}</h1>}
      </div>
    );
  };

  export default App;
