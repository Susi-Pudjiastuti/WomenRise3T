import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import './style.css'
import AboutUs from './Pages/AboutUs';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Aktivitas from './Pages/Aktivitas';
import DetailMentor from './Pages/DetailMentor';
import Motivation from './Pages/Motivation';
import Profile from './Pages/Profile';
import Mentor from './Pages/Mentor';
import MentorContextProvider from './Context/MentorContext';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { UserProvider } from './Context/UserContext';
import LandingFull from './Pages/LandingFull';
import Layout from './layout/layout';
import BookingProvider from './Context/BookingContext';
import Scholarships from './Pages/Scholarships';
import AddScholarship from './Components/Scholarship/AddScholarship';




function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <LandingFull />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "aktivitas",
        element: <Aktivitas />,
      },
      {
        path: "detail/:id",
        element: <DetailMentor />,
      },
      {
        path: "motivation",
        element: <Motivation />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "mentor",
        element: <Mentor />,
      },
      {
        path: "scholarships",
        element: <Scholarships />,
        loader: () => {
          if (!localStorage.token) {
            return redirect("/login");
          }
          return null;
        }
      },
      {
        path: "scholarships/add",
        element: <AddScholarship />,
      },
    ]
  },
  {
    loader: () => {
      if (localStorage.token) {
        return redirect("/");
      }
      return null;
    },
    children: [{
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    ]
  }]);


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MentorContextProvider>
          <UserProvider>
            <BookingProvider>
              <RouterProvider router={router} />
            </BookingProvider>
          </UserProvider>
        </MentorContextProvider>
      </QueryClientProvider>

    </>
  )
}

export default App


