
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  return (
  <UserContextProvider>
    <Login/>
    <Profile/>  
  </UserContextProvider>
  )
}
// 7:56:00
export default App
