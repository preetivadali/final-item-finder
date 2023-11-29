import styled from "styled-components";

const Container = styled.button`
  height: 2.5rem; // 40px
  border-radius: 1.25rem; // 20px
  background-color: #F7F2FA;
  padding: 0 1.5rem; // 24px
  box-shadow: 0px 1px 2px #000000;
`

const Label = styled.p`
  font-size: 0.875rem; //14px
  font-weight: 500;
  color: #6750A4;
`

const Button = () => {
  return (
    <div>
      <Container>
        <Label>button</Label>
      </Container>
    </div>
  )
}

export default Button
