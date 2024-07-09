import { Link } from "react-router-dom";
import "./ComicsItem.scss";

const ComicsItem = ({ comic, id }) => {
  return (
    <Link to={`/comics/${comic.id}`}>
      <div className="ComicsItem__comic" key={id}>
        <div className="ComicsItem__image">
          <img
            src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
          />
        </div>
        <div className="ComicsItem__title">{comic.title}</div>
      </div>
    </Link>
  );
};
export default ComicsItem;
