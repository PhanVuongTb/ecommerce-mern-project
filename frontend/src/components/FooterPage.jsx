import { Col, Container, Row } from "react-bootstrap";

const FooterPage = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col className="text-center">
              <span>Copyright &copy; Techinfo YT</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default FooterPage;
