import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Counter from "./components/Counter/Counter";
import Query from "./components/Query/Query";
import NotFound from "./components/NotFound/NotFound";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d81b60",
    },
  },
  typography: {
    fontFamily: "Black Han Sans",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={Counter} path="/counter" />
            <Route exact component={Query} path="/query" />
            <Route exact component={NotFound} path="*" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
