import "./Comics.scss";
import useMarvelServices from "../../Api/MarvelServices";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useEffect, useState } from "react";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const { loading, errorMessage, getAllComics } = useMarvelServices();
  useEffect(() => {
    const fetchComic = async () => {
      const comics = await getAllComics();
      setComics(comics);
    };
    fetchComic();
  }, []);
  console.log(comics);
  const spinner = loading ? <Spinner /> : null;
  const error = errorMessage ? <ErrorMessage /> : null;
  const content = !loading
    ? comics.map((comic, id) => {
        return (
          <div className="Comics__comic" key={id}>
            <div className="Comics__image">
              <img
                src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
              />
            </div>
            <div className="Comics__title">{comic.title}</div>
          </div>
        );
      })
    : null;

  return (
    <div className="Comics">
      <div className="Comics__wrapper">
        {spinner}
        {error}
        {content}
      </div>
    </div>
  );
};
export default Comics;
