import "./App.scss";
import Header from "./components/Header/Header";
import HeroInfo from "./components/HeroInfo/HeroInfo";
import { AllHeroes, RandomHero } from "./Api/Services";
import { useEffect, useState } from "react";
import Test from "./components/Test/Test";
import MarvelServices from "./Api/MarvelServices";
function App() {
  const [characters, setCharacters] = useState([]);
  const [randomHero, setRandomHero] = useState([]);
  const marvelService = new MarvelServices();

  marvelService.getAllCharacters().then((res) => console.log(res));
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await AllHeroes();
  //       setCharacters(data.results);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await RandomHero();
  //       setRandomHero(data.data.results);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      {/* <Test /> */}
      <Header />
      <div className="App__hero-info">
        <HeroInfo
          characters={characters}
          randomHero={randomHero}
          setRandomHero={setRandomHero}
        />
      </div>
    </div>
  );
}

export default App;
