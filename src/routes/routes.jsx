import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export const appPages = [
  {
    name: "Login",
    component: Login,
    menus: [],
    path: '/'
  },
  {
    name: "Home",
    component: Home,
    menus: ["topAppBar, navbar"],
    path: '/home'
  },
  {
    name: "About",
    component: About,
    menus: ["navbar"],
    path: '/about'
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