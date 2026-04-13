import { createBrowserRouter } from "react-router";
import RootLayout from "../components/rootLayout/RootLayout";
import Homepages from "../pages/Homepages";
import Statistics from "../pages/Statistics";
import Timeline from "../pages/Timeline";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        path: "/",
        element: <Homepages/>,
      },
      {
        path: "/timeline",
        element: <Timeline/>,
      },
      {
        path: "/stats",
        element: <Statistics/>,
      }
    ]
  },
])
export default router;