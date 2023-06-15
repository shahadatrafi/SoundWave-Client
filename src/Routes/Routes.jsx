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
import AdminRoute from "./AdminRoute";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import AddedClasses from "../pages/Dashboard/MyClasses/AddedClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
    errorElement: <ErrorPage></ErrorPage>,
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
        path: 'paymenthistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'payment/:id',
        element: <Payment></Payment>,
        loader: ({params})=> fetch(`http://localhost:5000/carts/${params.id}`)
      },
      {
        path: 'allusers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'allclasses',
        element: <AdminRoute><AllClasses></AllClasses></AdminRoute>
      },
      {
        path: 'addclass',
        element: <AddClass></AddClass>
      },
      {
        path: 'addedclasses',
        element: <AddedClasses></AddedClasses>
      }
    ]
  }
]);

export default router