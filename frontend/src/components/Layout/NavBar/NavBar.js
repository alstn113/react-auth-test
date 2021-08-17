import useStyles from "./styles";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DehazeSharpIcon from "@material-ui/icons/DehazeSharp";

import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/actions/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NavBar() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState(false);

  const { user, logoutLoading, logoutError } = useSelector(({ auth }) => ({
    user: auth.user,
    logoutLoading: auth.logoutLoading,
    logoutError: auth.logoutError,
  }));

  const onLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        localStorage.removeItem("user");
        window.location.reload();
      });
  };

  const toggleDrawer = () => {
    setState(!state);
  };

  useEffect(() => {
    if (logoutError) {
      toast.error(logoutError);
    }
  }, [logoutError]);

  const menuItems = [
    {
      text: "Home",
      path: "/",
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
      text: "Sample",
      path: "/Sample",
    },
  ];

  const list = () => (
    <div className={classes.list} onClick={() => toggleDrawer()}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.path)}
            className={location.pathname === item.path ? classes.active : null}
          >
            <ListItemText>{item.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <ToastContainer closeOnClick />
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => toggleDrawer()}>
            <DehazeSharpIcon />
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="h1">REACT AUTH TEST</Typography>
        </Grid>
        <Grid item>
          {!user ? (
            <Button variant="contained" color="primary" onClick={() => history.push("/login")}>
              Login
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={() => onLogout()}>
              {logoutLoading ? "Loading..." : "Logout"}
            </Button>
          )}
        </Grid>
      </Grid>
      <Drawer anchor="left" open={state} onClose={() => toggleDrawer()}>
        {list()}
      </Drawer>
    </>
  );
}
