import { Button } from "@mui/material";
import { useCallback, useState } from "react";

const ButtunClick = () => {

    const [click, setClick] = useState<number>(0);

    const addOne = () => {
        setClick(click + 1)
    }

    return (
        <div>
            <p>Count click : {click}</p>
            <Button
                variant="contained"
                onClick={addOne}>
                MyButton
            </Button>
        </div>
    )
}

export default ButtunClick;
