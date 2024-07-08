import "./App.scss";
import Header from "./components/Header/Header";
import Test from "./components/Test/Test";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainPage, ComiscPage } from "./components/pages";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Test />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/comics">
            <ComiscPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
