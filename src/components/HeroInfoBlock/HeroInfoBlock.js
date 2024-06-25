import "./HeroInfoBlock.scss";

import { useEffect } from "react";
import axios from "axios";

const HeroInfoBlock = ({ characters, randomHero }) => {
  console.log("randomHero", randomHero);
  return (
    <div className="HeroInfoBlock">
      <div className="HeroInfoBlock__info">
        {randomHero.map((el) => {
          return (
            <>
              <div className="HeroInfoBlock__image">
                <img
                  src={`${el?.thumbnail?.path}.${el?.thumbnail?.extension}`}
                />
              </div>
              <div className="HeroInfoBlock__title">{el?.name}</div>
              <div className="HeroInfoBlock__description">
                {el?.description}
              </div>
            </>
          );
        })}
        <div className="HeroInfoBlock__btn-wrapper">
          <button>HOME PAGE</button>
          <button>WIKI</button>
        </div>
      </div>
    </div>
  );
};
export default HeroInfoBlock;
