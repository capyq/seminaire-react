import './StyleInfo.css';
import { Button, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from 'react';
import { getAll, Pokemon } from '../API';
import Refactoring from '../exercice/refactoring/Refactoring';
import HooksProposition from '../exercice/customHook/proposition/HooksProposition';

let todos = [] as string[]
const ComposantTest = () => {

    const [todoText, setTodoText] = useState<string>();
    const addTodo = () => {
        if (todoText) {
            todos.push(todoText);
            setTodoText("")
        }
    }
    return (
        <div className="center-hor">
            <Refactoring />
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
                        <div>
                            {t}
                            <Button
                                variant="text"
                                onClick={() => { todos = [...todos.slice(0, id), ...todos.slice(id + 1, todos.length)] }}
                                startIcon="X"
                            />
                        </div>))}
                </div>
            </div>
            <HooksProposition />
        </div>
    )
}

export default ComposantTest;
