import { useEffect } from "react";
import MarvelServices from "../../Api/MarvelServices";
import { RandomHeroChangeById } from "../../Api/Services";
import "./RandomHeroChange.scss";

const RandomHeroChange = ({ setOneHero, id, setLoading, setErrorMessage }) => {
  useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = async () => {
    setLoading(true);
    try {
      const apiHeroes = MarvelServices();
      const data = await apiHeroes.getOneCharacter(id);
      setOneHero(data[0]);
      setLoading(false);
    } catch (error) {
      setErrorMessage(true);
      setLoading(false);
    }
  };
  const changeRandomHero = () => {
    const getId = () => {
      const min = 1009150;
      const max = 1010400;
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const randomID = getId();
    fetchHeroes(randomID);
  };
  // const changeRandomHeroChange = async () => {
  //   const getId = () => {
  //     const min = 1009150;
  //     const max = 1010400;
  //     const random = Math.floor(Math.random() * (max - min + 1) + min);
  //     return random;
  //   };
  //   const randomID = getId();
  //   console.log(randomID);

  //   try {
  //     const data = await RandomHeroChangeById(randomID);
  //     setRandomHeroChange(data?.data?.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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
