import { BrowserRouter } from 'react-router-dom'

import Login from 'pages/Login'
import Routes from './routes'

import { useAuth } from 'hooks/auth'

const App = () => {
  const { logged } = useAuth()
  return <BrowserRouter>{logged ? <Routes /> : <Login />}</BrowserRouter>
}

export default App
