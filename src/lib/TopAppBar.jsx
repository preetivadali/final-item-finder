import styled from "styled-components";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IconContext } from "react-icons";

const Container = styled.div`
  height: 4rem; //64px
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FEF7FF;
  gap: 1.5rem // 24px
  margin: 0 1rem; // 16px
`
const Headline = styled.h1`
  font-size: 1.375rem; // 22px
  line-height: 1.375rem; // 22px
`

const LeadingIcon = styled.div`
  width: 3rem; // 48px
  padding: 8px;
`

const TrailingIcon = styled.div`
  width: 3rem; // 48px
  padding: 8px;
`


const TopAppBar = () => {
  return (
    <div>
      <Container>
        <IconContext.Provider value={{ size: "1.5rem" }} >

          <LeadingIcon>
            <IoIosArrowBack />
          </LeadingIcon>

          <Headline>headline</Headline>

          <TrailingIcon>
            <IoMenu />
          </TrailingIcon>

        </IconContext.Provider>
      </Container>
    </div>
  );
};

export default TopAppBar;
