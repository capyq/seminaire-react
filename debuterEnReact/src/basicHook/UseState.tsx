import { useState } from "react";

const UseState = () => {
    const [count, setCount] = useState<number>(0);
    const handleClick = () => {
        setCount((oldCount: number) => oldCount + 1);
    }
    return (
        <div>
            <p>You clicked {count} {count < 2 ? "time" : "times"}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default UseState;
