import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSample } from "../../store/actions/sample";

import useStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const Sample = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { sample, loading, error } = useSelector(({ sample }) => ({
    sample: sample.sample,
    loading: sample.loading,
    error: sample.error,
  }));

  useEffect(() => {
    dispatch(getSample());
  }, [dispatch]);

  return (
    <Container>
      <Typography className={classes.Typography} variant="h1" color="primary" align="center">
        SAMPLE
      </Typography>
      {error ? (
        <Typography className={classes.Typography} variant="h1" align="center">
          Error...
        </Typography>
      ) : loading ? (
        <Typography className={classes.Typography} variant="h1" align="center">
          Loading...
        </Typography>
      ) : (
        sample?.map((user) => (
          <Paper className={classes.paper} elevation={8} key={user.id}>
            <Typography>{user.name}</Typography>
            <Typography>{user.username}</Typography>
            <Typography>{user.email}</Typography>
          </Paper>
        ))
      )}
    </Container>
  );
};

export default React.memo(Sample);
