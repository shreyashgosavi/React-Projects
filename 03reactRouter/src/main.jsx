import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import GitHub, { githubInfoloader } from './components/Github/github.jsx'
import User from './User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "home",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />

//       },
//       {
//         path:"contact",
//         element: <Contact />
//       },
//       {
//         path:"github",
//         element: <GitHub />
//       },
//     ]
//   }
//])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route
      loader = {githubInfoloader}
      path='github' element={<GitHub/>}/>
      <Route path='user/:userId' element={<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
