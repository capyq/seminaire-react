import { Button, TextField } from "@mui/material";
import { useState } from "react";

let todos = [] as string[];
const Debuggage = () => {
  const [render, setRender] = useState<number>(0);
  const [todoText, setTodoText] = useState<string>();
  const addTodo = () => {
    if (todoText) {
      todos.push(todoText);
      setTodoText("");
    }
  };
  setRender(render => render + 1);
  /* This is the Advance Component
      First a render counter that blows up
      Then a list of todos that can be added and removed but never removed when clicked
      */
  return (
    <div>
      <h1> Advance </h1>
      <p>Count render : {render}</p>
      <span>list de Todos ({todos.length})</span>
      <div>
        <TextField
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        ></TextField>
        <Button variant="contained" onClick={addTodo}>
          AddTodo
        </Button>
      </div>
      <div>
        {todos.map((t, id) => (
          <div key={t} style={{ display: "flex", padding: "1em" }}>
            <TextField
              value={t}
              onChange={(newLabel) => {
                todos[id] = newLabel.target.value;
                setRender((old) => old + 1);
              }}
              label={`memo ${id}`}
            />
            <Button
              variant="text"
              onClick={() => {
                todos = [
                  ...todos.slice(0, id),
                  ...todos.slice(id + 1, todos.length),
                ];
              }}
              startIcon="X"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Debuggage;
