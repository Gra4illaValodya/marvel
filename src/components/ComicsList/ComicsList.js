import "./ComicsList.scss";
import useMarvelServices from "../../Api/MarvelServices";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useEffect, useState } from "react";
import ComicsItem from "../ComicsItem/ComicsItem";

const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const { loading, errorMessage, getAllComics } = useMarvelServices();
  useEffect(() => {
    const fetchComic = async () => {
      const ComicsList = await getAllComics();
      setComics(ComicsList);
    };
    fetchComic();
  }, []);
  console.log(comics);

  const spinner = loading ? <Spinner /> : null;
  const error = errorMessage ? <ErrorMessage /> : null;
  const content = !loading
    ? comics.map((comic, id) => {
        return <ComicsItem comic={comic} id={id} />;
      })
    : null;

  return (
    <div className="ComicsList">
      <div className="Comics__wrapper">
        {spinner}
        {error}
        {content}
      </div>
    </div>
  );
};
export default ComicsList;
