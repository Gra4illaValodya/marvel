import "./HeroList.scss";
import HeroItem from "../HeroItem/HeroItem";
import { useState, useEffect } from "react";
import useMarvelServices from "../../Api/MarvelServices";

const HeroList = () => {
  const [listItemHero, setListItemHero] = useState([]);
  const [loadedNewHero, setLoadedNewHero] = useState(true);

  const [offset, setOffset] = useState(210);
  const { loading, errorMessage, getAllCharacters } = useMarvelServices();

  useEffect(() => {
    getAllCharacters(offset).then((data) => {
      console.log("-_____---___--", data);
      setListItemHero(data);
      setLoadedNewHero(false);
    });
  }, []);

  const getNewHero = () => {
    setLoadedNewHero(true);
    const newOffset = offset + 9;

    getAllCharacters(newOffset).then((data) => {
      setListItemHero((prevHero) => [...prevHero, ...data]);
      setLoadedNewHero(false);
    });
    setOffset(newOffset);
  };
  return (
    <div className="HeroList">
      <div className="HeroList__item">
        {listItemHero.map((el, index) => {
          return <HeroItem key={index} el={el} />;
        })}
      </div>

      <button className="HeroList__show-more" onClick={getNewHero}>
        {" "}
        SHOW MORE
      </button>
      <div className="HeroList__q">
        {" "}
        {loadedNewHero ? <p>ЗАГРУЗКА</p> : "ЗАГРУЖЕНО"}
      </div>
    </div>
  );
};
export default HeroList;
