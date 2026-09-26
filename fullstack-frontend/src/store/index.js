import { createContext } from "react"

const CONTEXT = createContext()

const initialState = {
    color: "#ff0000",
    count: 100,
}

export {
    CONTEXT,
    initialState
}
