import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Skills from "../pages/Skills/Skills";
import Contact from "../pages/Contact/Contact";
import Experience from "../pages/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Education from "../pages/Education/Education";


export const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/experience',
        element:<Experience></Experience>,
      },
      {
        path:'/projects',
        element:<Projects></Projects>,
      },
      
      {
        path:'/education',
        element:<Education></Education>,
      },
      {
        path:'/skills',
        element:<Skills></Skills>,
      },
      {
        path:'/contact',
        element:<Contact></Contact>,
      },
     
    ]
  }
])