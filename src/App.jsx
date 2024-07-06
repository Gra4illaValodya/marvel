import "./App.scss";
import Header from "./components/Header/Header";
import HeroInfo from "./components/HeroInfo/HeroInfo";
import { AllHeroes, RandomHeroChange } from "./Api/Services";
import { useEffect, useState } from "react";
import Test from "./components/Test/Test";
import MarvelServices from "./Api/MarvelServices";
import HeroList from "./components/HeroList/HeroList";

const App = () => {
  return (
    <div className="App">
      {/* <Test /> */}
      <Header />
      <div className="App__hero-info">
        <HeroInfo />
        <div className="App__hero-list-wrapper">
          <HeroList />
        </div>
      </div>
    </div>
  );
};

export default App;
