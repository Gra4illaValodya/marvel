import Header from "../Header/Header";
import "./IsPage404.scss";

const IsPage404 = () => {
  return (
    <div className="IsPage404">
      <Header />
      <div className="IsPage404__404text"> This Page is does not exist</div>
      <div className="IsPage404__404">404</div>
    </div>
  );
};
export default IsPage404;
