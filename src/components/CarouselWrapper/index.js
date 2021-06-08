import { connect } from "react-redux";
import styled from "styled-components";
import Carousel from "../Carousel";

const CarouselList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CarouselListEmpty = styled.p`
  width: 100%;
  background: #f39c12;
  padding: 18px;
`;

function CarouselWrapper(props) {
  const { loading, error, qa_list, order } = props;

  return (
    <CarouselList>
      {!qa_list ||
        (qa_list.length < 1 && (
          <CarouselListEmpty>
            Oh noh! You don't have any Q/A's
          </CarouselListEmpty>
        ))}

      {qa_list.map((item) => (
        <Carousel key={item.uuid} carouselItem={item} />
      ))}
    </CarouselList>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(CarouselWrapper);
