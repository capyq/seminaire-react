import { Button, Switch } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";

const TickComponents = () => {
  const [tick, setTick] = useState(0);
  const tickRef = useRef(tick);
  useEffect(() => {
    setInterval(() => {
      console.log("tick :", tickRef.current);
      tickRef.current = tickRef.current + 1;
      setTick((t) => tickRef.current);
    }, 4000);
  }, []);
  return <p>{`tick ${tick}`}</p>;
};

const DebugBasic = () => {
  const [click, setClick] = useState<number>(0);
  const addOne = useCallback(() => {
    setClick(click + 1);
  }, []);

  const [displayTimer, setDisplayTimer] = useState(false);

  return (
    <div style={{ width: "15rem" }}>
      <h1> Basics </h1>
      <p>Count click : {click}</p>
      <div style={{ display: "flex" }}>
        <Switch
          value={displayTimer}
          onChange={() => setDisplayTimer((d) => !d)}
        />
        <p>display timer </p>
      </div>
      <Button variant="contained" onClick={addOne}>
        MyButton
      </Button>
      {displayTimer && <TickComponents />}
    </div>
  );
};

export default DebugBasic;
