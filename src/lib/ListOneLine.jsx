import styled from "styled-components";

const Container = styled.div`
  height: 5.5rem; // 88px
  display: flex;
  gap: 1rem; // 16px
  padding: 0.75rem 1rem 0.75rem 0; // 12px 16px
`

const LeadingImg = styled.div`
  width: 5.5rem; // 88px
  height: 4rem; // 64px
  background-image: url(https://picsum.photos/100/100);
  background-size: cover;
`

const TextContainer = styled.div`
  height: 4rem; // 64px
  display: flex;
  flex-direction: column; 
  justify-content: center;
  color: #1D1B20;
`
const Headline = styled.p`
  font-weight: 700;
`

const Divider = styled.hr`
  height: 1px;
  color: #79747E;
  margin: 0 1rem;
`

const ListOneLine = () => {
  return (
    <div>
      <Container>
        <LeadingImg />
        <TextContainer>
          <Headline>headline</Headline>
        </TextContainer>
      </Container>
      <Divider></Divider>
    </div>
  );
};

export default ListOneLine;