import Menu from "../../components/Menu";
import { PageDiv, PageTitle } from "../../components/PageDiv/style";
import { PrimaryButton } from "../../components/Buttons/styles";
import { Link } from "react-router-dom";
import { Table } from "../../components/Table/styles";
import Row from "../../components/TableRow/index.jsx";
import { UnidadeConsumidoraContext } from "../../contexts/UnidadeConsumidora/index.js";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UnidadeConsumidora = () => {
  const unidadesContext = useContext(UnidadeConsumidoraContext);

  const unidadesLinhas = unidadesContext.unidades;

  const [estadoLinhas, setEstadoLinhas] = useState("");

  if (unidadesContext == null) {
    return null;
  } else {
    const linhas = unidadesLinhas.map((value) => {
      return (
        <Row
          key={uuidv4()}
          id={value.id}
          apelido={value.apelido}
          local={value.local}
          marca={value.marca}
          modelo={value.modelo}
        />
      );
    });

    return (
      <>
        <PageDiv>
          <PageTitle>Unidade Consumidora</PageTitle>

          <Table>
            <thead>
              <tr>
                <th style={{ width: "70px" }}>Id</th>
                <th style={{ width: "150px" }}>Apelido</th>
                <th style={{ width: "250px" }}>Local</th>
                <th style={{ width: "150px" }}>Marca</th>
                <th style={{ width: "150px" }}>Modelo</th>
                <th style={{ width: "100px" }} colSpan={"2"}>
                  Ações
                </th>
              </tr>
            </thead>

            <tbody>{linhas}</tbody>
          </Table>

          <Link
            to="/cadastrounidadeconsumidora"
            style={{ width: "fit-content" }}
          >
            <PrimaryButton>Nova unidade</PrimaryButton>
          </Link>
        </PageDiv>
      </>
    );
  }
};

export default UnidadeConsumidora;
