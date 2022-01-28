import Menu from "../../components/Menu";
import { PageDiv, PageTitle } from "../../components/PageDiv/style";
import DashboardCard from "../../components/DashCard";

const Dashboard = () => {



    return(
        <>
        <Menu
        selected1={true}
        />

        <PageDiv>
        <PageTitle>Dashboard</PageTitle>

        <DashboardCard
        title={'Total Unidades'}
        data={'15'}
        />

        <DashboardCard
        title={'Unidades Ativas'}
        data={'15'}
        />

        <DashboardCard
        title={'Unidades Inativas'}
        data={'15'}
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