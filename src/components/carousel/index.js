import { useState, useRef, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import ContentEditable from "react-contenteditable";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + & {
    margin-top: 20px;
  }
`;

const CarouselHeader = styled.div`
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: ${(props) => (props.isOpen ? "8px 8px 0 0" : "8px")};
  background: #bdc3c7;
`;

const CarouselBody = styled.div`
  width: 100%;
  border-radius: 0 0 8px 8px;
  background: #eee;
  max-height: ${(props) => (props.isOpen ? "auto" : "0px")};
  overflow: hidden;
`;

const CarouselContent = styled.p`
  font-size: 16px;
  margin: 16px;
  outline: none;
  border-radius: 8px;
  background: #fff;
  padding: ${(props) => (!props.disabled ? "16px" : 0)};
  border: ${(props) => (!props.disabled ? "1px solid #b8b8b8" : "none")};
`;

const CarouselFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px;
  margin: 0 20px;
  border-top: 1px solid #b8b8b8;
`;

const CaraouselTitle = styled(ContentEditable)`
  outline: none;
  border-radius: 8px;
  background: ${(props) => (!props.disabled ? "#fff" : "transparent")};
  padding: ${(props) => (!props.disabled ? "16px" : 0)};
  border: ${(props) => (!props.disabled ? "1px solid #b8b8b8" : "none")};
`;

const CarouselButton = styled.button`
  border: none;
  color: white;
  padding: 7px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
`;

const CarouselButtonPrimary = styled(CarouselButton)`
  background-color: #3498db;
`;
const CarouselButtonSecondary = styled(CarouselButton)`
  color: #3498db;
`;

function Carousel({ carouselItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [Q_and_A, setQ_and_A] = useState(carouselItem);
  const { uuid, question, answer } = Q_and_A;

  const dispatch = useDispatch();

  // Create refs
  const innerBody = useRef(null);
  const questionEditor = useRef(null);

  const toggleCarousel = () => {
    // Ignore toggle when edit mode is active
    if (isEdit) return;
    setIsOpen(!isOpen);
  };

  const toggleEdit = () => {
    // If cancel button is pressed restore store state
    if (isEdit) {
      setQ_and_A({ ...carouselItem });
    }

    setIsEdit(!isEdit);
  };

  const onContentChange = ({ target }, key) => {
    // Update state with given key
    const html = target.value;
    setQ_and_A({ ...Q_and_A, [key]: html });
  };

  const deleteCarousel = () => {
    dispatch({
      type: "DELETE_QA_REQUEST",
      payload: uuid,
    });
  };

  const saveCarousel = () => {
    dispatch({
      type: "EDIT_QA_REQUEST",
      payload: Q_and_A,
    });

    setIsEdit(false);
  };

  useLayoutEffect(() => {
    console.log(innerBody.current.scrollHeight);
  }, [isOpen]);

  return (
    <CarouselWrapper>
      <CarouselHeader isOpen={isOpen} onClick={toggleCarousel}>
        <CaraouselTitle
          innerRef={questionEditor}
          tagName="p"
          html={question}
          disabled={!isEdit}
          onChange={(e) => onContentChange(e, "question")}
        ></CaraouselTitle>
      </CarouselHeader>
      <CarouselBody isOpen={isOpen} ref={innerBody}>
        <CarouselContent
          suppressContentEditableWarning={true}
          contentEditable={isEdit}
        >
          {answer}
        </CarouselContent>
        {!isEdit && (
          <CarouselFooter>
            <CarouselButtonSecondary onClick={deleteCarousel}>
              Delete
            </CarouselButtonSecondary>
            <CarouselButtonPrimary onClick={toggleEdit}>
              Edit
            </CarouselButtonPrimary>
          </CarouselFooter>
        )}

        {isEdit && (
          <CarouselFooter>
            <CarouselButtonSecondary onClick={toggleEdit}>
              Cancel
            </CarouselButtonSecondary>
            <CarouselButtonPrimary onClick={saveCarousel}>
              Save
            </CarouselButtonPrimary>
          </CarouselFooter>
        )}
      </CarouselBody>
    </CarouselWrapper>
  );
}

export default Carousel;
