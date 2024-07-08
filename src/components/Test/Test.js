import { useEffect, useState } from "react";
import { TestApi } from "../../Api/TestApi";
import "./Test.scss";

const Test = () => {
  const [hero, setHero] = useState([]);
  const { getAllCharactersTEST, load } = TestApi();

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllCharactersTEST();
      setHero(data[0]);
    };
    fetch();
  }, []);

  return (
    <div className="Test__">
      <div className="Test__">
        {load ? "ЗАГРУЗКА" : "ВСЕ ЗАГРУЗИЛОСЬ ОТЛИЧНО"}
      </div>
      <div className="Test__">{hero.name}</div>
    </div>
  );
};

export default Test;
