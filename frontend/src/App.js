import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Query from "./components/Query";

const App = () => {
  return (
    <>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Counter} path="/counter" />
        <Route component={Query} path="/query" />
      </Switch>
    </>
  );
};

export default App;
