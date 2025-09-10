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
import DashboardLayout from "../Layout/DashboardLayout";
import CreateProject from "../Pages/AdminPages/CreateProject";
import AddEducation from "../Pages/AdminPages/AddEducation";
import CreateBlog from "../Pages/AdminPages/CreateBlog";
import AddExperience from "../Pages/AdminPages/AddExperience";
import ProfileStatistics from "../Pages/AdminPages/ProfileStatistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:id", element: <ProjectDetails /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:id", element: <BlogDetails /> },
      { path: "/contact", element: <Contact /> },
      { path: "/skills", element: <Skills /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <ProfileStatistics /> },
      { path: "profile-statistics", element: <ProfileStatistics /> },
      { path: "create-projects", element: <CreateProject /> },
      { path: "add-educations", element: <AddEducation /> },
      { path: "add-experienecs", element: <AddExperience /> },
      { path: "create-blogs", element: <CreateBlog /> },
    ],
  },
]);
