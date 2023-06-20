import { TextField } from "@mui/material";
import { useState } from "react";

const TextInput = () => {

    const [text, setText] = useState<string>();
    return (
        <div>
            <p>Count text : {text}</p>
            <TextField onChange={(e) => setText(e.target.value)} />
        </div>
    )
}

export default TextInput;
