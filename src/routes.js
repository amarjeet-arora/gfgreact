import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Portfolio from "./components/Portfolio";


export const appRoutes=[
   
    {path:'/login', element: <Login/>},
    {path:'/register',element: <Register/>},
    {path:'/portfolio/:uid',element: <Portfolio/>}
]
