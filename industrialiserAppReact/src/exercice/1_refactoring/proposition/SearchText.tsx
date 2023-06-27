import { TextField } from "@mui/material";
import { useState } from "react";
import useRenderCount from "../../../hook/useRenderCount";

const SearchText = () => {
    const [text, setText] = useState<string>();
    const countRender = useRenderCount([text]);
    return (
        <>
            <p>Count text Render : {countRender}</p>
            <p>Count text : {text}</p>
            <TextField onChange={(e) => setText(e.target.value)} />
        </>
    )
}

export default SearchText;
