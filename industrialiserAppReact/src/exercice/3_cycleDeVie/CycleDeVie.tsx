import { Button, TextField } from "@mui/material";
import { useState } from "react";

const CycleDeVie = () => {
    const [todoText, setTodoText] = useState<string>("");
    const [todoFilter, setTodoFilter] = useState<string>("");
    const [todos, setTodos] = useState<string[]>([]);
    const [todosfilter, setTodosfilter] = useState<string[]>([]);

    const addTodo = () => {
        if (todoText) {
            setTodos(oldTodos => [...oldTodos, todoText]);
            setTodosfilter(oldTodos => [...oldTodos, todoText]);
            setTodoText("")
        }
    }

    const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const filter = e.target.value;
        setTodoFilter(filter)
        setTodosfilter(todos.filter(todo => todo.toLowerCase().includes(filter.toLowerCase())))
    }

    const removeTodos = (todo: string) => () => {
        setTodos(oldTodos => oldTodos.filter(t => t !== todo));
        setTodosfilter(oldTodos => oldTodos.filter(t => t !== todo));
    }

    return (
        <div>
            <h1> Todos </h1>

            <h3>list de Todos ({todos.length})</h3>
            <div>

                <TextField value={todoText} onChange={(e) => setTodoText(e.target.value)}></TextField>
                <Button
                    variant="contained"
                    onClick={addTodo}>
                    AddTodo
                </Button>
            </div>
            <br />
            <div>
                <h3>Filter</h3>
                <TextField value={todoFilter} onChange={onChangeFilter}></TextField>
            </div>
            <br />
            <div>
                {todosfilter.map((t, id) => (
                    <div>
                        {t}
                        <Button
                            variant="text"
                            onClick={removeTodos(t)}
                            startIcon="X"
                        />
                    </div>))}
            </div>
        </div>
    )
}

export default CycleDeVie;
