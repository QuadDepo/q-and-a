import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Col, Container } from "./index";
import { Title } from "../Typography";
import Header from "./Header";
import QAForm from "../QAForm";
import CarouselWrapper from "../CarouselWrapper";
import Tooltip from "../Tooltip";

const SortingSelect = styled.select`
  padding: 8px 16px 8px 8px;
`;

const Main = () => {
  const sortingOptions = [
    {
      key: "question",
      direction: "ASC",
      label: "Alphabetical Asc",
    },
    {
      key: "question",
      direction: "DESC",
      label: "Alphabetical Desc",
    },
  ];

  const [order, setOrder] = useState(sortingOptions[0]);
  const dispatch = useDispatch();

  const onOrderChanged = ({ target }) => {
    const { value } = target;
    const [key, direction] = value.split("-");

    const sortingOption = sortingOptions.find(
      (item) => item.direction === direction && item.key === key
    );

    setOrder(sortingOption);
  };

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
          <SortingSelect onChange={onOrderChanged}>
            {sortingOptions.map(({ key, direction, label }) => (
              <option value={`${key}-${direction}`}>{label}</option>
            ))}
          </SortingSelect>
          <CarouselWrapper order={order} />
        </Col>
      </Container>
    </>
  );
};

export default Main;
