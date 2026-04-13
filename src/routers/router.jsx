import { createBrowserRouter } from "react-router";
import RootLayout from "../components/rootLayout/RootLayout";
import Homepages from "../pages/Homepages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        path: "/",
        element: <Homepages/>,
      }
    ]
  },
  {
    path: "/timeline",
    element: <h2>Timeline from main jsx</h2>,
  },
  {
    path: "/stats",
    element: <h2>Stats from main jsx</h2>,
  }
])
export default router;