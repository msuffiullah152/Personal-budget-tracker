import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,
     Route,
     createRoutesFromElements,
     RouterProvider
     } from 'react-router-dom'
import TransactionList from './components/TransactionList.jsx';

//layouts
import RootLayout from './layouts/RootLayout.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"element ={<RootLayout/>}>
     <Route path="TransactionList" element={<TransactionList />}/>
     <Route index element ={<TransactionList/>} />
   </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
