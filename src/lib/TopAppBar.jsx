import { Navbar, Button } from "flowbite-react";
import { IoIosArrowBack } from "react-icons/io";

const TopAppBarFlowbite = ({ children }) => {
  return (
    <div className="w-full">
      <Navbar fluid className="px-4 bg-zinc-300">
        <Button pill color="gray" className="bg-transparent border-transparent">
          <IoIosArrowBack />
        </Button>

        <Navbar.Brand className="text-xl">
          {children}
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

          <Navbar.Link>
            Sign out
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopAppBarFlowbite;
