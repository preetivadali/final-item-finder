import { Navbar } from "flowbite-react";
import { MdHome, MdSearch, MdFavorite, MdAddBox } from "react-icons/md";


const NavbarFlowbite = () => {
  return (
    <>
      <Navbar fluid className="w-full list-none border-red-500">
          <Navbar.Link className="flex flex-col items-center">
            <MdHome />
            Home
          </Navbar.Link>

          <Navbar.Link className="flex flex-col items-center">
            <MdSearch />
            Search
          </Navbar.Link>

          <Navbar.Link className="flex flex-col items-center">
            <MdFavorite />
            Favorites
          </Navbar.Link>

          <Navbar.Link className="flex flex-col items-center">
            <MdAddBox />
            List New
          </Navbar.Link>
      </Navbar>
    </>
  );
};

export default NavbarFlowbite;

// add router to links:
// <Navbar.Link as={Link} to="/">