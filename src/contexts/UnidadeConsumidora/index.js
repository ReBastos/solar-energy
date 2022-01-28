import {createContext, useEffect, useState} from "react";

export const UnidadeConsumidoraContext = createContext([]);

export function UnidadeConsumidoraProvider({children}){

    const [UnidadeConsumidora, setUnidadeConsumidora] = useState([]);

    return(
        <UnidadeConsumidoraContext.Provider
        value={{
            test: 'test',
            test2 :"teste"

        }}>
        {children}
        </UnidadeConsumidoraContext.Provider>

    )


}