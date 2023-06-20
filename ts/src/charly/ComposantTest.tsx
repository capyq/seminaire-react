import './StyleInfo.css';
import { Button, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from 'react';
import { getAll, Pokemon } from '../API';

let todos = [] as string[]
const ComposantTest = () => {
    const [click, setClick] = useState<number>(0);
    const [text, setText] = useState<string>();
    const [render, setRender] = useState<number>(0);
    const addOne = useCallback(() => {
        setClick(click + 1)
    }, [])
    useEffect(() => {
        // setRender(render + 1);
    })

    const [todoText, setTodoText] = useState<string>();
    const addTodo = () => {
        if (todoText) {
            todos.push(todoText);
            setTodoText("")
        }
    }

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [filterPokemonText, setFilterPokemonText] = useState<string>("");
    const [pokemonFilter, setPokemonFilter] = useState<Pokemon[]>([]);
    useEffect(() => {
        getAll().then(pok => setPokemons(pok))
    }, [])
    useEffect(() => {
        setPokemonFilter(pokemons.filter(p => !filterPokemonText || p.name.indexOf(filterPokemonText) !== -1))
    }, [filterPokemonText, pokemons])
    return (
        <div className="center-hor">
            <div>
                <h1> Basics </h1>
                <p>Count click : {click}</p>
                <p>Count text : {text}</p>
                <p>Count render : {render}</p>
                <TextField onChange={(e) => setText(e.target.value)} />
                <Button
                    variant="contained"
                    onClick={addOne}>
                    MyButton
                </Button>
            </div>
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
            <div>
                <h1>Pokemons</h1>
                <TextField value={filterPokemonText} onChange={(e) => setFilterPokemonText(e.target.value)}></TextField>
                <div style={{ maxHeight: "30rem", overflow: "auto" }}>
                    {pokemonFilter.map(p => <p key={p.id}>{p.name}</p>)}
                </div>
            </div>
        </div>
    )
}

export default ComposantTest;
