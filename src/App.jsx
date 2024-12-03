import {createBrowserRouter, createRoutesFromChildren, RouterProvider, Route, createRoutesFromElements} from "react-router-dom"
import React from "react"
import Home from "./pages/Home"
import {Contact} from "./pages/Contact"
import { Layout } from "./components/Layout"



function App() {

  let multipage = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Route>
  )) 
  

  return (
   <>
   <RouterProvider router={multipage}/>
   </>
  )
}

export default App
