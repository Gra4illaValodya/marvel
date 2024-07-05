import "./RandomHeroInfo.scss";

import { useEffect, useState } from "react";
import { AllHeroes, RandomHeroChangeById } from "../../Api/Services";

const RandomHeroInfo = ({ oneHero }) => {
  return (
    <div className="RandomHeroInfo">
      <div className="RandomHeroInfo__image-wrapper">
        <img
          src={`${oneHero.thumbnail.path}.${oneHero.thumbnail.extension}`}
          className="RandomHeroInfo__image"
        />
      </div>
      <div className="RandomHeroInfo__content">
        <div className="RandomHeroInfo__title">{oneHero.name}</div>
        <div className="RandomHeroInfo__info">
          <div className="RandomHeroInfo__btn-wrapper">
            <button>HOME PAGE</button>
            <button>WIKI</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RandomHeroInfo;
