import { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Carousel from "../Carousel";

const CarouselList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CarouselListEmpty = styled.p`
  box-sizing: border-box;
  width: 100%;
  background: #f39c12;
  padding: 18px;
`;

function CarouselWrapper(props) {
  const { qa_list, order } = props;
  const [items, setItems] = useState(qa_list);

  useEffect(() => {
    if (qa_list.length === 0) return;

    const orderedItems = qa_list.sort((a, b) => {
      if (order.direction === "ASC")
        return a[order.key].localeCompare(b[order.key]);
      return b[order.key].localeCompare(a[order.key]);
    });

    setItems([...orderedItems]);
  }, [order, qa_list]);

  return (
    <CarouselList>
      {!items ||
        (items.length < 1 && (
          <CarouselListEmpty>
            Oh noh! You don't have any Q/A's
          </CarouselListEmpty>
        ))}

      {items.map((item) => (
        <Carousel key={item.uuid} carouselItem={item} />
      ))}
    </CarouselList>
  );
}

const mapStateToProps = ({ qa_list }) => ({
  qa_list,
});

export default connect(mapStateToProps)(CarouselWrapper);
