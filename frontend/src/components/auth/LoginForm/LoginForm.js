import useStyles from "./styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("필수 항목입니다"),
  password: yup.number().required("필수 항목입니다"),
});

const LoginForm = () => {
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="username"
            variant="outlined"
            error={!!errors.username}
            helperText={errors.username ? errors.username?.message : ""}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password ? errors.password?.message : ""}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};
export default LoginForm;
