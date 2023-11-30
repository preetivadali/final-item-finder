import { Navbar, Button } from "flowbite-react";
import { IoIosArrowBack } from "react-icons/io";

const TopAppBarFlowbite = () => {
  return (
    <div className="w-full justify-start">
      <Navbar fluid className="px-4">
        <Button pill color="gray" >
          <IoIosArrowBack />
        </Button>

        <Navbar.Brand className="text-xl">
          Search
        </Navbar.Brand>

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
    </div>
  );
};

export default TopAppBarFlowbite;
