import { createBrowserRouter } from "react-router";
import RootLayout from "../components/rootLayout/RootLayout";
import Homepages from "../pages/Homepages";
import Statistics from "../pages/Statistics";
import Timeline from "../pages/Timeline";
import FriendDetails from "../components/friendDetails/FriendDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
      }
    ]
  },
  {
    path: '/friendList',
    element: <FriendDetails/>
  }
])
export default router;