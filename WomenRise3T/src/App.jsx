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

  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
