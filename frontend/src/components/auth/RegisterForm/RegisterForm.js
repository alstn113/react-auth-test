import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import AuthForm from "../AuthForm";
import * as yup from "yup";
import { register } from "../../../store/actions/auth";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { registerLoading, registerError, user } = useSelector(({ auth }) => ({
    registerLoading: auth.registerLoading,
    registerError: auth.registerError,
    user: auth.user,
  }));

  const registerSchema = yup.object().shape({
    username: yup.string().required("필수 항목입니다.").min(4, "4자리 이상으로 입력해주세요.").max(15, "15자리 이하로 입력해주세요"),
    password: yup.string().required("필수 항목입니다").min(4, "4자리 이상으로 입력해주세요.").max(15, "15자리 이하로 입력해주세요"),
    passwordConfirm: yup
      .string()
      .required("필수 항목입니다")
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다"),
  });

  const onSubmit = async (e) => {
    const { username, password } = e;
    dispatch(register({ username, password }));
  };

  useEffect(() => {
    if (user) {
      history.push("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [history, user]);

  return <AuthForm type="register" schema={registerSchema} onSubmit={onSubmit} loading={registerLoading} error={registerError} />;
};
export default RegisterForm;
