import HeroInfoBlock from "../HeroInfoBlock/HeroInfoBlock";
import HeroInfoChangeBlock from "../HeroInfoChangeBlock/HeroInfoChangeBlock";
import "./HeroInfo.scss";

const HeroInfo = ({ characters, randomHero, setRandomHero }) => {
  return (
    <div className="HeroInfo">
      <HeroInfoBlock randomHero={randomHero} />
      <HeroInfoChangeBlock setRandomHero={setRandomHero} />
    </div>
  );
};
export default HeroInfo;
