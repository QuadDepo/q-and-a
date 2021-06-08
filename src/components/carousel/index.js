import { useState, useRef, useLayoutEffect } from "react";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CarouselHeader = styled.div`
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 8px 8px 0 0;
  background: #b8b8b8;
`;

const CarouselBody = styled.div`
  width: 100%;
  border-radius: 0 0 8px 8px;
  background: #eee;
  max-height: ${(props) => (props.isOpen ? "auto" : "0px")};
  overflow: hidden;
`;

function Carousel({ carouselItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const innerBody = useRef(null);
  const { uuid, question, answer } = carouselItem;

  const toggleCarousel = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    console.log(innerBody.current.scrollHeight);
  }, [isOpen]);

  return (
    <CarouselWrapper>
      <CarouselHeader onClick={toggleCarousel}>{question}</CarouselHeader>
      <CarouselBody isOpen={isOpen} ref={innerBody}>
        {answer}
      </CarouselBody>
    </CarouselWrapper>
  );
}

export default Carousel;
