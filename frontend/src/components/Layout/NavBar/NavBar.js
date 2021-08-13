import useStyles from "./styles";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DehazeSharpIcon from "@material-ui/icons/DehazeSharp";

import { useState } from "react";
import { useHistory, useLocation } from "react-router";

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [state, setState] = useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };

  const menuItems = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Login",
      path: "/login",
    },
    {
      text: "Register",
      path: "/register",
    },
    {
      text: "Counter",
      path: "/counter",
    },
    {
      text: "Query",
      path: "/Query",
    },
  ];

  const list = () => (
    <div className={classes.list} onClick={() => toggleDrawer()}>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} onClick={() => history.push(item.path)} className={location.pathname == item.path ? classes.active : null}>
            <ListItemText>{item.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="h1">REACT AUTH TEST</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => toggleDrawer()}>
            <DehazeSharpIcon />
          </Button>
        </Grid>
      </Grid>
      <Drawer anchor="left" open={state} onClose={() => toggleDrawer()}>
        {list()}
      </Drawer>
    </>
  );
}
