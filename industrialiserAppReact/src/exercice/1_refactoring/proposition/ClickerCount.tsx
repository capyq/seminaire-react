import { Button } from "@mui/material";
import { useCallback, useState } from "react";
import useRenderCount from "../../../hook/useRenderCount";

const ClickerCount = () => {

    const [ClickCounter, setClick] = useState<number>(0);

    const addOne = useCallback(() => {
        setClick(old => old + 1)
    }, []);

    const countRender = useRenderCount([ClickCounter]);
    return (
        <>
            <p>Count render : {countRender}</p>
            <p>Count click : {ClickCounter}</p>
            <Button
                variant="contained"
                onClick={addOne}>
                MyButton
            </Button>
        </>
    )
}

export default ClickerCount;
