import Menu from "../../components/Menu";
import { PageDiv, PageTitle } from "../../components/PageDiv/style";
import DashboardCard from "../../components/DashCard";
import { useContext, useState } from "react";
import {UnidadeConsumidoraContext} from '../../contexts/UnidadeConsumidora/index.js'


const Dashboard = () => {

    const dashboardContext = useContext(UnidadeConsumidoraContext);

    const countUnidadesAtivas = dashboardContext.unidades.filter((value) => {
       
        if(value.ativo){
            return true;
        } else {
            return false;
        }
    });

    const countUnidadesInativas = dashboardContext.unidades.filter((value) => {
       
        if(value.ativo){
            return false;
        } else {
            return true;
        }
    });

    return(
        <>
        <Menu
        selected1={true}
        />

        <PageDiv>
        <PageTitle>Dashboard</PageTitle>

        <DashboardCard
        title={'Total Unidades'}
        data={dashboardContext.unidades.length}
        />

        <DashboardCard
        title={'Unidades Ativas'}
        data={countUnidadesAtivas.length}
        />

        <DashboardCard
        title={'Unidades Inativas'}
        data={countUnidadesInativas.length}
        />

        <DashboardCard
        title={'Média de Energia'}
        data={'15'}
        />  
        


        </PageDiv>


        </>
    )

}

export default Dashboard;