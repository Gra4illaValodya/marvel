import "./ComicsItem.scss";

const ComicsItem = ({ comic, id }) => {
  return (
    <div className="ComicsItem__comic" key={id}>
      <div className="ComicsItem__image">
        <img src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`} />
      </div>
      <div className="ComicsItem__title">{comic.title}</div>
    </div>
  );
};
export default ComicsItem;
