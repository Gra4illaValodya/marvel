import RandomHeroInfo from "../RandomHeroInfo/RandomHeroInfo";
import RandomHeroChange from "../RandomHeroChange/RandomHeroChange";
import "./HeroInfo.scss";
import { useEffect, useState } from "react";
import useMarvelServices from "../../Api/MarvelServices";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useHttp } from "../../hooks/http.hooks";

const HeroInfo = () => {
  const [oneHero, setOneHero] = useState([]);
  const { loading, errorMessage, getOneCharacter } = useMarvelServices();
  const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

  useEffect(() => {
    const fetch = async () => {
      const data = await getOneCharacter(id);
      console.log("_____-", data);
      setOneHero(data);
    };
    fetch();
  }, []);
  console.log(oneHero);
  const spinner = loading ? <Spinner /> : null;
  const error = errorMessage ? <ErrorMessage /> : null;
  const content = !(loading || errorMessage) ? (
    <RandomHeroInfo oneHero={oneHero} id={id} />
  ) : null;

  return (
    <div className="HeroInfo">
      {spinner}
      {error}
      {content}
      <RandomHeroChange setOneHero={setOneHero} id={id} />
    </div>
  );
};
export default HeroInfo;
