import { useEffect, useState } from "react";

const TICK_INTERVAL = 4000;
const TickComponents = () => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => {
        const newTick = t+1
        console.log("Tick:", newTick);
        return newTick
      });
    }, TICK_INTERVAL);
    return ()=> clearInterval(interval);
  }, []);

  return <p>{`tick ${tick}`}</p>;
};

export default TickComponents;