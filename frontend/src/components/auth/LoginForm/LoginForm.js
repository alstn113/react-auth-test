import useStyles from "./styles";

import AuthForm from "../AuthForm";

const LoginForm = () => {
  const classes = useStyles();

  return <AuthForm type="login" />;
};
export default LoginForm;
