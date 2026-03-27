import { createContext } from "react";



export const MathContext = createContext();
export function MathProvider({children}){
    const [mode, setMode] = useState('Algebra')
    return (
        <MathContext.Provider value = {{mode}}>
            {children}
        </MathContext.Provider>
    )
}