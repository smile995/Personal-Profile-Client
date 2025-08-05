import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import BlogDetails from "../Component/ReusableComps/BlogDetails";
import ProjectDetails from "../Component/ReusableComps/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      { index: true, element: <HomePage/> },
      { path: "/about", element: <AboutPage/> },
      { path: "/projects", element: <Projects/> },
      { path: "/projects/:id", element: <ProjectDetails/> },
      { path: "/blogs", element: <Blogs/> },
      { path: "/blogs/:id", element: <BlogDetails/> },
      { path: "/contact", element: <Contact/> },
      { path: "/skills", element: <Skills/> },
    ],
  },
]);
