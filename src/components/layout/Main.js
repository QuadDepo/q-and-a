import { Col, Container } from "./index";
import Header from "./Header";

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Col xs={12} sm={12} md={6} lg={6}>
          Adding
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          List
        </Col>
      </Container>
    </>
  );
};

export default Main;
