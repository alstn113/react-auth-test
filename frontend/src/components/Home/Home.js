import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import AccessAlarmOutlinedIcon from "@material-ui/icons/AccessAlarmOutlined";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
      </Grid>
      <h1>여기는 홈</h1>
      <Typography variant="h1" color="textSecondary" align="center">
        가나다
      </Typography>
      <Button className={classes.btn} variant="contained" color="primary" startIcon={<AccessAlarmOutlinedIcon />}>
        ABdsfsdfsd
      </Button>
      <AccessAlarmOutlinedIcon fontSize="large" />
      <form noValidate>
        <TextField label="아이디" color="primary" multiline rows={4} />
      </form>
    </Container>
  );
};
export default Home;
