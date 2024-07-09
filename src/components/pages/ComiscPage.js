import ComicsList from "../ComicsList/ComicsList";
import Header from "../Header/Header";

const ComiscPage = () => {
  return (
    <>
      <Header />
      <div className="ComicsList">
        <ComicsList />
      </div>
    </>
  );
};
export default ComiscPage;
