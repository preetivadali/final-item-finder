import styled from "styled-components";
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { IconContext } from "react-icons";

const Container = styled.div`
  background-color: #F3EDF7;
  height: 5rem; // 80px
  padding-top: 0.75rem; // 12px
  padding-bottom: 1rem; // 16px
  gap: 0.5rem; // 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 3rem; // 48px
  gap: 0.25rem; // 4px
`

const Icon = styled.div`
  width: 1.5rem; // 24px
`

const Label = styled.p`
  font-size: 0.75rem; // 12px
  line-height: 1rem; // 16px
  font-weight: 500;
  color: #49454F;
`

const Active = styled.div`
  height: 2rem; // 32px
  width: 4rem; // 64px
  border-radius: 1rem; // 16px
`




const NavBar = () => {
  return (
    <div>
      <Container>
        <IconContext.Provider value= {{ size: "100%", color: "#1D1B20" }} >
          <IconContainer>
            <Icon>
              <IoMdHome />
            </Icon>
            <Label>label</Label>
          </IconContainer>

          <IconContainer>
            <Icon>
              <IoSearch />
            </Icon>
            <Label>label</Label>
          </IconContainer>

          <IconContainer>
            <Icon>
              <MdFavorite />
            </Icon>
            <Label>label</Label>
          </IconContainer>

          <IconContainer>
            <Icon>
              <FaSquarePlus />
            </Icon>
            <Label>label</Label>
          </IconContainer>
        </IconContext.Provider>
        
      </Container>
    </div>
  );
};

export default NavBar;
