import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthForm from "../AuthForm";
import * as yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loginLoading, loginError, auth } = useSelector(({ auth }) => ({
    loginLoading: auth.loginLoading,
    loginError: auth.loginError,
    auth: auth.auth,
  }));

  const loginSchema = yup.object().shape({
    username: yup.string().min(4).max(15).required(),
    password: yup.string().min(4).max(15).required(),
  });

  const onSubmit = async (e) => {
    console.log("전송");
  };

  return <AuthForm type="login" schema={loginSchema} onSubmit={onSubmit} loading={loginLoading} error={loginError} />;
};
export default LoginForm;
