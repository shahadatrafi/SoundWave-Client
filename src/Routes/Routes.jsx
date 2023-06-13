import Main from "../layouts/Main/Main";

import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../pages/Dashboard/Mycart/MyCart";
import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AllClasses from "../pages/Dashboard/AllClasses/AllClasses";
import PrivateRoute from "./PrivateRoute";

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
      },
      {
        path: '/instructors',
        element: <InstructorsPage></InstructorsPage>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path: 'enrolledclass',
        element: <MyEnrolledClasses></MyEnrolledClasses>
      },
      {
        path: 'allusers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'allclasses',
        element: <AllClasses></AllClasses>
      }
    ]
  }
]);

export default router