import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

if (process.env.NODE_ENV === 'development') {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.onCommitFiberRoot = () => {}
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* // <h3>Hello React project= Render example</h3> */}
    <App />
  </React.StrictMode>,
)
