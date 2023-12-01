import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { appPages } from "../routes/routes";
import { MdHome, MdSearch, MdFavorite, MdAddBox } from "react-icons/md";


const NavbarFlowbite = () => {
  return (
    <Navbar fluid className="fixed bottom-0 left-0 w-full list-none bg-emerald-500">
      {appPages.map((page, index) =>
        page.menus.includes("navbar") && (
          <li key={index}>
            <Navbar.Link as={NavLink} to={page.path} className="flex flex-col items-center">
              {page.icon}
              {page.name}
            </Navbar.Link>
          </li>
        )
      )}
    </Navbar>
  );
};

export default NavbarFlowbite;
