import "./App.scss";
import Header from "./components/Header/Header";
import HeroInfo from "./components/HeroInfo/HeroInfo";
import { AllHeroes, RandomHeroChange } from "./Api/Services";
import { useEffect, useState } from "react";
import Test from "./components/Test/Test";
import MarvelServices from "./Api/MarvelServices";

const App = () => {
  useEffect(() => {
    const API = MarvelServices();
    API.getAllCharacters().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      {/* <Test /> */}
      <Header />
      <div className="App__hero-info">
        <HeroInfo />
      </div>
    </div>
  );
};

export default App;
