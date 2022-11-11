import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/* deixar aqui so 1 <App />, o resto tem q ser dentro do app <> */}
  </React.StrictMode>
)
