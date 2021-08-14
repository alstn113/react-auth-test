import useStyles from "./styles";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { ToastContainer, toast } from "react-toastify";

import { changeField, initializeForm, register } from "../../../modules/auth";
import * as api from "../../../lib/auth";
import AuthForm from "../AuthForm";

const RegisterForm = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const { mutateAsync, isLoading } = useMutation(api.register);

  const { form, auth, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if ([username, password, passwordConfirm].includes("")) {
      return toast.error("빈 칸을 모두 입력하세요");
    }
    if (password !== passwordConfirm) {
      dispatch(changeField({ form: "register", key: "password", value: "" }));
      dispatch(changeField({ form: "register", key: "passwordConfirm", value: "" }));
      return toast.error("비밀번호가 일치하지 않습니다");
    }
    try {
      const response = await mutateAsync({ username, password });
      dispatch(register({ auth: response.data }));
      return history.push("/");
    } catch (error) {
      if (error.response.status) {
        dispatch(changeField({ form: "register", key: "username", value: "" }));
        return toast.error("이미 존재하는 이메일입니다");
      }
      return toast.error("회원가입에 실패했습니다");
    }
  };

  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);
  return (
    <>
      <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} isLoading={isLoading} />
      <ToastContainer />
    </>
  );
};
export default RegisterForm;
