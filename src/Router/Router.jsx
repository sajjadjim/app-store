import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import AppPages from "../App Pages/App Pages";
import AppDetails from "../App Details/AppDetails";
import LoginPage from "../App Pages/LoginPage";
import SignUpPage from "../App Pages/SignUpPage";
import PrivateRoute from "../Provider/PrivateRoute";
import UserProfile from "../UserProfile/UserProfile";
import Help from "../Help/Help";
import Root from "../Root/Root";

const Routers = createBrowserRouter([
    {
      path: "/",
      Component:Home,
      children:[
        {
        index: true,
        path:'/',
        Component:Root
        },
        {
          path:'/app'
          ,Component:AppPages,
          loader: ()=>fetch('/app.json')
        }
      ]
    },
    {
      path:'/app-details/:id'
      ,element:<PrivateRoute>
        <AppDetails></AppDetails>
      </PrivateRoute>,
      loader: ()=> fetch('/app.json')
    },
    {
      path:'/login'
      ,Component:LoginPage
    },
    {
      path:'/signup'
      ,Component:SignUpPage
    },
    {
      path: "/*",
      element: <h2>Error404</h2>,
    },
    {
      path:'/userProfile',
      Component:UserProfile
    },
    {
      path:"/help",
      Component:Help
    }
  ]);


  export default Routers;
