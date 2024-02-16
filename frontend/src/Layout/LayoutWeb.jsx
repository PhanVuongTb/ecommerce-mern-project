import { Outlet } from "react-router-dom";
import HeaderPage from "../components/HeaderPage";
import FooterPage from "./../components/FooterPage";
import { Container } from "react-bootstrap";

const LayoutWeb = () => {
  return (
    <>
      <header>
        <HeaderPage />
      </header>
      <main className="my-3 main-layout">
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer>
        <FooterPage />
      </footer>
    </>
  );
};

export default LayoutWeb;
