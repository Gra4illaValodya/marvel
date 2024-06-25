import { RandomHeroById } from "../../Api/Services";
import "./HeroInfoChangeBlock.scss";

const HeroInfoChangeBlock = ({ setRandomHero }) => {
  const changeRandomHero = async () => {
    const getId = () => {
      const min = 1009150;
      const max = 1010400;
      const random = Math.floor(Math.random() * (max - min + 1) + min);
      return random;
    };
    const randomID = getId();
    console.log(randomID);

    try {
      const data = await RandomHeroById(randomID);
      setRandomHero(data?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="HeroInfoChangeBlock">
      <div className="HeroInfoChangeBlock__text-block">
        <div className="HeroInfoChangeBlock__">Random character for today!</div>
        <div className="HeroInfoChangeBlock__">Do you want to be better?</div>
        <div className="HeroInfoChangeBlock__">one choose another one</div>
      </div>
      <div className="HeroInfoChangeBlock__btn">
        <button onClick={changeRandomHero}>TRY IT</button>
      </div>
    </div>
  );
};
export default HeroInfoChangeBlock;
