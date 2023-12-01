import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";
import { MdHome, MdSearch, MdFavorite, MdAddBox } from "react-icons/md";

export const appPages = [
  {
    name: "Login",
    component: Login,
    menus: [],
    path: "/",
    icon: ""
  },
  {
    name: "Home",
    component: Home,
    menus: ["topAppBar, navbar"],
    path: "/home",
    icon: MdHome
  },
  {
    name: "About",
    component: About,
    menus: ["navbar"],
    path: "/about",
    icon: ""
  },
  {
    name: "Search",
    component: Search,
    menus: ["navbar"],
    path: "/search",
    icon: MdSearch
  },
  {
    name: "Not Found",
    component: NotFound,
    menus: [],
    path: '*'
  },
]

const routes = (
  <Routes>
    {appPages.map((page, index) => (
      <Route key={index} path={page.path} element={<page.component />} />
    ))}
  </Routes>
);

export default routes;