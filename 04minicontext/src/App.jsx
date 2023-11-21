
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'


function App() {


  return (
    <UserContextProvider>
    <h1>React with context api</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
