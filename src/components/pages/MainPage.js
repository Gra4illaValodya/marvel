import HeroInfo from "../HeroInfo/HeroInfo";
import HeroList from "../HeroList/HeroList";
import Header from "../Header/Header";
const MainPage = () => {
  return (
    <>
      {" "}
      <Header />
      <div className="App__hero-info">
        <HeroInfo />
        <div className="App__hero-list-wrapper">
          <HeroList />
        </div>
      </div>
    </>
  );
};
export default MainPage;
