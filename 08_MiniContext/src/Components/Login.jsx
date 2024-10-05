import React ,{useState ,useContext} from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div style={{padding:"20px", backgroundColor:"#343434", borderRadius:"10px" }} >
      <h2>Login</h2>
      <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} /> <br /><br />

      <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br /><br />
      <button onClick={handleSubmit}> Submit </button>
    </div>
  )
}

export default Login
