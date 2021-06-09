import styled from "styled-components";
import { Col, Container, Row } from "./index";

const Logo = styled.h1`
  font-size: 30px;
  color: #fff;

  span {
    &:nth-of-type(1) {
      color: #fe5f55;
    }

    &:nth-of-type(2) {
      color: #7ae582;
    }
  }
`;

const MainHeader = styled(Row)`
  background: #000;
  margin-bottom: 40px;
`;

export default function Header() {
  return (
    <MainHeader>
      <Container>
        <Col xs={12}>
          <Logo>
            TA<span>Q</span>&<span>A</span>T
          </Logo>
        </Col>
      </Container>
    </MainHeader>
  );
}
