import useStyles from "./styles";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { ToastContainer, toast } from "react-toastify";

import { changeField, initializeForm, login } from "../../../modules/auth";
import * as api from "../../../lib/auth";
import AuthForm from "../AuthForm";

const LoginForm = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(null);
  const { mutateAsync, isLoading } = useMutation(api.login);

  const { form, auth, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = form;
    if ([username, password].includes("")) {
      return toast.error("빈 칸을 모두 입력하세요");
    }
    try {
      const response = await mutateAsync({ username, password });
      dispatch(login({ auth: response.data }));
      return history.push("/");
    } catch (error) {
      return toast.error("로그인에 실패했습니다");
    }
  };

  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);

  return (
    <>
      <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} isLoading={isLoading} error={error} />
      <ToastContainer />
    </>
  );
};
export default LoginForm;
