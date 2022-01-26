import Menu from "../../components/Menu";
import { PageDiv, PageTitle } from "../../components/PageDiv/style";
import DashboardCard from "../../components/DashCard";

const Dashboard = () => {



    return(
        <>
        <Menu/>

        <PageDiv>
        <PageTitle>Dashboard</PageTitle>

        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        </PageDiv>


        </>
    )

}

export default Dashboard;