import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  font-size: 21px;
  color: gray;
`;

const index: React.FC = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default index;
