import useStyles from "./styles";

import AuthForm from "../AuthForm";

const RegisterForm = () => {
  const classes = useStyles();

  return <AuthForm type="register" />;
};
export default RegisterForm;
