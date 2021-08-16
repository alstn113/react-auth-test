// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { changeField, initializeForm } from "../../../store/reducers/auth";
// import AuthForm from "../AuthForm";
// import * as yup from "yup";

// const RegisterForm = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const { form, auth } = useSelector(({ auth }) => ({
//     form: auth.register,
//     auth: auth.auth,
//   }));

//   const registerSchema = yup.object().shape({
//     username: yup.string().min(4).max(15).required(),
//     password: yup.string().min(4).max(15).required(),
//     passwordConfirm: yup.string().oneOf([yup.ref("password"), null]),
//   });

//   const onChange = (e) => {
//     const { value, name } = e.target;
//     dispatch(
//       changeField({
//         form: "register",
//         key: name,
//         value,
//       })
//     );
//   };

//   const onSubmit = async (e) => {
//     try {
//       return history.push("/");
//     } catch (error) {
//       if (error.response.status) {
//         dispatch(changeField({ form: "register", key: "username", value: "" }));
//         return console.error("이미 존재하는 이메일입니다");
//       }
//       return console.error("회원가입에 실패했습니다");
//     }
//   };

//   useEffect(() => {
//     dispatch(initializeForm());
//   }, [dispatch]);
//   return <AuthForm type="register" form={form} schema={registerSchema} onChange={onChange} onSubmit={onSubmit} />;
// };
// export default RegisterForm;
