import {createContext, useEffect, useState} from "react";

export const UnidadeConsumidoraContext = createContext([]);

export function UnidadeConsumidoraProvider({children}){

    const [UnidadesConsumidoras, setUnidadesConsumidoras] = useState([]);

    useEffect( async () => {
        const response = await fetch('http://localhost:3333/unidades');
        const unidadesResponse = await response.json();
        setUnidadesConsumidoras(unidadesResponse);
        

    },[]);

    return(
        <UnidadeConsumidoraContext.Provider
        value={{
            unidades: UnidadesConsumidoras,
            test2 :"teste"

        }}>
        {children}
        </UnidadeConsumidoraContext.Provider>

    )


}