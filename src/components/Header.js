import { Header, HeaderH1, HeaderH2 } from "../css/Header.styled";

const HeaderBanner = () => {
  return (
    <Header>
      <HeaderH1>Abdelbar</HeaderH1>
      <HeaderH2>{`{CN}`} Cohort 38</HeaderH2>
    </Header>
  );
};

export default HeaderBanner;