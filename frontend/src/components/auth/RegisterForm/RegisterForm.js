import useStyles from "./styles";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";

import { changeField, initializeForm } from "../../../modules/auth";
import * as api from "../../../lib/auth";
import AuthForm from "../AuthForm";

const RegisterForm = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(null);
  const { mutateAsync } = useMutation(api.register);

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
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
    const { username, password } = form;
    await mutateAsync({ username, password });
    history.push("/");
  };

  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);
  return <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} />;
};
export default RegisterForm;
