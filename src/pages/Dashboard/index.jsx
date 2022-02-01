import { PageDiv, PageTitle } from "../../components/PageDiv/style";
import DashboardCard from "../../components/DashCard";
import { useContext, useEffect, useState } from "react";
import { UnidadeConsumidoraContext } from "../../contexts/UnidadeConsumidora/index.js";
import Chart from "../../components/Graphic";
import handleGraphicData from "../../utils";


const Dashboard = () => {

  //Get Context
  const dashboardContext = useContext(UnidadeConsumidoraContext);
  
  console.log(dashboardContext.geracao);

  //Gerar Média Kw
  const totalW = dashboardContext.unidades.map((value) => {
    return parseInt(value.modelo);
  });
  const averageSum = totalW.reduce((a, b) => a + b, 0);

  //Contagem Unidades Ativas
  const countUnidadesAtivas = dashboardContext.unidades.filter((value) => {
    if (value.ativo) {
      return true;
    } else {
      return false;
    }
  });

  //Contagem Unidades Inativas
  const countUnidadesInativas = dashboardContext.unidades.filter((value) => {
    if (value.ativo) {
      return false;
    } else {
      return true;
    }
  });

  //Informações Gráfico 
  const [energiaMeses, setEnergiaMeses] = useState();
  console.log(energiaMeses)

  useEffect(() => {

    const jan = handleGraphicData(dashboardContext.geracao, '01')
    const fev = handleGraphicData(dashboardContext.geracao, '02')
    const mar = handleGraphicData(dashboardContext.geracao, '03')
    const abr = handleGraphicData(dashboardContext.geracao, '04')
    const mai = handleGraphicData(dashboardContext.geracao, '05')
    const jun = handleGraphicData(dashboardContext.geracao, '06')
    const jul = handleGraphicData(dashboardContext.geracao, '07')
    const ago = handleGraphicData(dashboardContext.geracao, '08')
    const set = handleGraphicData(dashboardContext.geracao, '09')
    const out = handleGraphicData(dashboardContext.geracao, '10')
    const nov = handleGraphicData(dashboardContext.geracao, '11')
    const dez = handleGraphicData(dashboardContext.geracao, '12')

    setEnergiaMeses([jan,fev,mar,abr,mai,jun,jul,ago,set,out,nov,dez]) 

    
  },[])


  return (
    <>
      <PageDiv>
        <PageTitle>Dashboard</PageTitle>
        <div
          style={{
            display: "flex",
            gap: "7px",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
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
          kw={true}
            title={"Média de Energia"}
            data={averageSum / totalW.length}
          />
        </div>

          
          <Chart
          labels={['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov', 'Dez']}
          dataServer={energiaMeses}
          />
        
      </PageDiv>

    </>
  );
};

export default Dashboard;
