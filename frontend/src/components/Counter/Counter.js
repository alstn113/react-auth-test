import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increaseByValue } from "../../store/reducers/counter";

import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Counter = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { number } = useSelector(({ counter }) => ({ number: counter.number }));
  const onIncreaseByValue = useCallback((value) => dispatch(increaseByValue(value)), [dispatch]);

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="h1" gutterBottom>
            {number}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Button className={classes.btn} variant="contained" color="secondary" onClick={() => onIncreaseByValue(-5)}>
            -5
          </Button>
          <Button className={classes.btn} variant="contained" color="secondary" onClick={() => onIncreaseByValue(-1)}>
            -1
          </Button>
          <Button className={classes.btn} variant="contained" color="secondary" onClick={() => onIncreaseByValue(+1)}>
            +1
          </Button>
          <Button className={classes.btn} variant="contained" color="secondary" onClick={() => onIncreaseByValue(+5)}>
            +5
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Button className={classes.btn} variant="contained" color="secondary" onClick={() => toast.success("Wow so easy!")}>
            Toast Button
          </Button>
          <ToastContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(Counter);
