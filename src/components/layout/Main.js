import { Col, Container } from "./index";
import { Title } from "../Typography";
import Header from "./Header";
import QAForm from "../QAForm";
import Carousel from "../Carousel";

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Title>Add Q/A</Title>
          <QAForm action="add"></QAForm>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Title>Q/A's</Title>
          <Carousel />
        </Col>
      </Container>
    </>
  );
};

export default Main;
