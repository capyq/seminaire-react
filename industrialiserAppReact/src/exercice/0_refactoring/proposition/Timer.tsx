import { useEffect, useState } from "react";

const Timer = ()=>{
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(t=>t + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>Timer: {timer}</h1>
    </>
)}

export default Timer;
