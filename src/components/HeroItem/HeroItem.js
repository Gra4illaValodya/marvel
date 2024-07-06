import "./HeroItem.scss";

const HeroItem = ({ el }) => {
  console.log("@@@", el);
  return (
    <div className="HeroItem">
      <div className="HeroItem__image-wrapper">
        <img
          className="HeroItem__image"
          src={`${el.thumbnail.path}.${el.thumbnail.extension}`}
        />
      </div>
      <div className="HeroItem__name">{el.name}</div>
    </div>
  );
};
export default HeroItem;
