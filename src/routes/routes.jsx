import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Root from "../root/Root";
import Loading from "../components/loading";
import DoctorDetails from "../pages/DoctorDetails";
import ErrorPage from "../components/ErrorPage";

const Home = lazy(() => import("../pages/Home"));
const MyBookings = lazy(() => import("../pages/MyBookings"));
const Blogs = lazy(() => import("../pages/Blogs"));
const ContractUs = lazy(() => import("../pages/ContractUs"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch(`${window.location.origin}/doctor-data.json`),
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/doctorDetails/:id",
        loader: () => fetch(`${window.location.origin}/doctor-data.json`),
        element: <DoctorDetails />,
      },
      {
        path: "/myBookings",
        element: (
          <Suspense fallback={<Loading />}>
            <MyBookings />
          </Suspense>
        ),
      },
      {
        path: "/blogs",
        loader: () => fetch(`${window.location.origin}/blogs-data.json`),
        element: (
          <Suspense fallback={<Loading />}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "/contactUs",
        element: (
          <Suspense fallback={<Loading />}>
            <ContractUs />
          </Suspense>
        ),
      },
      {
        path: "*",
        handle: { isErrorPage: true },
        element: <ErrorPage statusCode={404} message="Page not found" />
      }
    ],
  },
]);