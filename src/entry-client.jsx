import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App.jsx'

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
)
