import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './Pages/AboutUs';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aktivitas from './Pages/Aktivitas';
import DetailMentor from './Pages/DetailMentor';
import Motivation from './Pages/Motivation';
import Profile from './Pages/Profile';
import LandingPage from './Pages/LandingPage';
import Mentor from './Pages/Mentor';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { UserProvider } from './Context/UserContext';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
    {
      path: "/aktivitas",
      element: <Aktivitas />,
    },
    {
      path: "/detailmentor",
      element: <DetailMentor />,
    },
    {
      path: "/motivation",
      element: <Motivation />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/mentor",
      element: <Mentor />,
    },
    {
      path: "/detailmentor",
      element: <DetailMentor />,
    },
    {
      path: "/motivation",
      element: <Motivation />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },

  ]);


  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  )
}

export default App
