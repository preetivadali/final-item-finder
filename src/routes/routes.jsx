import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";

export const appPages = [
  {
    name: "Login",
    component: Login,
    menus: [],
    path: '/login'
  },
  {
    name: "Home",
    component: Home,
    menus: ["topAppBar, navbar"],
    path: '/'
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
    {appPages.map((pate, index) => (
      <Route key={index} path={page.path} element={<page.component />} />
    ))}
  </Routes>
);

export default routes;