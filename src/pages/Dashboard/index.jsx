import Menu from "../../components/Menu";
import { PageDiv, PageTitle } from "../../components/PageDiv/style";
import DashboardCard from "../../components/DashCard";
import { useContext, useState } from "react";
import { UnidadeConsumidoraContext } from "../../contexts/UnidadeConsumidora/index.js";

const Dashboard = () => {
  const dashboardContext = useContext(UnidadeConsumidoraContext);

  const totalW = dashboardContext.unidades.map((value) => {
    return value.modelo;
  });

  const averageSum = totalW.reduce((a, b) => a + b, 0);

  const countUnidadesAtivas = dashboardContext.unidades.filter((value) => {
    if (value.ativo) {
      return true;
    } else {
      return false;
    }
  });

  const countUnidadesInativas = dashboardContext.unidades.filter((value) => {
    if (value.ativo) {
      return false;
    } else {
      return true;
    }
  });

  return (
    <>
      <Menu selected1={true} />

      <PageDiv>
        <PageTitle>Dashboard</PageTitle>
        <div style={{ display: "flex", gap: "7px" }}>
          <DashboardCard
            title={"Total Unidades"}
            data={dashboardContext.unidades.length}
          />

          <DashboardCard
            title={"Unidades Ativas"}
            data={countUnidadesAtivas.length}
          />

          <DashboardCard
            title={"Unidades Inativas"}
            data={countUnidadesInativas.length}
          />

          <DashboardCard
            title={"Média de Energia"}
            data={averageSum / totalW.length}
          />
        </div>
      </PageDiv>
    </>
  );
};

export default Dashboard;
