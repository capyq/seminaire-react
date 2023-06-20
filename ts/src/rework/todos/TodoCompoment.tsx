import { Button, TextField } from "@mui/material";
import { useCallback, useState } from "react";


let todos = [] as string[]

const TodoCompoment = () => {
    const [todoText, setTodoText] = useState<string>();
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = () => {
        if (todoText) {
            setTodos(oldTodos => [todoText, ...oldTodos])
            setTodoText("")
        }
    }

    const removeTodos = useCallback((id: number) => {
        setTodos(oldTodos => [...oldTodos.slice(0, id), ...oldTodos.slice(id + 1, todos.length)])
    }, [])


    return (
        <div>
            <h1> Todos </h1>

            <span>list de Todos ({todos.length})</span>
            <div>

                <TextField value={todoText} onChange={(e) => setTodoText(e.target.value)}></TextField>
                <Button
                    variant="contained"
                    onClick={addTodo}>
                    AddTodo
                </Button>
            </div>
            <div>
                {todos.map((t, id) => (
                    <div key={t}>
                        {t}
                        <Button
                            variant="text"
                            onClick={() => removeTodos(id)}
                            startIcon="X"
                        />
                    </div>))}
            </div>
        </div>
    )
}

export default TodoCompoment;
