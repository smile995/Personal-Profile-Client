import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ProtfolioPage from "../Pages/ProtfolioPage";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import Skills from "../Pages/Skills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      { index: true, element: <HomePage/> },
      { path: "/about", element: <AboutPage/> },
      { path: "/protfolios", element: <ProtfolioPage/> },
      { path: "/blogs", element: <Blogs/> },
      { path: "/contact", element: <Contact/> },
      { path: "/skills", element: <Skills/> },
    ],
  },
]);
