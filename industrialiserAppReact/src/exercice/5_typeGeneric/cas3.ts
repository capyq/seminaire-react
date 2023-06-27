export type Event =
    | {
        type: "LOG_IN"
        payload: {
            userId: string
        }
    }
    | {
        type: "SIGN_OUT"
    }

const sendEvent = (eventType: Event["type"], payload?: any) => { }

sendEvent("LOG_IN", { userId: "toto" })
sendEvent("SIGN_OUT", { userId: "toto" })
sendEvent("WRONG_KEY")