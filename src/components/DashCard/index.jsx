import { DashCardDiv } from "./style"


const DashboardCard = ({title, data}) => {

    return(
    <>
        <DashCardDiv>
            <h3>{title}</h3>

            <p>{data}</p>

        </DashCardDiv>

    </>

    )


}

export default DashboardCard;