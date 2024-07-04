import RandomHeroInfo from "../RandomHeroInfo/RandomHeroInfo";
import RandomHeroChange from "../RandomHeroChange/RandomHeroChange";
import "./HeroInfo.scss";
import { useEffect, useState } from "react";
import MarvelServices from "../../Api/MarvelServices";

const HeroInfo = () => {
  const [oneHero, setOneHero] = useState(null);
  const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const apiHeroes = MarvelServices();
        const data = await apiHeroes.getOneCharacter(id);
        setOneHero(data[0]);
      } catch (error) {
        console.error(`ERROR ERROR ERROR : ${error}`);
      }
    };
    fetchHeroes();
  }, []);
  console.log(oneHero);
  return (
    <div className="HeroInfo">
      {oneHero ? <RandomHeroInfo oneHero={oneHero} /> : <div>...LOADING</div>}
      <RandomHeroChange setOneHero={setOneHero} id={id} />
    </div>
  );
};
export default HeroInfo;
