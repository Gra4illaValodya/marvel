import "./Comic.scss";
import useMarvelServices from "../../Api/MarvelServices";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Comic = () => {
  const { loading, errorMessage, getOneComic } = useMarvelServices();
  const [comic, setComic] = useState([]);
  const { comicId } = useParams();
  useEffect(() => {
    const fetchComic = async () => {
      const data = await getOneComic(comicId);
      setComic(data);
    };
    fetchComic();
  }, []);
  const spinner = loading ? <Spinner /> : null;
  const error = errorMessage ? <ErrorMessage /> : null;
  const content = !(loading || errorMessage) ? (
    <>
      <div className="Comic__image">
        <img src={`${comic?.thumbnail}`} />
      </div>
      <div className="Comic__description-block">
        <div className="Comic__title">{comic?.title}</div>
        <div className="Comic__description">{comic?.description}</div>
        <div className="Comic__page-count">{comic?.page} Pages</div>
        <div className="Comic__prices">{comic?.prices}$</div>
      </div>
    </>
  ) : null;

  console.log(comic);
  return (
    <div className="Comic">
      {spinner}
      {error}
      {content}
    </div>
  );
};
export default Comic;
