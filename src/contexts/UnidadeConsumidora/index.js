import { createContext, useEffect, useState } from "react";

export const UnidadeConsumidoraContext = createContext([]);

export function UnidadeConsumidoraProvider({ children }) {
  const [UnidadesConsumidoras, setUnidadesConsumidoras] = useState([]);
  const [UnidadesGeradoras, setUnidadesGeradoras] = useState([]);
  const [atualizar, setAtualizar] = useState(0);

  const [editValue, setEditValue] = useState();

  

  useEffect(async () => {
    const response = await fetch("http://localhost:3333/unidades");
    const unidadesResponse = await response.json();
    setUnidadesConsumidoras(unidadesResponse);

    const responseGeradora = await fetch("http://localhost:3333/geracao")
    const geracaoResponse = await responseGeradora.json();
    setUnidadesGeradoras(geracaoResponse);   
    
    
  }, [atualizar]);

 


  const atualizarFetch = async () => {
    const atualizacao = await fetch("http://localhost:3333/unidades");
    setAtualizar(atualizacao);
  };

  const editUnidade = async (id) => {
    const responseedit = await fetch("http://localhost:3333/unidades/" + id);
    const editJson = await responseedit.json();
    setEditValue(editJson);
  };

  return (
    <UnidadeConsumidoraContext.Provider
      value={{
        unidades: UnidadesConsumidoras,
        geracao: UnidadesGeradoras,
        atualizar: atualizarFetch,
        editValue: editValue,
        editUnidade: editUnidade,
      }}
    >
      {children}
    </UnidadeConsumidoraContext.Provider>
  );
}
