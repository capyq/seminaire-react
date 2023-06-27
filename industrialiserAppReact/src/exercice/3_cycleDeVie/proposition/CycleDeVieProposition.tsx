import { Button, TextField } from "@mui/material";
import { useCallback, useMemo, useState } from "react";

const CycleDeVieProposition = () => {
    const [todoText, setTodoText] = useState<string>("");
    const [todoFilter, setTodoFilter] = useState<string>("");
    const [todos, setTodos] = useState<string[]>([]);

    const todosfilter = useMemo(
        () => todos.filter(todo => todo.toLowerCase().includes(todoFilter.toLowerCase())),
        [todoFilter, todos]);

    const addTodo = useCallback(() => {
        if (todoText) {
            setTodos(oldTodos => [...oldTodos, todoText]);
            setTodoText("")
        }
    }, [todoText])

    const onChangeFilter = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const filter = e.target.value;
        setTodoFilter(filter)
    }, [])

    const removeTodos = useCallback((todo: string) => () => {
        setTodos(oldTodos => oldTodos.filter(t => t !== todo));
    }, [])

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
                    <div key={`${t}-${id}`}>
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
export default CycleDeVieProposition;
