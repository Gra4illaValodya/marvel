import "./App.scss";

import Test from "./components/Test/Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, ComiscPage, Page404, ComicPage } from "./components/pages";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Test />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/comics" element={<ComiscPage />} />
          <Route path="/comics/:comicId" element={<ComicPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
