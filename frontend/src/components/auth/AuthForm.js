import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import { Link } from "react-router-dom";

const textMap = {
  login: "Sign In",
  register: "Sign Up",
};

const AuthForm = ({ type, form, onChange, onSubmit, isLoading, error }) => {
  const classes = useStyles();
  const text = textMap[type];

  return (
    <Container maxWidth="xs">
      <Paper elevation={8}>
        <Typography className={classes.title} variant="h3" align="center">
          - {text} -
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="email"
            autoFocus
            onChange={onChange}
            value={form.username}
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
            onChange={onChange}
            value={form.password}
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
              onChange={onChange}
              value={form.passwordConfirm}
            />
          )}
          <Button className={classes.submit} type="submit" fullWidth variant="contained" color="primary">
            {isLoading ? "Loading..." : text}
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
