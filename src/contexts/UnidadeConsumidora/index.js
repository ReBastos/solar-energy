import {createContext, useEffect, useState} from "react";

export const UnidadeConsumidoraContext = createContext([]);

export function UnidadeConsumidoraProvider({children}){

    const [UnidadesConsumidoras, setUnidadesConsumidoras] = useState([]);
    const [atualizar, setAtualizar] = useState(0);

    useEffect( async () => {
        const response = await fetch('http://localhost:3333/unidades');
        const unidadesResponse = await response.json();
        setUnidadesConsumidoras(unidadesResponse);
        

    },[atualizar]);

    const atualizarFetch =  async () =>{
        const atualizacao = await fetch('http://localhost:3333/unidades');
        setAtualizar(atualizacao);

    }
    

    return(
        <UnidadeConsumidoraContext.Provider
        value={{
            unidades: UnidadesConsumidoras,
            atualizar : atualizarFetch

        }}>
        {children}
        </UnidadeConsumidoraContext.Provider>

    )


}