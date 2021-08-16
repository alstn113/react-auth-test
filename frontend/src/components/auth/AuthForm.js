import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const textMap = {
  login: "Sign In",
  register: "Sign Up",
};

const AuthForm = ({ type, schema, onSubmit, loading, error }) => {
  const classes = useStyles();
  const text = textMap[type];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container maxWidth="xs">
      <Paper elevation={8}>
        <Typography className={classes.title} variant="h3" align="center">
          - {text} -
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="username"
            label="Username"
            type="text"
            id="username"
            autoFocus
            {...register("username")}
            error={errors.username ? true : false}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            {...register("password")}
            error={errors.password ? true : false}
          />
          {type === "register" && (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="passwordConfirm"
              label="passwordConfirm"
              type="password"
              id="passwordConfirm"
              autoComplete="new-password"
              {...register("passwordConfirm")}
              error={errors.passwordConfirm ? true : false}
            />
          )}
          <Button className={classes.submit} type="submit" fullWidth variant="contained" color="primary">
            {loading ? "Loading..." : text}
          </Button>
          {error}
          <Grid container justifyContent="center">
            <Grid item>
              <Typography>{type === "login" ? <Link to="/register">Sign Up?</Link> : <Link to="/login">Sign In?</Link>}</Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AuthForm;
