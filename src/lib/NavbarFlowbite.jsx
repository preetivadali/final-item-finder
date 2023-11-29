import { Navbar, Button } from "flowbite-react";
import { IoIosArrowBack } from "react-icons/io";

const NavbarFlowbite = () => {
  return (
    <>
      <Navbar className="w-full">
        <Button pill>
          <IoIosArrowBack />
          Back
        </Button>

        <Navbar.Toggle />
        
        <Navbar.Collapse>
          <Navbar.Link>
            Home
          </Navbar.Link>

          <Navbar.Link>
            About
          </Navbar.Link>

          <Navbar.Link>
            Settings
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarFlowbite;
