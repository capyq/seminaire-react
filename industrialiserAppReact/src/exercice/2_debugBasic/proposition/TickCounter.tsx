import { Switch } from "@mui/material";
import { useState } from "react";
import useRenderCount from "../../../hook/useRenderCount";
import TickComponents from "./TickComponents";
import "./tickCounter.css";

const TickCounter = () => {
    const [displayTick, setDisplayTick] = useState(false);
    const countRender = useRenderCount([displayTick]);
    return (
        <>
            <p>Count render : {countRender}</p>
            <div className="tick-counter-switch-container">
                <Switch
                value={displayTick}
                onChange={() => setDisplayTick((d) => !d)}
                />
                <p>display timer </p>
            </div>
            <TickComponents />
        </>
    )
}

export default TickCounter;
