import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/common/index.css'
import BaseRouter from './router/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BaseRouter />
  </React.StrictMode>,
)
