import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createRoutesFromElements, Route, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Body from './Components/Body.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import Github from './Components/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout/> } >
    <Route path=''  element={<Body/> } > </Route>,
    <Route path='/contact' element={ <Contact/> } ></Route>,
    <Route path='/about' element={ <About/> } ></Route>,
    <Route path='/github' element={ <Github/> } ></Route>,
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
