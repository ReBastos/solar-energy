import { DashCardDiv } from "./style";

const DashboardCard = ({ title, data, kw }) => {
  if (kw) {
    return (
      <>
        <DashCardDiv>
          <h3>{title}</h3>

          <p>{data}kw</p>
        </DashCardDiv>
      </>
    );
  } else {
    return (
      <>
        <DashCardDiv>
          <h3>{title}</h3>

          <p>{data}</p>
        </DashCardDiv>
      </>
    );
  }
};

export default DashboardCard;
