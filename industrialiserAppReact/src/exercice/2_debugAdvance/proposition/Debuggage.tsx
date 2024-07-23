import { useState } from "react";
import DataDisplay from "./DataDisplay";
import TodoAdder from "./TodoAdder";

const Debuggage = () => {
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (todoText: string) => {
        if (todoText) {
            todos.push(todoText);
        }
    }

    const removeItem = (id: number) => {
        setTodos(oldTodos => [...oldTodos.slice(0, id), ...oldTodos.slice(id + 1,oldTodos.length)])
    }
    return (
        <div>
            <h1> Todos </h1>
            <span>list de Todos ({todos.length})</span>
            <TodoAdder addTodo={addTodo} />
            <DataDisplay data={todos} removeItem={removeItem} />
        </div>
    )
}

export default Debuggage;
