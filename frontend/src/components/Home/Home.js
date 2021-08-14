import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.page} variant="h2" color="textSecondary" align="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, voluptatem? Amet voluptatum quibusdam eius, debitis obcaecati inventore
        commodi natus libero corporis laborum labore, ea quas ex, non est sed. Ad.
      </Typography>
    </>
  );
};
export default Home;
