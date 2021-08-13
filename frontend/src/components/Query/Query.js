import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

import { useQuery } from "react-query";
import * as api from "../../lib/api";

const Query = () => {
  const classes = useStyles();
  const { isError, error, data, isFetching } = useQuery("users", api.getUsers);
  if (isFetching) {
    return <div>loading...</div>;
  }
  if (isError) {
    <div>Error : {error.message}</div>;
  }

  return (
    <Container>
      <Grid container>
        {data.map((user) => (
          <Grid item key={user.id} xs={12} md={6} lg={4}>
            <Paper>{user.name}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Query;
