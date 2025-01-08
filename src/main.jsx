import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import App from './App-1223-Accordion.jsx'
// import App from './App-1210-Navbar.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
// import './scss/all.scss'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 前端路由 */}
    <HashRouter>
      <App />
    </HashRouter>


    {/* 後端路由 */}
    {/* 
    <BrowserRouter>
      <App />
    </BrowserRouter>
     */}
  </React.StrictMode>,
)
