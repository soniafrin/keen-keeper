import { createBrowserRouter } from "react-router";
import RootLayout from "../components/rootLayout/RootLayout";
import Homepages from "../pages/Homepages";
import Statistics from "../pages/Statistics";
import Timeline from "../pages/Timeline";
import FriendDetails from "../components/friendDetails/FriendDetails";
import { Suspense } from "react";

// const response = fetch('/friends.json').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    HydrateFallback: ()=> <div className="text-center mt-5">Loading...</div>,
    children: [
      {
        path: "/",
        element: <Homepages />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Statistics />,
      },
      {
        path: '/:friendId',
        loader:  ({ params }) => fetch(`/friends.json`),
        element: <FriendDetails/>
      },
      // <Suspense fallback={<div className="text-center mt-5">Loading...</div>}><FriendDetails response={response}/></Suspense>,
    ]
    // HydrateFallback: () => <div className="text-center mt-5">Loading...</div>,
  },
])
export default router;