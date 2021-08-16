import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthForm from "../AuthForm";
import * as yup from "yup";
import { register } from "../../../store/actions/auth";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { registerLoading, registerError, auth } = useSelector(({ auth }) => ({
    registerLoading: auth.registerLoading,
    registerError: auth.registerError,
    auth: auth.auth,
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

  return <AuthForm type="register" schema={registerSchema} onSubmit={onSubmit} loading={registerLoading} error={registerError} />;
};
export default RegisterForm;
