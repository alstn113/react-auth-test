import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import NavBar from "./NavBar/NavBar";

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <Container>
      <NavBar />
      <div>{children}</div>
    </Container>
  );
}
