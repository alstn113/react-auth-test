import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Counter from "./components/Counter/Counter";
import Query from "./components/Query/Query";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/auth/LoginForm/LoginForm";
import Register from "./components/auth/RegisterForm/RegisterForm";

const theme = createTheme({
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
            <Route exact component={Login} path="/login" />
            <Route exact component={Register} path="/register" />
            <Route exact component={NotFound} path="*" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
