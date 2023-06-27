
// dans un fichier
const myObject = {
    a: 1,
    b: 2,
    c: 3,
}
const mapper = (data: typeof myObject) => {
    return data.a * data.b + data.c
}

// dans un autre fichier hook.
const compose = (data: any, mapper: any) => {
    return mapper(data)
}

const value = compose(myObject, mapper)
