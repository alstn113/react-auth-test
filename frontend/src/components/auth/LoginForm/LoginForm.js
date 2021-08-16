import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthForm from "../AuthForm";
import * as yup from "yup";
import { login } from "../../../store/actions/auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loginLoading, loginError, auth } = useSelector(({ auth }) => ({
    loginLoading: auth.loginLoading,
    loginError: auth.loginError,
    auth: auth.auth,
  }));

  const loginSchema = yup.object().shape({
    username: yup.string().required("필수 항목입니다.").min(4, "4자리 이상으로 입력해주세요.").max(15, "15자리 이하로 입력해주세요"),
    password: yup.string().required("필수 항목입니다").min(4, "4자리 이상으로 입력해주세요.").max(15, "15자리 이하로 입력해주세요"),
  });

  const onSubmit = async (e) => {
    const { username, password } = e;
    dispatch(login({ username, password }));
  };

  return <AuthForm type="login" schema={loginSchema} onSubmit={onSubmit} loading={loginLoading} error={loginError} />;
};
export default LoginForm;
