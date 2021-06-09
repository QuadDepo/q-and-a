import { useDispatch } from "react-redux";
import { Col, Container } from "./index";
import { Title } from "../Typography";
import Header from "./Header";
import QAForm from "../QAForm";
import CarouselWrapper from "../CarouselWrapper";
import Tooltip from "../Tooltip";

const Main = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Container>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Tooltip title="Here you can add new Queston and answers">
            <Title>Add Q/A</Title>
          </Tooltip>
          <QAForm
            onSubmit={(form) =>
              dispatch({
                type: "ADD_QA_REQUEST",
                payload: form,
              })
            }
          ></QAForm>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Title>Q/A's</Title>
          <CarouselWrapper />
        </Col>
      </Container>
    </>
  );
};

export default Main;
