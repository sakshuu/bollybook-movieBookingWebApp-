import React from 'react'
import "./assets/css/App.css"
import { BrowserRouter } from 'react-router-dom'
import UserRoutes from './routes/UserRoutes'

const App = () => {
  return  <>
      <BrowserRouter>
  <UserRoutes/>
    </BrowserRouter>
  </>
}

export default App