import { useEffect } from "react";
import useMarvelServices from "../../Api/MarvelServices";
import "./RandomHeroChange.scss";

const RandomHeroChange = ({ setOneHero, id, errorMessage, loading }) => {
  const { getOneCharacter } = useMarvelServices();

  useEffect(() => {
    const fetchInitialHero = async () => {
      const newHero = await getOneCharacter(id);
      setOneHero(newHero);
    };
    fetchInitialHero();
  }, []);

  const fetchHeroById = async (heroId) => {
    const newHero = await getOneCharacter(heroId);
    return newHero;
  };

  const changeRandomHero = async () => {
    console.log("####", loading);
    const getId = () => {
      const min = 1009150;
      const max = 1010400;
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const randomID = getId();
    const newHero = await fetchHeroById(randomID);
    setOneHero(newHero);
    console.log("####", loading);
  };

  return (
    <div className="RandomHeroChange">
      <div className="RandomHeroChange__text-block">
        <div className="RandomHeroChange__">Random character for today!</div>
        <div className="RandomHeroChange__">Do you want to be better?</div>
        <div className="RandomHeroChange__">one choose another one</div>
      </div>
      <div className="RandomHeroChange__btn">
        <button onClick={changeRandomHero}>TRY IT</button>
      </div>
    </div>
  );
};

export default RandomHeroChange;
