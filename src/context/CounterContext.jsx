// 1 - criar context
import { createContext, useState, useContext } from "react";

export const CounterContext = createContext();

// 2 - Criar Provider
export const CounterContextProvider = ({ children }) => {

    const [counter, setCounter] = useState(0);

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    )
}

export const useCounterContext = () => {
    const context = useContext(CounterContext);

    if(!context){
        console.log("Houve um problema no contexto...")
    }

    return context;
}