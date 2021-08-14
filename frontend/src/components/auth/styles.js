import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(4),
    marginTop: theme.spacing(8),
  },
  form: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    backgroundColor: "white",
  },
  submit: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    height: 60,
  },
}));
