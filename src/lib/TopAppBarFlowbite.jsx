import { Navbar, Button } from "flowbite-react";
import { IoIosArrowBack } from "react-icons/io";

const TopAppBarFlowbite = () => {
  return (
    <>
      <Navbar className="w-full">
        <Button pill className="bg-transparent text-zinc-500 hover:bg-emerald-500 focus:outline-none focus:ring-emerald-300" >
          <IoIosArrowBack />
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

export default TopAppBarFlowbite;
