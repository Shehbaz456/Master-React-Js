import React,{useContext,useState} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username,password})
    }


  return (
    <div style={{padding:"20px", backgroundColor:"#343434", borderRadius:"10px" }} >
      <h2>Login</h2>
      <input  style={{fontSize:"20px", padding:"5px" }} type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} /> <br /><br />

      <input style={{fontSize:"20px", padding:"5px" }}  type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br /><br />
      <button onClick={handleSubmit}> Submit </button>
    </div>
  )
}

export default Login
