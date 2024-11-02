import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import AboutUs from './Pages/AboutUs';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Aktivitas from './Pages/Aktivitas';
import DetailMentor from './Pages/DetailMentor';
import Motivation from './Pages/Motivation';
import Profile from './Pages/Profile';
import LandingPage from './Pages/LandingPage';
import Mentor from './Pages/Mentor';
import MentorContextProvider from './Context/MentorContext';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { UserProvider } from './Context/UserContext';
import LandingFull from './Components/Landing/LandingFull';




function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingFull />,
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
      path: "/detail/:id",
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
      <QueryClientProvider client={queryClient}>
        <MentorContextProvider>
          <UserProvider>
            <RouterProvider router={router} />
          </UserProvider>
        </MentorContextProvider>
      </QueryClientProvider>

    </>
  )
}

export default App
