import { Button, TextField } from "@mui/material";
import { useState } from "react";
import DataDisplay from "./DataDisplay";
import TodoAdder from "./TodoAdder";

// let todos = [] as string[]

const Debuggage = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [countAdd, setCountAdd] = useState<number>(0);
    const addTodo = (todoText: string) => {
        if (todoText) {
            todos.push(todoText);
            setCountAdd(old => old + 1)
        }
    }

    const removeItem = (id: number) => {
        setTodos([...todos.slice(0, id), ...todos.slice(id + 1, todos.length)])
        setCountAdd(old => old - 1)

    }
    return (
        <div>
            <h1> Todos </h1>
            <span>list de Todos ({countAdd})</span>
            <TodoAdder addTodo={addTodo} />

            <DataDisplay data={todos} removeItem={removeItem} />
        </div>
    )
}

export default Debuggage;
