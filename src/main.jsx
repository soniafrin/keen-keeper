import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './routers/router'
import FriendContextProvider from './context/FriendContextProvidder'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendContextProvider>
      <RouterProvider router={router} />
    </FriendContextProvider>
  </StrictMode>,
)
