import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Search from "../pages/Search";
import Favorites from "../pages/Favorites";
import NotFound from "../pages/NotFound";
import { MdHome, MdSearch, MdFavorite, MdAddBox } from "react-icons/md";

export const appPages = [
  {
    name: "Login",
    component: Login,
    menus: [],
    path: "/",
    icon: null
  },
  {
    name: "Home",
    component: Home,
    menus: ["topAppBar", "navbar"],
    path: "/home",
    icon: <MdHome />
  },
  {
    name: "About",
    component: About,
    menus: [],
    path: "/about",
    icon: null
  },
  {
    name: "Search",
    component: Search,
    menus: ["navbar"],
    path: "/search",
    icon: <MdSearch />
  },
  {
    name: "Favorites",
    component: Favorites,
    menus: ["topAppBar", "navbar"],
    path: "/favorites",
    icon: <MdFavorite />
  },
  {
    name: "Not Found",
    component: NotFound,
    menus: [],
    path: '*',
    icon: null
  }
]

const routes = (
  <Routes>
    {appPages.map((page, index) => (
      <Route key={index} path={page.path} element={<page.component />} />
    ))}
  </Routes>
);

export default routes;