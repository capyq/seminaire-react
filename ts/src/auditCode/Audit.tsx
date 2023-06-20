import { Button, TextField } from "@mui/material";
import { useCallback, useState } from 'react';
import './StyleInfo.css';

const Audit = () => {
    const [click, setClick] = useState<number>(0);
    const [t, setT] = useState<string>();
    const [todos, setTodos] = useState<string[]>([]);
    const addOne = useCallback(() => {
        setClick(click + 1)
    }, [click])
    const [todoText, setTodoText] = useState<string>();
    const addTodo = () => { if (todoText) { setTodos(old => [...old, todoText]); setTodoText("") } }

    return (
        <div className="center-hor">
            <div>
                <h1> Basics </h1><p>Count click : {click}</p><p>Count text : {t}</p>
                <TextField onChange={(e) => setT(e.target.value)} />
                <Button
                    variant="contained"
                    onClick={addOne}>
                    MyButton
                </Button>
            </div>
            <div>
                <h1> Todos </h1><span>list de Todos ({todos.length})</span>
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
                        <div>{t}
                            <Button
                                variant="text"
                                onClick={() => { setTodos(old => [...old.slice(0, id), ...old.slice(id + 1, old.length)]) }}
                                startIcon="X"
                            />
                        </div>))}
                </div>
            </div>
        </div>
    )
}

export default Audit;
