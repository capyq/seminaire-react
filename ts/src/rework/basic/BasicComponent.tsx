import { Button, TextField } from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ButtunClick from "./ButtunClick";
import TextInput from "./TextInput";

const BasicComponent = () => {
    const renderCount = useRef<number>(0);
    const [item, setItem] = useState<Record<string, number>>({});
    console.log("🚀 QCA :  ~ file: BasicComponent.tsx:9 ~ BasicComponent ~ item:", JSON.stringify(item));
    const idx = useMemo(() => Object.keys(item).length, [item])
    renderCount.current++;

    const onclick = () => {
        const newItem = {
            ...item,
            [idx + 1]: 1
        }
        console.log("🚀 QCA :  ~ file: BasicComponent.tsx:15 ~ onclick ~ newItem:", newItem);
        setItem(newItem)
    }

    const onDelete = (key: string) => {

        const newItem = { ...item }
        delete newItem[key]
        setItem(newItem)
    }
    return (
        <div>
            <h1> Basics </h1>
            <p>Count render : {renderCount.current}</p>
            <TextInput />
            <ButtunClick />
            <Button onClick={onclick}>add</Button>
            {Object.keys(item).map(i => (<Button key={i} onClick={() => onDelete(i)}>{i}</Button>))
            }
        </div >
    )
}

export default BasicComponent;
