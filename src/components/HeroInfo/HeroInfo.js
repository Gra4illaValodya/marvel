import RandomHeroInfo from "../RandomHeroInfo/RandomHeroInfo";
import RandomHeroChange from "../RandomHeroChange/RandomHeroChange";
import "./HeroInfo.scss";
import { useEffect, useState } from "react";
import MarvelServices from "../../Api/MarvelServices";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const HeroInfo = () => {
  const [oneHero, setOneHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const apiHeroes = MarvelServices();
        const data = await apiHeroes.getOneCharacter(id);
        setOneHero(data[0]);

        setLoading(false);
      } catch (error) {
        console.error(`ERROR ERROR ERROR : ${error}`);
        setErrorMessage(true);
        setLoading(false);
      }
    };
    fetchHeroes();
  }, []);
  console.log(oneHero);
  const spinner = loading ? <Spinner /> : null;
  const error = errorMessage ? <ErrorMessage /> : null;
  const content = !(loading || errorMessage) ? (
    <RandomHeroInfo oneHero={oneHero} id={id} setLoading={setLoading} />
  ) : null;

  return (
    <div className="HeroInfo">
      {spinner}
      {error}
      {content}
      <RandomHeroChange
        setOneHero={setOneHero}
        id={id}
        setLoading={setLoading}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
};
export default HeroInfo;
