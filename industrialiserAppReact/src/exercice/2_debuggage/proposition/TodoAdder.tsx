import { Button, TextField } from "@mui/material";
import { useState } from "react";

type ParentProps = {
    addTodo: (todo: string) => void
}

const TodoAdder = (props: ParentProps) => {
    const { addTodo } = props;
    const [todoText, setTodoText] = useState<string>("");

    return (
        <div>
            <TextField value={todoText} onChange={(e) => setTodoText(e.target.value)}></TextField>
            <Button
                variant="contained"
                onClick={() => { addTodo(todoText); }}>
                AddTodo
            </Button>
        </div>
    )
}

export default TodoAdder;
