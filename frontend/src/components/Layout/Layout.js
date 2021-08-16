import Container from "@material-ui/core/Container";
import NavBar from "./NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <Container>
      <NavBar />
      <div>{children}</div>
    </Container>
  );
}
