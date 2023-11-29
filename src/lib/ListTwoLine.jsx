import styled from "styled-components";

const Container = styled.div`
  height: 4.5rem; // 72px
  display: flex;
  gap: 1rem; // 16px
  padding: 0.5rem 1rem; // 8px 16px
`

const LeadingImg = styled.div`
  width: 3.5rem; // 56px
  height: 3.5rem;
  background-image: url(https://picsum.photos/100/100);
  background-size: cover;
`

const TextContainer = styled.div`
  height: 3.5rem; // 56opx
  display: flex;
  flex-direction: column; 
  justify-content: center;
  color: #1D1B20;
`
const Headline = styled.p`
  font-weight: 700;
`

const SupportingText = styled.p``

const Divider = styled.hr`
  height: 1px;
  color: #79747E;
  margin: 0 1rem;
`

const ListTwoLine = () => {
  return (
    <div>
      <Container>
        <LeadingImg />
        <TextContainer>
          <Headline>headline</Headline>
          <SupportingText>supporting text</SupportingText>
        </TextContainer>
      </Container>
      <Divider></Divider>
    </div>
  );
};

export default ListTwoLine;