

const myFunc = <TObj, Tkey extends keyof TObj>(myObj: TObj, myKey: Tkey) => {
    return myObj[myKey];
}

const obj = {
    name: "Quentin",
    age: 12022,
    role: "user"
}

const result = myFunc(obj, "name");