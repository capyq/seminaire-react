

const myFunc = <TObj, Tkey extends keyof TObj>(myObj: TObj, myKey: Tkey) => {
    return myObj[myKey];
}

const obj = {
    name: "Quentin",
    age: 12022,
    role: "user"
}

const result = myFunc(obj, "name");


type onlyArray<Tobj> = Tobj extends any[] ? Tobj : "need an array "


const sendEvent = <Type extends Event["type"]>(
    ...args: Extract<Event, { type: Type }> extends { payload: infer TPayload }
        ? [Type, TPayload]
        : [Type]
) => { }

