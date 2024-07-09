import HeroInfo from "../HeroInfo/HeroInfo";
import HeroList from "../HeroList/HeroList";
import Header from "../Header/Header";
import HeroListItemInfo from "../HeroListItemInfo/HeroListItemInfo";

import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      {" "}
      <Header />
      <div className="MainPage">
        <HeroInfo />
        <div className="MainPage__wrapper">
          <HeroList />
          <HeroListItemInfo />
        </div>
      </div>
    </>
  );
};
export default MainPage;
