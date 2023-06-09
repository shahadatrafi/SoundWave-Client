import Main from "../layouts/Main/Main";

import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ClassesPage from "../pages/ClassesPage/ClassesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/classes',
        element: <ClassesPage></ClassesPage>
      }
    ]
  },
]);

export default router